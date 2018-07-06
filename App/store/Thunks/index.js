import axios from "axios";
import uuidV1 from "uuid/v1";
import Firebase from "../../components/Firebase/Firebase";

//Initial State
const defaultPurchases = [];
const defaultUser = {};
const defaultExpenses = {};
const purchaseToCommit = {};

const defaultState = {
  purchases: defaultPurchases,
  user: defaultUser,
  expenses: defaultExpenses,
  purchaseToCommit: purchaseToCommit
};

//Constants
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const GET_PURCHASES = "GET_PURCHASES";
const ADD_PURCHASE = "ADD_PURCHASE";
const COMMIT_PURCHASE = "COMMIT_PURCHASE";
const GET_EXPENSES = "GET_EXPENSES";
const EDIT_PURCHASES = "EDIT_PURCHASES";

//Utility
const formatPurchases = purchases =>
  purchases ? Object.keys(purchases).map(purchase => purchases[purchase]) : [];

const formatExpenses = expenses => ({
  amount: expenses
    ? Object.keys(expenses).reduce((total, key) => total + expenses[key], 0)
    : 0,
  categoryBroad: "Utilities",
  categoryDetailed: "Utilities",
  date: Date.now(),
  name: "Recurring Expenses"
});

//Action Creators
const gotUser = user => ({ type: GET_USER, user });
const gotPurchases = purchases => ({ type: GET_PURCHASES, purchases });
const gotExpenses = expenses => ({ type: GET_EXPENSES, expenses });
const removedUser = () => ({ type: REMOVE_USER });
const addedPurchase = purchase => ({ type: ADD_PURCHASE, purchase });
const commitedPurchase = purchase => ({ type: COMMIT_PURCHASE, purchase });
const editedPurchase = purchase => ({ type: EDIT_PURCHASES, purchase });

//Thunks for initial data fetch (all fields)
export const me = user => async dispatch => {
  try {
    const data = await Firebase.database
      .ref(`users/${user.uid}`)
      .once("value")
      .then(snapshot => {
        return snapshot.val();
      });

    dispatch(
      gotUser({
        uid: user.uid,
        userInfo: data.userData
      })
    );
    dispatch(gotPurchases(formatPurchases(data.purchases)));
    dispatch(gotExpenses(formatExpenses(data.recurringExpenses)));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (userData, method) => async dispatch => {
  try {
    if (method === "signup") {
      const user = await Firebase.auth.createUserWithEmailAndPassword(
        userData[0].email,
        userData[0].password
      );
      Firebase.database.ref(`users/${user.user.uid}`).set({
        userData: {
          uid: user.user.uid,
          email: userData[0].email,
          firstName: userData[0].firstName,
          lastName: userData[0].lastName,
          ...userData[1]
        },
        recurringExpenses: {
          ...userData[2]
        }
      });
      dispatch(gotUser(user.user.uid));
    } else {
      const user = await Firebase.auth.signInWithEmailAndPassword(
        userData.email,
        userData.password
      );
      const data = await Firebase.database
        .ref(`users/${user.user.uid}`)
        .once("value")
        .then(snapshot => {
          return snapshot.val();
        });

      dispatch(
        gotUser({
          uid: user.user.uid,
          userInfo: data.userData
        })
      );
      dispatch(gotPurchases(formatPurchases(data.purchases)));
      dispatch(gotExpenses(formatExpenses(data.recurringExpenses)));
    }
  } catch (err) {
    return "Invalid Username or Password";
  }
};
export const logout = () => dispatch => {
  Firebase.auth
    .signOut()
    .then(() => dispatch(removedUser()))
    .catch(err => console.error(err));
};

export const addNewPurchase = uri => async dispatch => {
  try {
    const newPurchase = await axios.get(
      "https://safe-bastion-55889.herokuapp.com/api/receiptRecognition"
      // 'http://192.168.1.38:3000/api/receiptRecognition',
    );
    dispatch(addedPurchase(newPurchase));
  } catch (err) {
    console.error(err);
  }
};

export const commitPurchase = (user, purchase) => dispatch => {
  let upid = uuidV1();
  let ifUpc = "";
  if (purchase.upc) {
    ifUpc = purchase.upc;
    Firebase.database.ref(`products/${purchase.upc}`).set({
      name: purchase.name,
      amount: purchase.amount,
      categoryBroad: purchase.categoryBroad
    });
  }

  Firebase.database
    .ref(`users/${user}/purchases/${upid}`)
    .set({ upc: ifUpc, purchasedBy: user, purchaseUid: upid, ...purchase });
  dispatch(commitedPurchase(purchase));
};

export const editPurchase = (user, purchase) => dispatch => {
  if (!purchase.purchaseUid) purchase.purchaseUid = uuidV1();
  if (purchase.upc !== "") {
    Firebase.database.ref(`products/${purchase.upc}`).set({
      name: purchase.name,
      amount: purchase.amount,
      categoryBroad: purchase.categoryBroad
    });
  }
  Firebase.database
    .ref(`users/${user}/purchases/${purchase.purchaseUid}`)
    .update({ ...purchase });
  dispatch(editedPurchase(purchase));
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user };
    case REMOVE_USER:
      return defaultState;
    case GET_PURCHASES:
      return { ...state, purchases: action.purchases };
    case ADD_PURCHASE:
      return { ...state, purchaseToCommit: action.purchase };
    case COMMIT_PURCHASE:
      return { ...state, purchases: [...state.purchases, action.purchase] };

    case GET_EXPENSES:
      return { ...state, expenses: action.expenses };
    case EDIT_PURCHASES:
      return {
        ...state,
        purchases: state.purchases
          .filter(
            purchase => purchase.purchaseUid !== action.purchase.purchaseUid
          )
          .concat(action.purchase)
      };
    default:
      return state;
  }
}
