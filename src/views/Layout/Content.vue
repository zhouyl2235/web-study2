<template>
  <div>
    <div class="header">
      <i v-if='!isCollapse' @click="changeMenu" class="iconfont icon-right-indent"> </i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"> </i>
    顶部区域</div>

    <div class="content">
      <div class="content">目录</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeMenu() {
      //点击切换按钮切换父组件的数据 isCollapse
      this.$emit('changeMenu');
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  width: auto;
  background: skyblue;

  .iconfont {
    font-size: 24px;
    color: white; /* 设置图标颜色 */
  }
}

/*.main-content {
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
}

.content {
  padding: 10px;
  background: #f0f0f0;
}*/
</style>