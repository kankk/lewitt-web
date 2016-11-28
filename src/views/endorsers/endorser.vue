<template lang="html">
  <section class="endorser">
    <div class="endorser-banner">
    </div>
    <div class="endorser-info">
      <div class="endorser-info-img">
        <img src="../../assets/images/endorser-img.png" alt="" />
      </div>
      <div class="endorser-info-text">
        <h4>Time Fagan</h4>
        <p>
          Recording Artist / Composer
        </p>
      </div>
      <div class="endorser-content clearfix">
        <div class="endorser-content-left col-md-4 col-sm-12">
          <div class="endorser-content-left-about">
            <h4>About</h4>
            <hr>
            <p>
              Grammy Award winning songwriter // two years touring the world as music director and lead guitarist for Colbie Caillat // teaches at LA based songwriting school
            </p>
            <div class="endorser-content-left-about-sms">
              <img src="../../assets/images/f.jpg" alt="" />
              <img src="../../assets/images/t.jpg" alt="" />
              <img src="../../assets/images/y.jpg" alt="" />
              <img src="../../assets/images/i.jpg" alt="" />
            </div>
          </div>
          <hr class="leftnav-hr">
          <div class="endorser-content-left-chose">
            <h4>What he/she chose</h4>
            <chose-item v-for="n in 4"></chose-item>
          </div>
        </div>
        <div class="endorser-content-right col-md-8 col-sm-12">
          <endorser-news v-for="n in 3"></endorser-news>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const choseItem = {
  template: '<div class="product-list-item">\
    <img src="/static/images/product.png"/>\
    <div class="product-list-item-text">\
      <h4>LCT 140</h4>\
      <hr>\
      <p>The gateway to the world of LEWITT large-diaphragm condenser microphones</p>\
    </div>\
  </div>',
}

const endorserNews = {
  template: '<div class="endorser-news">\
    <h4 class="endorser-news-title">Interview with Tim Fagan</h4>\
    <time>June,24,2014</time>\
    <div class="endorser-news-video"><div class="endorser-news-video-start" v-bind:style="{display:activeStart}" v-on:click="clickToStart"><img src="/static/images/start-white.png"></div></div>\
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\
    <div class="endorser-news-viewall"><p>View All</p></div>\
    <div class="endorser-news-like">\
      <img src="/static/images/eye-grey.png"><span class="endorser-news-like-see">7862</span>\
      <img src="/static/images/heart-green.png"><span class="endorser-news-like-heart">344</span>\
    </div>\
    <hr>\
  </div>',
  data() {
    return {
      activeStart: 'flex',
    }
  },
  methods: {
    clickToStart: function() {
      this.activeStart = 'none';
    }
  }
}

export default {
  data() {
    return {

    }
  },
  components: {
    choseItem: choseItem,
    endorserNews: endorserNews,
  }
}
</script>

<style lang="less">
@import "../../styles/public.less";
.endorser {
  &-banner {
    height: 260px;
    background-image: url(../../assets/images/endorser-banner.png);
  }
  &-info {
    margin: -150px 40px 0px;
    &-img {
      display: inline-block;
      width: 206px;
      height: 206px;
    }
    &-text {
      display: inline-block;
      line-height: 2em;
      margin-left: 20px;
      h4 {
        color: @font-black;
      }
      p {
        color: @font-darkgray;
      }
    }
  }

  &-content {
    &-left {
      margin-top: 45px;
      margin-left: 0px;

      &-about {
        background: @leftnav-bg-light;
        padding: 20px;
        h4 {
          color: @font-green;
          line-height: 1.5em;
        }
        p {
          color: @font-black;
          line-height: 1.5em;
        }
        hr {
          height: 1px;
          border: none;
          background-color: @hr-color-light;
          padding: 0;
        }

        &-sms {
          margin: 30px 0px 0px;
          img {
            width: 38px;
            height: 38px;
            margin-right: 20px;
          }
        }
      }

      &-chose {
        & > h4 {
          line-height: 3em;
        }

        .product-list-item {
          margin-bottom: 15px;
        }
      }
    }

    &-right {
      margin-top: 45px;
      margin-right: 0px;
    }
  }
}

.endorser-news {
  &-title {
    line-height: 1.5em;
    color: @font-black;
  }
  time {
    display: block;
    line-height: 1.5em;
    color: @font-gray2;
    margin-bottom: 20px;
  }

  &-video {
    background-color: @footer-index-bgcolor;
    height: 0;
    padding-top: 30%;
    padding-bottom: 30%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-start {
      width: 105px;
      height: 60px;
      background-color: @color-normal;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-left: 10px;
      }

      &:hover {
        background-color: @color-hover;
        cursor: pointer;
      }
    }
  }

  & > p {
    color: @font-black;
    line-height: 1.5em;
    margin-bottom: 20px;
  }

  &-viewall {
    p {
      line-height: 2em;
      color: @font-green;
    }
  }

  &-like {
    margin: 15px 0px;
    img {
      margin-right: 5px;
    }
    span {
      margin-right: 20px;
    }

    &-see {
      color: @font-darkgray;
    }
    &-heart {
      color: @font-green;
    }
  }

  hr {
    height: 1px;
    border: none;
    background-color: @hr-color-light;
    padding: 0;
    margin-bottom: 25px;
  }
}
</style>
