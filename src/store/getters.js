/*
 * @Author: wgj
 * @Date: 2021-03-22 19:53:07
 * @LastEditTime: 2021-04-25 10:37:13
 * @LastEditors: wgj
 * @Description: 
 */

const getters = {
  // 绑定管理筛选数据
  getBindFilter: state => state.bind.bindFilter,
  getDetailRouter: state => state.bind.detailRouter,
  getIsLoading: state => state.setting.isLoading,//是否显示loading


}
export default getters
