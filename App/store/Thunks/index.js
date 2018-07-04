import axios from 'axios'
import uuidV1 from 'uuid/v1'
import Firebase from '../../components/Firebase/Firebase'

//Initial State
const defaultPurchases = []
const defaultUser = {}
const defaultExpenses = []
const purchaseToCommit = {}

const defaultState = {
  purchases: defaultPurchases,
  user: defaultUser,
  expenses: defaultExpenses,
  purchaseToCommit
}

//Constants
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_PURCHASES = 'GET_PURCHASES'
const ADD_PURCHASE = 'ADD_PURCHASE'
const COMMIT_PURCHASE = 'COMMIT_PURCHASE'
const GET_EXPENSES = 'GET_EXPENSES'

//Action Creators
const gotUser = user => ({ type: GET_USER, user })
const gotPurchases = purchases => ({type: GET_PURCHASES, purchases})
const gotExpenses = expenses => ({type: GET_EXPENSES, expenses})
const removedUser = () => ({ type: REMOVE_USER })
const addedPurchase = purchase => ({ type: ADD_PURCHASE, purchase})
const commitedPurchase = () => ({ type: COMMIT_PURCHASE })

//Thunks for initial data fetch (all fields)
export const me = user => async dispatch => {
  try {
  const data = await Firebase.database
  .ref(`users/${user.uid}`)
  .once('value').then((snapshot) => {
    return snapshot.val()
  })

  dispatch(
    gotUser({
      uid: user.uid,
      userInfo: data.userData,
    })
  )
  dispatch(gotPurchases(data.purchases))
  dispatch(gotExpenses(data.recurringExpenses))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (userData, method) => async dispatch => {
  try {
  if (method === 'signup') {
    const user = await Firebase.auth
      .createUserWithEmailAndPassword(userData[0].email, userData[0].password)
    Firebase.database.ref(`users/${user.user.uid}`).set({
      userData: {
        ...userData[0],
        ...userData[1]
      },
      recurringExpenses: {
        ...userData[2]
      }
        });
        dispatch(gotUser(user.user.uid));
      } else {
    const user = await Firebase.auth
      .signInWithEmailAndPassword(userData.email, userData.password)
    const data = await Firebase.database
      .ref(`users/${user.user.uid}`)
      .once('value').then((snapshot) => {
        return snapshot.val()
      })

    dispatch(
      gotUser({
        uid: user.user.uid,
        userInfo: data.userData,
      })
    )
    dispatch(gotPurchases(data.purchases))
    dispatch(gotExpenses(data.recurringExpenses))
  }
  } catch (err) {
    return 'Invalid Username or Password'
  }
}
export const logout = () => dispatch => {
  Firebase.auth
    .signOut()
    .then(() => dispatch(removedUser()))
    .catch(err => console.error(err));
};

export const addNewPurchase = (base64) => async dispatch => {
  try {
    // console.log(uri, path);
    // const newImage = await FileSystem.downloadAsync(base64);
    console.log('htting image')
    // Firebase.storage.ref().put(path).then(snapshot => {
    //   console.log(snapshot)
    // })
    const newPurchase = await axios.post(
      // 'https://safe-bastion-55889.herokuapp.com/api/receiptRecognition',
      'http://192.168.1.38:3000/api/receiptRecognition',
      { fileName: base64 }
    );
    dispatch(addedPurchase(newPurchase));
  } catch (err) {
    console.error(err);
  }
};

export const commitPurchase = (user, purchase) => dispatch => {
  let upid = uuidV1();
  console.log('Commiting Purchase', user, purchase);
  Firebase.database
    .ref(`users/${user}/purchases/${upid}`)
    .set({ ...purchase });
  dispatch(commitedPurchase());
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user};
    case REMOVE_USER:
      return defaultState;
    case GET_PURCHASES:
      return {...state, purchases: action.purchases}
    case ADD_PURCHASE:
      return {...state, purchaseToCommit: action.purchase}
    case COMMIT_PURCHASE:
      return {...state, purchases: [...state.purchases, action.purchase]}
    case GET_EXPENSES:
      return {...state, expenses: action.expenses}
    default:
      return state;
  }
}
