/*
 * @Author: yhy
 * @Date: 2021-01-30 18:35:47
 * @LastEditTime: 2021-01-30 18:36:03
 * @LastEditors: yhy
 * @Description: 
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)