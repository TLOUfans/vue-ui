<template>
  <div>
    <x-header>业务中心</x-header>
    <x-button link="/form">新增表单</x-button>
    <cell 
      v-for="(ls, index) in list"
      :title="ls.title"
      :key="index">
      <div slot="inline-desc">
        <span v-text="'录入时间：' + ls.regDate"></span>
      </div>
      <x-button type="primary" link="/form" :mini="true">查看</x-button>
      <x-button type="warn" :mini="true" @click.native="handleClick(index)">删除</x-button>
    </cell>
    <div v-transfer-dom>
      <confirm v-model="showConfirm"
      ref="confirm"
      title="确定删除吗？此操作不可撤销"
      @on-cancel="handleCancel"
      @on-confirm="handleConfirm">
      </confirm>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, CellBox, XButton, Confirm, TransferDomDirective as TransferDom } from 'vux';
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Group,
      Cell,
      CellBox,
      XButton,
      Confirm
    },
    data() {
      return {
        showConfirm: false,
        selectIndex: null,
        list: [{
          title: '表单编号1',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号2',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号3',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号4',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号5',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号6',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号7',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号8',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号9',
          regDate: '2018-1-3 11:11:11'
        },{
          title: '表单编号10',
          regDate: '2018-1-3 11:11:11'
        }]
      }
    },
    methods: {
      handleClick(index) {
        this.selectIndex = index;
        this.showConfirm = true;
      },
      handleCancel() {

      },
      handleConfirm() {
        this.list.splice(this.selectIndex, 1);
      }
    }
  }
</script>