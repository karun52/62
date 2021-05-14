import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAeJK9mp7cjsjq_06Oxe2cfQuJ7JM1TGB8",
    authDomain: "attandance-15cdb.firebaseapp.com",
    databaseURL: "https://attandance-15cdb-default-rtdb.firebaseio.com",
    projectId: "attandance-15cdb",
    storageBucket: "attandance-15cdb.appspot.com",
    messagingSenderId: "1032004618426",
    appId: "1:1032004618426:web:e2553b3bb1abc8cfadda83"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default  firebase.database()
 