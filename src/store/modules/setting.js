/*
 * @Author: your name
 * @Date: 2020-11-13 09:25:38
 * @LastEditTime: 2021-04-21 11:00:20
 * @LastEditors: wgj
 * @Description: In User Settings Edit
 * @FilePath: \Git\plate-control-admin\src\store\modules\bind.js
 */

const state = {
    isLoading:false,//是否显示loading
    isError:false,//当true的时候，显示刷新按钮

}

const mutations = {
    showLoading: (state, data) => {
        state.isLoading = data
    },
    showIsError: (state, data) => {
        state.issError = data
    },
   
}

const actions = {
    showLoading({ commit, state }, data) {
        commit('showLoading', data)
    },
    showIsError({ commit, state }, data) {
        commit('showIsError', data)
    },

}

export default {
    namespaced: false,
    state,
    mutations,
    actions
}

