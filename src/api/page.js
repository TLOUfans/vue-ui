import {FormData, EvalScript} from './utils'
import {Base64} from '../utils'

const GetFormConfig = (formId, type, keyValue) => {
  return FormData.get(`/Form/Init/${formId}/${type || 'view'}/${keyValue || ''}`)
    .then(res => {
      EvalScript(res.data)
      return window.formconfig
    })
    .catch(err => {
      return {
        success: false,
        err: err
      }
    })
}

const PageLoad = (params) => {
  const postParams = {
    KeyWord: params.KeyWord,
    KeyWordType: params.KeyWordType || 'BO',
    sort: params.sort || '',
    select: '',
    index: params.index || '0',
    size: params.size || '0',
    swhere: Base64.encode(params.swhere || ' 1=1 '),
    extparams: `eyJlbmNvZGVzd2hlcmUiOiJ0cnVlIn0=`
  }
  return FormData.post(`/Form/GridPageLoad`, postParams)
    .then(res => {
      return JSON.parse(res.data.data.value || null)
    })
    .catch(err => {
      return {
        success: false,
        err: err
      }
    })
}

const FormLoad = (params) => {
  const postParams = {
    KeyWord: params.KeyWord,
    KeyWordType: params.KeyWordType || '',
    keyvalue: params.KeyValue,
    select: params.select || '',
    formstate: params.FormState || 'view',
    _: Math.random(123).toString(8).split('.')[1]
  }
  return FormData.post(`/Form/FormLoad`, postParams)
    .then(res => JSON.parse(res.data.data.value))
}

export {
  GetFormConfig,
  PageLoad,
  FormLoad
}
