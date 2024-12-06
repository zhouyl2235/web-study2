import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
//异步
const Goods = () => import('../views/Goods/Goods.vue')
const Params = () => import('../views/Params/Params.vue')
const Order = () => import('../views/Order/index.vue')
Vue.use(VueRouter)


const routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/',
                name: 'Goods',
                component: Goods
            },
            {
                path: '/',
                name: 'Params',
                component: Params
            },
            {
                path: '/',
                name: 'Order',
                component: Order
            },

        ]
    },
    {
        path: './login',
        name: 'login',
        component: Login

    }
]

const router = new VueRouter({
    routes
})

export default router
