/*
 *@params => permession = {
 *   title: '通知标题'，
 *   body: '通知信息',
 *   icon: 'fa fa-bell'
 * }
 *
 * @params => callback //方法回调
 * */
export default function (permission, callback) {
  if (!window.Notification) {
    return false
  }

  Notification.permission = permission
  const notifycation = new Notification(permission.title, {
    body: permission.body,
    icon: permission.icon,
    noscreen: true
  })

  notifycation.onclick = function () {
    callback()
    notifycation.close()
  }
}
