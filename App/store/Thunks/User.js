import Firebase from '../../components/Firebase/Firebase';

export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const defaultUser = {};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });


export const auth = (userData, method) => async dispatch => {
  if (method === 'signup') {
    await Firebase.auth
      .createUserWithEmailAndPassword(userData[0].email, userData[0].password)
      .then(user => {
        Firebase.database.ref(`users/${user.user.uid}`).set({
          userData: {
            ...userData[0],
            ...userData[1]
          },
          recurringExpenses: {
            ...userData[2]
          }
        });
        dispatch(getUser(user.user.uid));
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    await Firebase.auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(async user => {
        const allPurchases = await Firebase.database
          .ref(`users/${user.user.uid}`)
          .once('value').then((snapshot) => {
            return snapshot.val().purchases || ''
          })
        const userData = await Firebase.database
          .ref(`users/${user.user.uid}`)
          .once('value').then((snapshot) => {
            return snapshot.val().userData || ''
          })

        dispatch(
          getUser({
            uid: user.user.uid,
            purchases: allPurchases,
            userInfo: userData
          })
        );
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export const logout = () => dispatch => {
  Firebase.auth
    .signOut()
    .then(() => dispatch(removeUser()))
    .catch(err => console.error(err));
};


export const addPicture = (uuid, uri) => dispatch => {
  Firebase.database.ref(`users/${uuid}`).set({ uri: uri });
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;

    default:
      return state;
  }
}
