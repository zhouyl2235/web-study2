<template>
  <div>
    <div class="header">顶部区域</div>

    <div class="content"></div>
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
  height:60px;
  background:skyblue;
}

</style>