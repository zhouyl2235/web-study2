//连接数据库  1.安装mysql 2.创建连接
const mysql = require('mysql');

//创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', //数据域名 地址
    user: 'root', //数据名称
    password: '123456', //数据库密码 xampp集成
    database: 'test',
    port:'3306'
})

//封装数据库操作语句 sql语句 参数数组arr  callback成功函数结果
function sqlFn(sql, arr, callback) {
    connection.query(sql, arr, function (error, result) {
        if (error) {
            console.log('数据库语句错误');
            return callback(error);
        }
        callback(null, result)
    });
}

module.exports = sqlFn



