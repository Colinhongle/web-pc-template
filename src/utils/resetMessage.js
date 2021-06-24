/*
 * @Author: wgj
 * @Date: 2020-12-28 13:58:28
 * @LastEditTime: 2021-03-09 15:43:33
 * @LastEditors: wgj
 * @Description: 
 */
/**重置message，防止重复点击重复弹出message弹框 */
import {
    Message
} from 'element-ui';
let messageInstance = null;
const resetMessage = (options) => {
    if (messageInstance) {
        messageInstance.close()
    }
    messageInstance = Message(options)
};
['error', 'success', 'info', 'warning'].forEach(type => {
    resetMessage[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type
        return resetMessage(options)
    }
})
export const message = resetMessage
