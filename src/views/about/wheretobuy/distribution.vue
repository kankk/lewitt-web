<template lang="html">
  <div class="col-md-8 col-sm-12 clearfix">
    <div id="wheretobuy-distribution-title" class="clearfix">
      <div class="col-md-3 col-sm-3">
        Country
      </div>
      <div class="col-md-5 col-sm-5">
        Company
      </div>
      <div class="col-md-4 col-sm-4">
        Email
      </div>
    </div>
    <div v-for="distribution in distributions" class="clearfix wheretobuy-distribution-detail">
      <div class="col-md-3 col-sm-3">
        {{ distribution.country }}
      </div>
      <div class="col-md-5 col-sm-5">
        <a>{{ distribution.company }}</a>
      </div>
      <div class="col-md-4 col-sm-4">
        <a>{{ distribution.email}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {distribution} from '../../../assets/distribution.js'
export default {
  data() {
    return {
      distributions: distribution,
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/public.less";
#wheretobuy-distribution-title {
  margin-top: 10px;
  font-weight: bolder;
}
.wheretobuy-distribution-detail {
  line-height: 2em;
  color: @font-black;
  div {
    margin-bottom: 10px;
    a {
      color: @font-green;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
