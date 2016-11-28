<template lang="html">
<section class="newsdetail">
  <div class="list-banner news-banner">
    <h1>
      Unaltered. Authentic. Memorable.
    </h1>
  </div>
  <div class="newsdetail-content clearfix">
    <div class="newsdetail-content-left col-md-4 col-sm-12">
      <h2>Lewitt News</h2>
      <h4>Popular Products</h4>
      <product-item v-for="n in 2"></product-item>
      <hr class="leftnav-hr">
      <h4>Our Endorsers</h4>
      <endorser-item v-for="n in 3"></endorser-item>
    </div>
    <div class="newsdetail-content-right col-md-8 col-sm-12">
      <h2>Simon J.P. Thomas Joins LEWITT</h2>
      <h4>FOH Engineer</h4>
      <p>&nbsp</p>
      <p>
        Uses the LCT 340/LCT 640/DTP 340/MTP 440 DM.
      </p>
      <p>&nbsp</p>
      <p>
        Simon can look back on 20 years of experience in the music industry and extensive domestic and international touring experience. He started his career as a sound engineer, and more recently added tour and production management. Simon has been running his own production company for over 6 years, and has for a long time been constantly involved with a number of huge clients.
      </p>
      <p>&nbsp</p>
      <p>
        As an FOH engineer, he’s worked for Travis, Tracy Chapman, BB King, Kylie Minogue, Moby, Kosheen, Portishead, Machine Head, Placebo, and many others.
      </p>
      <img src="../../assets/images/news-img.png" alt="" />
      <p>
        Simon about his mics:
      </p>
      <p>
        MTP 340 CM
      </p>
      <p>
        The solid, well designed construction makes a great first impression. And I was pleasantly surprised when I first voiced the mic on my own in the PA. But the true test came when I used it on three backup singers who were all very experienced. What impressed me most was the amount of gain and fade I could achieve before feedback. They’re the kind of mic that allows you to EQ tone for the vocals rather than to control the feedback. The punch was great and they cut throughout the mix; they worked really well when you were right on them, without the popping you often get with some other mics. I will definitely be sticking with the MTP 340 CM.
      </p>
      <p>&nbsp</p>
      <div class="newsdetail-content-right-song" v-for="n in 2">
        <div class="newsdetail-content-right-song-img">
          <img src="../../assets/images/song-img.png"/>
        </div>
        <div class="newsdetail-content-right-song-sound">
          <div class="newsdetail-content-right-song-sound-start">
            <img src="../../assets/images/song-start.png" alt="" />
          </div>
          <img class="wave" src="../../assets/images/song-wave.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
const productItem = {
  template: '<div class="product-list-item">\
    <img src="/static/images/product.png"/>\
    <div class="product-list-item-text">\
      <h4>LCT 140</h4>\
      <hr>\
      <p>The gateway to the world of LEWITT large-diaphragm condenser microphones</p>\
    </div>\
  </div>',
}

const endorserItem = {
  template: '<router-link class="product-list-item" tag="div" :to="getDetailPath(\'Steve Aoki\')">\
    <img src="/static/images/endorser.png"/>\
    <div class="product-list-item-text">\
      <h4>Steve Aoki</h4>\
      <hr>\
      <p>Founder of DIM MAK Records (MSTRKRAFT, The Bloody Retroots, ...) / Released two albums </p>\
    </div>\
  </router-link>',
  methods: {
    getDetailPath: function(name) {
      return '/endorsers/' + name;
    }
  }
}

export default {
  data() {
    return {

    }
  },
  components: {
    productItem: productItem,
    endorserItem: endorserItem
  }
}
</script>

<style lang="less">
@import "../../styles/public.less";
.newsdetail-content {
  margin: 40px 40px 0px;
  &-left {
    margin-left: 0px;
    h2 {
      line-height: 2em;
      margin-bottom: 20px;
    }
    & > h4 {
      line-height: 2em;
    }

    .product-list-item {
      margin-bottom: 15px;
    }
  }
  &-right {
    margin-right: 0px;
    & > img {
      width: 100%;
    }

    h2 {
      line-height: 2em;
      color: @font-green;
    }


    h4 {
      color: @font-darkgray;
    }

    p {
      line-height: 2em;
    }

    &-song {

      margin-bottom: 15px;
      &-img {
        float: left;
        width: 77px;
        height: 77px;
      }
      &-sound {
        display: inline-block;
        height: 77px;
        width: calc( ~'100%' - 95px);
        background-color: #333333;
        margin-left: 10px;

        &-start {
          width: 77px;
          height: 77px;
          display: flex;
          justify-content: center;
          align-items: center;
          float: left;
          & > img:nth-child(1) {
            width: 32px;
            height: 32px;
          }
        }

        & > img {
          display: inline-block;
          height: 77px;
          width: calc( ~'100%' - 80px);
        }
      }
    }
  }
}
</style>
