require('./bootstrap');
import Vue from 'vue'
import router from "./router"
import vuetify from './vuetify'
import store from "./store"



Vue.component("mainapp",require("./components/mainapp.vue").default)
const app=new Vue({
    el:"#app",
    router,
    vuetify,
    store,
 
})