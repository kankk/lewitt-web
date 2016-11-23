<template>
  <div id="app">
    <lewitter-header></lewitter-header>
    <router-view name="maincontent"></router-view>
    <router-view name="brieffooter"></router-view>
    <router-view name="detailfooter"></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  name: 'app',
  components: {
    lewitterHeader: header,
  },
}
</script>

<style lang="less">
@import './styles/common.less';
</style>
