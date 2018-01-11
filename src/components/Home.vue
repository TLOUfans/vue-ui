<template>
  <div style="padding:1rem 0.5rem 0rem 0.5rem">
    <flexbox v-for="(row, index) in rowList" :key="index">
      <flexbox-item v-for="(r, i) in row" :key="i">
        <div class="np-box">
          <span v-text="r.msgNumber"></span>
          <badge :text="r.msgNumber"></badge>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Badge, Flexbox, FlexboxItem } from "vux";
import { Login } from "@/api/home";
export default {
  components: {
    Badge,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      list: [
        { label: "进度检查", msgNumber: 11 },
        { label: "质量检查", msgNumber: 222 },
        { label: "特殊过程检查", msgNumber: 333 },
        { label: "HSE检查", msgNumber: 444 },
        { label: "安全专项检查", msgNumber: 55 },
        { label: "施工其他检查", msgNumber: 66 },
        { label: "整改通知单", msgNumber: 77 },
        { label: "HSE图文库", msgNumber: 88 }
      ],
      rowNumber: 3
    };
  },
  computed: {
    rowList() {
      let colArr = [];
      for (let i = 0; i <= this.list.length; i += this.rowNumber) {
        colArr.push(this.list.slice(i, i + this.rowNumber));
      }
      return colArr;
    }
  },
  created() {
    Login("admin", "power@123").then(res => {
      console.log("登陆成功！");
    });
  }
};
</script>

<style scoped>
.np-box {
  text-align: center;
  position: relative;
  border: 1px solid #cccccc;
  font-size: 0.8rem;
  padding: 1rem;
  margin-bottom: 0.7rem;
}
.vux-badge {
  position: absolute;
  left: 90%;
  top: 0%;
  z-index: 10;
  transform: translate(-50%, -50%);
}
</style>
