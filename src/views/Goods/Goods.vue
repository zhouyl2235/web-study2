<template>
  <div class="goods">
<!--    1、表格区域-->
    <div class="header"></div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">添加</el-button>

    <!--    2、表格数据展示区域-->
    <div class="wrapper">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table :data="tableData" border >
        <el-table-column prop="date" label="商品ID" width="100"></el-table-column>
        <el-table-column prop="date" label="商品名称" width="100"></el-table-column>
        <el-table-column prop="date" label="商品价格" width="100"></el-table-column>
        <el-table-column prop="date" label="商品数量" width="100"></el-table-column>
        <el-table-column prop="date" label="商品类目" ></el-table-column>
        <el-table-column prop="date" label="商品卖点" ></el-table-column>
        <el-table-column prop="date" label="商品描述" ></el-table-column>
        <el-table-column prop="date" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

<!--    3、分页展示工具-->
      <div class=""></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      tableData:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
      ]
    };
  },
  methods:{
    /**
     * 编辑操作
     */
    handleEdit(){},
    /**
     * 删除操作
     */
    handleDelete(){},

  },
    //生命周期函数
    created() {
      this.$api.getGoodsList({
          page:1
      })
              .then(res=>{
                  console.log(res.data);
              })
    }
}
</script>

<style lang="less" scpoed>
.goods{
  margin:20px ;
}
.header{
  display: flex;
  button{
    margin-left:20px;
  }
  .wrapper{
    margin:20px 0;
  }
}
</style>