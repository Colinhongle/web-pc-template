<!--
 * @Author: wgj
 * @Date: 2021-04-20 15:05:20
 * @LastEditTime: 2021-04-20 15:28:25
 * @LastEditors: wgj
 * @Description: 
-->
<template>
<div class="loading">
    <svg-icon icon-class="icon-loading" />
</div>
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
