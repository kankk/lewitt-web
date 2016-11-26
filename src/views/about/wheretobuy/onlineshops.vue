
<template lang="html">
  <div class="col-md-8 col-sm-12 clearfix">
    <div class="col-md-4 col-sm-12 onlineshops-logo" v-for="n in 7">
      <!-- <img src="../../../assets/images/onlineshops-logo.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../../../styles/public.less";
.onlineshops-logo {
  overflow: hidden;
  height: 0px;
  padding-bottom: 20%;
  border: 1px solid @border-color-light;
  box-sizing: border-box;
  border-radius: @border-radius;
}
</style>
