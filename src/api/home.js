import axios from 'axios'
import {FormData, LoginAjax} from './utils'

// 登陆
export const Login = (userCode, userPass) => {
  return LoginAjax(userCode, userPass).then(res => res)
}

// 退出登录
export const Logout = () => axios.get(`/Account/Logout`).then(res => res.data)

// 自动登陆
export const AutoAction = (id) => axios.post(`/API/AutoAction/${id}`).then(res => res.data)

// 解锁屏幕
export const UnLockScreen = (params) => axios.all(`/Account/UnLockScreen`, params).then(res => res.data)

// 获取菜单
export const GetMenu = () => axios.get(`/WebCenter/MenuEpsJson/menu`, {
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cache-Control': 'max-age=0'
  }
}).then(res => res)

// 切换项目层级
export const SwitchEpsProject = (projectId) => axios.get(`/WebCenter/SwitchEpsProject/${projectId}`).then(res => res.data)

// BlueEarth 切换项目层级
export const BESwitchProject = (projectId) => axios.post(`/BlueEarth/SwitchProject/`, {projectguid: projectId}).then(res => res.data)

// 当前登陆人审批信息
// params = {types, index, size, swhere};
export const OwnWorkFlowInfos = (params = {}) => {
  const postParams = {
    types: params.types || `infos,actived,join`,
    index: params.index || `0`,
    size: params.size || `10`,
    type: 'infos',
    swhere: params.swhere || ``
  }

  return FormData.post(`/WorkFlow/MyWorkInfos`, postParams).then(res => res.data)
}

// 当前登陆人消息
export const OwnMessage = (params = {}) => {
  const postParams = {
    types: params.types || `infos`,
    index: params.index || `0`,
    size: params.size || `100`,
    swhere: params.swhere || `1=1`
  }
  const messageUrlList = [`/WorkFlow/MyWorkInfos`, `/Message/MyMessageInfos`, `/Message/MyNotifyInfos`]

  return Promise.all(messageUrlList.map(messageUrl => {
    return FormData.post(messageUrl, postParams).then(res => {
      let data = res.data.data
      data.url = messageUrl
      return data
    })
  }))
    .then(res => res)
    .catch(err => {
      throw err
    })
}
