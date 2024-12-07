import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
/*import OrderBack from "@/views/Order/OrderBack/index.vue";
import OrderList from "@/views/Order/OrderList/index.vue";*/
//异步
const Goods = () => import('../views/Goods/Goods.vue')
const Params = () => import('../views/Params/Params.vue')
const Order = () => import('../views/Order/index.vue')
const OrderList = () => import('../views/Order/OrderList/index.vue')
const OrderBack = () => import('../views/Order/OrderBack/index.vue')



Vue.use(VueRouter)


const routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'goods',
                name: 'Goods',
                component: Goods
            },
            {
                path: 'params',
                name: 'Params',
                component: Params
            },
            {
                path: 'order',
                name: 'Order',
                component: Order,
                redirect: '/order/list',
                children:[
                    {
                        path: 'order-list',
                        component: OrderList
                    },
                    {
                        path: 'order-back',
                        component: OrderBack
                    }
                ]
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
