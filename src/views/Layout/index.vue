<template>
  <div class="layout">
<!--    左侧导航区域-->
    <MyMenu class="menu" :isCollapse="isCollapse"/>
<!--      右侧内容区域-->
    <Content class="content" :class="{isActive:isCollapse}" @changeMenu='changeCollapse' :isCollapse='isCollapse'/>
  </div>
</template>

<script>
import MyMenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
  components: {
    MyMenu,
    Content
  },
  data(){
    return{
      isCollapse:false,
    }
  },
  methods:{
    changeCollapse(){
      this.isCollapse= !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.layout{
  .menu{
    //width: 200px;
    min-height: 500px;
    background: #1b3554;
    position: fixed;
    top:0;
    bottom:0;
    transition: width 0.3s;/* 平滑过渡效果 */
  }
  .content{
    margin-left: 200px;
    transition: margin-left 0.3s;/* 平滑过渡效果 */
  }
  .isActive{
    margin-left: 64px;
  }
}

</style>