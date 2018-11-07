import Vue from "vue";
import VueFire from "vuefire";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueFire);

firebase.initializeApp({
  apiKey: "AIzaSyCWjM0clmwobRXOuaMVSGVi9vtv-iJLm0Y",
  authDomain: "aventuras-de-bolso.firebaseapp.com",
  databaseURL: "https://aventuras-de-bolso.firebaseio.com",
  projectId: "aventuras-de-bolso",
  storageBucket: "aventuras-de-bolso.appspot.com",
  messagingSenderId: "893437512839"
});

// const db = firebase.firestore();

new Vue({
  router,
  store,
  firestore: {},
  render: h => h(App)
}).$mount("#app");
