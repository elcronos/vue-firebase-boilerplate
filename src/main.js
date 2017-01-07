// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDyOoTAOrA3KvirPhQYLnIBq5Mw9v23YeI",
    authDomain: "capcarde.firebaseapp.com",
    databaseURL: "https://capcarde.firebaseio.com",
    storageBucket: "firebase-capcarde.appspot.com",
    messagingSenderId: "268403138879"
};

Firebase.initializeApp(config);

let db = Firebase.database()

db.ref('tasks/').set({
    task: 'Configure Firebase',
    completed: false
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
