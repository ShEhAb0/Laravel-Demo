import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
import Login from "./Pages/Login.vue"
import Admin from "./Pages/Admin.vue"

const routes=[
    {
        path:"/Login",
        component:Login
    },
    {
        path:"/admin",
        component:Admin
    },
   
]

export default new Router({
    mode:'history',
    routes
}
)