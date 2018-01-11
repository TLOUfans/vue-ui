<template>
  <div>
    <grid>
      <grid-item 
        link="/formList" 
        label="周质量检查">
      </grid-item>
      <grid-item 
        :link="{ path: '/formList'}" 
        label="周HSE检查">
      </grid-item>
      <grid-item 
        link="/formList" 
        label="XX检查">
      </grid-item>
    </grid>
    <grid>
      <grid-item 
        link="/formList" 
        label="周质量检查">
      </grid-item>
      <grid-item 
        :link="{ path: '/formList'}" 
        label="周HSE检查">
      </grid-item>
      <grid-item 
        link="/formList" 
        label="XX检查">
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Grid, GridItem, XHeader } from 'vux';
  export default {
    components: {
      Grid,
      GridItem,
      XHeader
    },
    data() {
      return {
        
      }
    }
  }
</script>