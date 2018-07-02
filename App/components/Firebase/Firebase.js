import * as firebase from 'firebase';
import { config } from '../../../secrets';

class Firebase {
  static auth;
  static database;
  static storage
  static init() {
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
    Firebase.database = firebase.database();
    Firebase.storage = firebase.storage()
  }
}

export default Firebase;
