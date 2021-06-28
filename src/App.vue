<!--
 * @Author: wgj
 * @Date: 2021-05-31 11:05:08
 * @LastEditTime: 2021-06-28 14:47:41
 * @LastEditors: wgj
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade">
      <loading v-if="this.$store.getters.getIsLoading"></loading>
    </transition>
    <router-view />
  </div>
</template>
<script>
import Loading from '@/components/Loading';

export default {
  name: 'app',
  components: {
    Loading,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
