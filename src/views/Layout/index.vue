<template>
  <div class="layout">
<!--    左侧导航区域-->
    <MymMnu class="menu"/>
<!--      右侧内容区域-->
    <Content class="content"/>
  </div>
</template>

<script>
import MymMnu from './Mymenu.vue'
import Content from './Content.vue'

export default {
  components: {
    MymMnu,
    Content
  }
}
</script>

<style lang="less" scoped>
.layout{
  display: flex;
  .menu{
    width: 200px;
    min-height: 500px;
    background: #666;
    top:0;

  }
  .content{
    margin-left: 200px;
  }
}

</style>