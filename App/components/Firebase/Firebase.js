import * as firebase from 'firebase'

  const config = {
    apiKey: 'AIzaSyCkaOIts1TvwRVjmfihtVNutJnrq3DruX4',
    authDomain: 'dime-d9d45.firebaseapp.com',
    databaseURL: 'https://dime-d9d45.firebaseio.com',
    projectId: 'dime-d9d45',
    storageBucket: 'dime-d9d45.appspot.com',
    messagingSenderId: '332258031993'
  };

class Firebase {
    static auth
    static database
    static init() {
        firebase.initializeApp(config)
        firebase.database().ref('users/002').set({
            name: 'Craigs',
            age: 1
        })
        Firebase.auth = firebase.auth()
        Firebase.database = firebase.database()
    }
}

export default Firebase
