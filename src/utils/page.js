import {GetFormConfig, PageLoad, FormLoad} from '../api/page'
import Base64 from './Base64'
import {FormData} from '../api/utils'

const GetPageData = async (formId, openType) => {
  const formconfig = await GetFormConfig(formId, openType || 'view')
  const joindata = formconfig.config.joindata
  const params = {
    KeyWord: joindata.KeyWord,
    KeyWordType: joindata.KeyWordType,
    swhere: joindata.swhere
  }
  const data = await PageLoad(params)
  return {
    data,
    formconfig
  }
}

const GetFormData = async (formId, openType, keyValue) => {
  const formconfig = await GetFormConfig(formId, openType, keyValue)
  const joindata = formconfig.config.joindata
  const params = {
    KeyWord: joindata.KeyWord,
    KeyWordType: joindata.KeyWordType,
    swhere: joindata.swhere,
    KeyValue: keyValue
  }
  const data = await FormLoad(params)
  return {
    data,
    formconfig
  }
}

const SaveForm = async(formId, postFormData) => {
  debugger
  let jdata = {
    formId: formId,
    encode: 'r4',
    Params: Base64.encode(
      JSON.stringify({
        IsRegHuman: '1',
        IsWorkFlowHuman: '1'
      })
    ),
    jsonData: encodeURIComponent(
      Base64.rc4(
        JSON.stringify(postFormData)
      )
    )
  }
  return FormData.post(`/Form/SaveWebForm`, jdata)
    .then(res => res.data)
}

export {
  GetPageData,
  GetFormData,
  SaveForm
}
