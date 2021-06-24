/*
 * @Author: wgj
 * @Date: 2021-05-31 11:05:08
 * @LastEditTime: 2021-06-24 10:52:51
 * @LastEditors: wgj
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/css/element-variables.scss'
import '@/icons' // icon
import './permission' // permission control

import { hex_md5 } from "@/utils/md5";
Vue.prototype.$hex_md5 = hex_md5//挂载到Vue实例上面

import * as filters from './filters' // 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
import { message } from '@/utils/resetMessage';
Vue.use(ElementUI);
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
