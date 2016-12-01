<template lang="html">
  <footer id="detailfooter">
      <section id="detailfooter-nav" class="clearfix">
        <div class="detailfooter-nav-column col-md-2 col-sm-12">
          <h4 v-on:click="toggleProducts" class="sm-hover">Products</h4>
          <ul :class="{ 'sm-hidden': hiddenProducts }">
            <li><router-link to="/products/lct" v-on:click.native="changeTo('products')">LCT Recording Series</router-link></li>
            <li><router-link to="/products/mtp" v-on:click.native="changeTo('products')">MTP Live Series</router-link></li>
            <li><router-link to="/products/dtp" v-on:click.native="changeTo('products')">DTP Percussion Series</router-link></li>
            <li><router-link to="/products/dgt" v-on:click.native="changeTo('products')">DGT Digital Series</router-link></li>
            <li><router-link to="/products/lts" v-on:click.native="changeTo('products')">LTS Wireless Series</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2 col-sm-12">
          <h4 v-on:click="toggleSamples" class="sm-hover">Sound Samples</h4>
          <ul  :class="{ 'sm-hidden': hiddenSamples }">
            <li><router-link to="/samples/"  v-on:click.native="changeTo('samples')">Applications</router-link></li>
            <li><router-link to="/samples/"  v-on:click.native="changeTo('samples')">Microphones</router-link></li>
            <li><router-link to="/samples/"  v-on:click.native="changeTo('samples')">Competition</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2 col-sm-12">
          <h4 v-on:click="toggleSupport" class="sm-hover">support</h4>
          <ul  :class="{ 'sm-hidden': hiddenSupport }">
            <li><router-link to="/support/warranty"  v-on:click.native="changeTo('')">Warranty</router-link></li>
            <li><router-link to="/support/download"  v-on:click.native="changeTo('')">Download</router-link></li>
            <li><router-link to="/knowledge"  v-on:click.native="changeTo('knowledge')">Knowledge</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2 col-sm-12">
          <h4 v-on:click="toggleAbout" class="sm-hover">About Lewitt</h4>
          <ul  :class="{ 'sm-hidden': hiddenAbout }">
            <li><router-link to="/about/ourstory" v-on:click.native="changeTo('about')">Our Story</router-link></li>
            <li><router-link to="/about/contactus" v-on:click.native="changeTo('about')">Contact Us</router-link></li>
            <li><router-link to="/about/wheretobuy" v-on:click.native="changeTo('about')">Where to Buy</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-sms col-md-4 col-sm-12 sm-hidden">
          <ul class="clearfix sm-hidden">
            <li><a href="#"><img src="../assets/images/sms-facebook.png" alt="facebook"></a></li>
            <li><a href="#"><img src="../assets/images/sms-twitter.png" alt="twitter"></a></li>
            <li><a href="#"><img src="../assets/images/sms-youtube.png" alt="youtube"></a></li>
            <li><a href="#"><img src="../assets/images/sms-instergram.png" alt="instergram"></a></li>
          </ul>
        </div>
      </section>

      <section id="detailfooter-info" class="sm-hidden">
        <div id="detailfooter-info-copyright">
          &copy;2015 <span>LEWITT GmbH</span> all rights reserved
        </div>
        <div id="detailfooter-info-country">
          <img src="../assets/images/country-american.png" id="country-icon">
          <span>USA</span>
          <img src="../assets/images/arrow.png" id="country-arrow">
        </div>
        <div id="detailfooter-info-about">
          <span><router-link to="/sitemap">Site Map</router-link></span>
          <span><router-link to="/">Jobs</router-link></span>
          <span><router-link to="/about/contactus"  v-on:click.native="changeTo('about')">Contact Us</router-link></span>
        </div>
      </section>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      hiddenProducts: true,
      hiddenSamples: true,
      hiddenSupport: true,
      hiddenAbout: true,
    }
  },
  methods: {
    toggleProducts: function() {
      this.hiddenProducts = !(this.hiddenProducts);
    },
    toggleSamples: function() {
      this.hiddenSamples = !(this.hiddenSamples);
    },
    toggleSupport: function() {
      this.hiddenSupport = !(this.hiddenSupport);
    },
    toggleAbout: function() {
      this.hiddenAbout = !(this.hiddenAbout);
    },
    changeTo: function(tag) {
      this.$store.commit('changeCurrent', tag)
    }
  }
}
</script>

<style lang="less">
@import "../styles/public.less";
#detailfooter {
  width: 100%;
  background-color: @common-bgcolor;
  box-sizing: border-box;
  border-bottom: 2px solid @theme-color;
  color: @font-white;
  // 抵消inline-block与父级顶部margin重叠
  overflow: hidden;

  &-nav {
    margin: 95px ( 40px - @col-margin / 2) 0px;
  }


  .detailfooter-nav-column {
    // vertical-align: top;
    h4 {
      line-height: 2em;
    }
    li {
      line-height: 2em;
      color: @font-silver;
    }
    a {
      &:hover {
        .text-hover(underline);
      }
    }

  }

  .detailfooter-nav-sms {
    ul {
      margin-right: -20px;
      float: right;
    }
    li {
      width: 40px;
      height: 40px;
      float: left;
      line-height: 40px;
      text-align: center;
      background-color: @common-bgcolor-white;
      margin-right: 20px;
      img {
        vertical-align: middle;
        font-size: 0;
      }
      &:hover {
        cursor: pointer;
        background-color: @color-hover;
      }
    }
  }

  &-info {
    margin: 20px 40px 20px;
    color: @font-darkgray;
    font-size: @font-size-normal - 2px;
    line-height: 1.5em;

    &-copyright {
      display: inline-block;
      padding-right: 15px;
      border-right: 1px solid @font-darkgray;
      span {
        color: @font-green;
      }
    }

    &-country {
      display: inline-block;
      padding-left: 15px;
      #country-icon {
        vertical-align: -5px;
      }
      #country-arrow {
        vertical-align: -2px;
      }
      span {
        padding: 0 7px;
        vertical-align: -1px
      }
    }

    &-about {
      display: inline-block;
      float: right;
      span {
        padding: 0 10px;
        &:nth-child(2) {
          border-left: 1px solid @font-darkgray;
          border-right: 1px solid @font-darkgray;
        }
        &:nth-child(3) {
          margin-right: -10px;
        }
        a {
          color: @font-darkgray;
          &:hover {
            .text-hover(underline);
          }
        }
      }
    }
  }

}

@media (max-width: 1080px) {
  #detailfooter {
    &-nav {
      margin: 20px ( 40px - @col-margin / 2) 0px;

      li:hover{
        background-color: rgba(255, 255, 255, 0.2);
      }

      li {
        border-top: 1px solid white;
        a {
          line-height: 3em;
        }
      }
      li:last-child {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
