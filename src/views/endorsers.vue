
<template lang="html">
  <section>
    <div class="list-banner" id="endorsers-banner">
      <div>
        <h1>"A welcomed addition</h1>
        <h1>to my microphone</h1>
        <h1>collection"</h1>
        <span>----Brian Vibberts</span>
      </div>
    </div>
    <div class="info-list">
      <info-item v-for="endorser in endorsers" v-bind:info="endorser" v-bind:detailPath="getDetailPath(endorser)"></info-item>
    </div>
  </section>
</template>

<script>
import infoitem from '../components/infoitem.vue'
import {endorsers} from '../assets/data.js'

export default {
  components: {
    infoItem: infoitem,
  },
  data() {
    return {
      endorsers: endorsers,
    }
  },
  methods: {
    getDetailPath: function(endorser) {
      return '/endorsers/' + endorser.name;
    }
  }
}
</script>

<style lang="less">
@import "../styles/public.less";
#endorsers-banner {
  background-image: url(../assets/images/endorsers-banner.png);
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  & > div {
    margin-right: 40px;

    h1 {
      color: @font-green;
      text-align: right;;
    }
    span {
      color: @font-white;
      display: block;
      text-align: right;
      margin-top: 20px;
    }
  }
}
</style>
