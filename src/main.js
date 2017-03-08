// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Firebase from 'firebase'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Initialize Firebase
let config = {
    apiKey: "AIzaSyDyOoTAOrA3KvirPhQYLnIBq5Mw9v23YeI",
    authDomain: "capcarde.firebaseapp.com",
    databaseURL: "https://capcarde.firebaseio.com",
    storageBucket: "firebase-capcarde.appspot.com",
    messagingSenderId: "268403138879"
};

Firebase.initializeApp(config);


//Import Pages
import App from './App'

// 1. Define route components.
// These can be imported from other files
const Main = { template: '<div>Main Page</div>' }
const MyComponent = { template: App }
// 2. Define routes
const routes = [
  { path: '/main', component: Main },
  { path: '/component', component: MyComponent }
]
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')


/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/