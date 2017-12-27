// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyBBlhcfnZEXgUD7GKBvfXgsRg_CyLXtW14",
  authDomain: "testvue-ac18e.firebaseapp.com",
  databaseURL: "https://testvue-ac18e.firebaseio.com",
  projectId: "testvue-ac18e",
  storageBucket: "testvue-ac18e.appspot.com",
  messagingSenderId: "840550984771"
};
firebase.initializeApp(config);

let app
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function(user){
if(!app){
  app = new Vue({
    el: '#app',
    router,  //router:router
    template: '<App/>',
    components: { App }
  })
}
})

