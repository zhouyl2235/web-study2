const express = require('express');

const app = express();
//路由
const router = require('./router')

app.use('/api',router)

app.listen(8989,()=>{
    console.log('server is running at port 8989')
})