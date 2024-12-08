/**
 * 所有的请求方法
 */

import axios from 'axios'
import base from './base'
const api ={
    getGoodsList(){
        return axios.get(base.goodsList,{
            params:{
                page:1,
                pageSize:10
            }
            })
    }
}