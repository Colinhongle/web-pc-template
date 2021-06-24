/*
 * @Author: your name
 * @Date: 2020-10-27 17:49:08
 * @LastEditTime: 2021-03-22 19:59:07
 * @LastEditors: wgj
 * @Description: In User Settings Edit
 * @FilePath: \Git\plate-control-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import createVuexAlong from 'vuex-along'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
    reducer(val) {
      return {
        // 需要储存的数据
        bind: val.bind,
      }
    }
  })],
  modules,
  getters,
})

export default store
