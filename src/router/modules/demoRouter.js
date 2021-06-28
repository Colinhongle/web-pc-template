/*
 * @Author: wgj
 * @Date: 2021-03-24 13:52:47
 * @LastEditTime: 2021-06-28 13:48:58
 * @LastEditors: wgj
 * @Description: 
 */
const demoRouter = {
    path: '/About',
    name: 'About',
    component: () => import("@/views/About"),
    meta: {
        title:"demo"
    },
}

export default demoRouter