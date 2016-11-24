
<template lang="html">
  <section>
    <div class="list-banner" id="news-banner">
      <h1>
        Unaltered. Authentic. Memorable.
      </h1>
    </div>
    <div class="info-list">
      <info-item v-for="news in newslist" v-bind:info="news"></info-item>
    </div>
  </section>
</template>

<script>
import infoitem from '../components/infoitem.vue'
import {newslist} from '../assets/data.js'
export default {
  components: {
    infoItem: infoitem,
  },
  data() {
    return {
      newslist: newslist
    }
  }
}
</script>

<style lang="less">
@import "../styles/public.less";

#news-banner {
  background-image: url(../assets/images/news-banner.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: @font-silver;
    text-align: center;
  }
}

.info-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;;;
  margin: 40px 40px 0;
  padding-bottom: 40px;
}

</style>
