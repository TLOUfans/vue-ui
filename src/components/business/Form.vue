<template>
  <div>
    <x-header>业务中心</x-header>
    <group title="必填">
      <x-input 
        title="表单编号" 
        placeholder="请输入表单编号" 
        :show-clear="false" 
        :required="true"
        placeholder-align="right">
      </x-input>
    </group>
    <group title="只读">
      <x-input 
        title="录入日期" 
        placeholder="请输入表单编号" 
        :show-clear="false" 
        :readonly="true"
        placeholder-align="right">
      </x-input>
    </group>
    <group title="切换">
      <x-switch title="是否合格" :value-map="['0', '1']" v-model="isQua"></x-switch>
    </group>
    <group title="下拉框1">
      <popup-radio title="是否合格" :options="['是', '否']" v-model="isQua2"></popup-radio>
    </group>
    <group title="下拉框2">
      <popup-picker title="城市" :data="list" v-model="city"></popup-picker>
    </group>
    <group title="日期">
      <Datetime title="录入日期" :data="list" v-model="datetime"></Datetime>
    </group>
    <group title="文本域">
      <x-textarea title="备注" v-model="text"></x-textarea>
    </group>
    <group title="按钮">
      <x-button type="primary">保存</x-button>
    </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, XSwitch, PopupRadio, PopupPicker, Datetime, XTextarea, XHeader } from 'vux';
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    XSwitch,
    PopupRadio,
    PopupPicker,
    Datetime,
    XTextarea,
    XHeader
  },
  name: 'Form',
  data () {
    return {
      list: [['北京', '上海', '南京', '天津']],
      isQua: '0',
      isQua2: '是',
      city: ['南京'],
      datetime: '',
      text: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
