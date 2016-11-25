
<template lang="html">
  <section id="ourstory">
    <div id="ourstory-banner">
    </div>
    <div id="ourstory-text" class="clearfix">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h2>LEWITT goes around the world</h2>
        <p>
          Lewitt microphones started traveling around the world too. For instance with Derrick Wright, who supported Adele on her world tour. They were at BMI for the CMJ Music Marathon in New York and at the Michael Jackson Tribute Concert in Wales. And they were there at countless other concerts, recording sessions and events with many other artists on stage, in the studios and in concert halls.
        </p>
      </div>
      <div class="col-md-2"></div>
    </div>
    <div id="ourstory-we" class="clearfix">
      <eachone v-for="our in ours" :person="our"></eachone>
    </div>
  </section>
</template>

<script>
import {ours} from '../../assets/our.js'
const eachone = {
  template: '<div class="col-md-4 col-sm-12">\
    <img :src="person.imgpath">\
    <div>\
      <h4>{{ person.name }}</h4>\
      <p>{{ person.title }}</p>\
      <p>&nbsp</p>\
      <p>{{ person.info }}</p>\
    </div>\
  </div>',
  props: ['person'],
}

export default {
  data() {
    return {
      ours: ours,
    }
  },
  components: {
    eachone: eachone,
  }
}
</script>

<style lang="less">
@import "../../styles/public.less";
#ourstory {

  &-banner {
    height: 520px;
    background-image: url(../../assets/images/ourstory-banner.png);
    background-size: cover;
  }

  &-text {
    text-align: center;
    margin: 60px 40px;

    h2 {
      line-height: 3em;
      color: @font-green;
    }

    p {
      line-height: 2em;
      color: @font-darkgray;
    }
  }

  &-we {
    margin: 0px 40px;
    & > div {
      background-color: #f7f7f7;
      overflow: hidden;

      img {
        width: 100%;
      }

      & > div {
        margin: 20px 20px;
        h4 {
          color: @font-green;
          line-height: 1.5em;
        }
        p {
          line-height: 1.5em;
          color: @font-darkgray;
        }
      }

    }
  }
}
</style>
