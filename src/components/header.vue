<template lang="html">
  <header id="header">
    <router-link to="/" id="header-logo"><img src="../assets/images/logo.png" alt="" /></router-link>
    <ul id="header-nav" class="clearfix">
      <li v-on:mouseover="showProductsNav" v-on:mouseout="hiddenProductNav"><router-link to="/products" v-on:click.native="clickProducts" v-bind:class="{'nav-focus': isProducts}">PRODUCTS</router-link></li>
      <li v-on:mouseover="showSamplesNav" v-on:mouseout="hiddenSamplesNav"><router-link to="/samples" v-on:click.native="clickSamples" v-bind:class="{'nav-focus': isSamples}">SOUND SAMPLES</router-link></li>
      <li><router-link to="/endorsers" v-on:click.native="clickEndorsers" v-bind:class="{'nav-focus': isEndorsers}">ENDORSERS</router-link></li>
      <li><router-link to="/news" v-on:click.native="clickNews" v-bind:class="{'nav-focus': isNews}">NEWS</router-link></li>
      <li><router-link to="/knowledge" v-on:click.native="clickKnowledge" v-bind:class="{'nav-focus': isKnowledge}">KNOWLEDGE</router-link></li>
      <li v-on:mouseover="showAboutNav" v-on:mouseout="hiddenAboutNav"><router-link to="/about" v-on:click.native="clickAbout" v-bind:class="{'nav-focus': isAbout}">LEWITT</router-link></li>
    </ul>

    <products-nav v-show="showProducts" class="header-nav2" v-on:showProductsSubNav="showProductsNav" v-on:hiddenProductSubNav="hiddenProductNav"></products-nav>
    <samples-nav v-show="showSamples" class="header-nav2" v-on:showSamplesSubNav="showSamplesNav" v-on:hiddenSamplesSubNav="hiddenSamplesNav"></samples-nav>
    <about-nav v-show="showAbout" class="header-nav2" v-on:showAboutSubNav="showAboutNav" v-on:hiddenAboutSubNav="hiddenAboutNav"></about-nav>

    <div id="header-support">
      <label for="header-search-input"><img src="../assets/images/header-search.png" alt="" id="header-search-icon" v-on:click="showSearchBox"/></label>
      <span>Reseller</span>
      <router-link to="/support" tag="span">Support</router-link>
      <div id="header-search" v-show="showSearch">
        <input type="text" name="search-audio" placeholder="Search for Lewitt-Audio" id="header-search-input" v-on:blur="hiddenSearchBox">
        <img src="../assets/images/content-search.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script>

// Products的二级导航栏
const productsNav = {
  template: '<nav  v-on:mouseover="showProductsSubNav" v-on:mouseout="hiddenProductSubNav">\
    <ul>\
      <li><router-link to="/products/lct">LCT Recording</router-link></li>\
      <li><router-link to="/products/mtp">MTP Live</router-link></li>\
      <li><router-link to="/products/dtp">DTP Percussion</router-link></li>\
      <li><router-link to="/products/dgt">DGT Digital</router-link></li>\
      <li><router-link to="/products/lts">LTS Wireless</router-link></li>\
    </ul>\
  </nav>',
  methods: {
    showProductsSubNav: function (event) {
      this.$emit('showProductsSubNav')
    },
    hiddenProductSubNav: function (event) {
      this.$emit('hiddenProductSubNav')
    }
  }
}

// Samples的二级导航栏
const samplesNav = {
  template: '<nav v-on:mouseover="showSamplesSubNav" v-on:mouseout="hiddenSamplesSubNav">\
    <ul>\
      <li><router-link to="/samples/applications">Applications</router-link></li>\
      <li><router-link to="/samples/microphones">Microphones</router-link></li>\
      <li><router-link to="/samples/compare">Compare against Competition</router-link></li>\
    </ul>\
  </nav>',
  methods: {
    showSamplesSubNav: function (event) {
      this.$emit('showSamplesSubNav')
    },
    hiddenSamplesSubNav: function (event) {
      this.$emit('hiddenSamplesSubNav')
    },
  }
}

// About的二级导航栏
const aboutNav = {
  template: '<nav v-on:mouseover="showAboutSubNav" v-on:mouseout="hiddenAboutSubNav">\
    <ul>\
      <li><router-link to="/about/ourstory">Our Story</router-link></li>\
      <li><router-link to="/about/contactus">Contact Us</router-link></li>\
      <li><router-link to="/about/wheretobuy">Where to buy</router-link></li>\
    </ul>\
  </nav>',
  methods: {
    showAboutSubNav: function (event) {
      this.$emit('showAboutSubNav')
    },
    hiddenAboutSubNav: function (event) {
      this.$emit('hiddenAboutSubNav')
    }
  }
}

export default {
  components: {
    productsNav: productsNav,
    samplesNav: samplesNav,
    aboutNav: aboutNav
  },
  data() {
    return {
      showProducts: false,
      showSamples: false,
      showAbout: false,
      showSearch: false,

      isProducts: false,
      isSamples: false,
      isEndorsers: false,
      isNews: false,
      isKnowledge: false,
      isAbout: false,
    }
  },
  methods: {
    showProductsNav: function(event) {
      this.showProducts = true
    },
    hiddenProductNav: function(event) {
      this.showProducts = false
    },
    showSamplesNav: function(event) {
      this.showSamples = true
    },
    hiddenSamplesNav: function(event) {
      this.showSamples = false
    },
    showAboutNav: function(event) {
      this.showAbout = true
    },
    hiddenAboutNav: function(event) {
      this.showAbout = false
    },
    showSearchBox: function(event) {
      this.showSearch = true
    },
    hiddenSearchBox: function(event) {
      this.showSearch = false
    },
    // 点击导航栏操作, 要改
    clickProducts: function(event) {
      this.isProducts = true
      this.isSamples = false
      this.isEndorsers = false
      this.isNews = false
      this.isKnowledge = false
      this.isAbout = false
    },
    clickSamples: function(event) {
      this.isProducts = false
      this.isSamples = true
      this.isEndorsers = false
      this.isNews = false
      this.isKnowledge = false
      this.isAbout = false
    },
    clickEndorsers: function(event) {
      this.isProducts = false
      this.isSamples = false
      this.isEndorsers = true
      this.isNews = false
      this.isKnowledge = false
      this.isAbout = false
    },
    clickNews: function(event) {
      this.isProducts = false
      this.isSamples = false
      this.isEndorsers = false
      this.isNews = true
      this.isKnowledge = false
      this.isAbout = false
    },
    clickKnowledge: function(event) {
      this.isProducts = false
      this.isSamples = false
      this.isEndorsers = false
      this.isNews = false
      this.isKnowledge = true
      this.isAbout = false
    },
    clickAbout: function(event) {
      this.isProducts = false
      this.isSamples = false
      this.isEndorsers = false
      this.isNews = false
      this.isKnowledge = false
      this.isAbout = true
    }
  }
}
</script>

<style lang="less">
@import "../styles/public.less";
#header {
  background-color: @common-bgcolor;
  height: @header-h;
  line-height: @header-h;
  text-align: center;
  color: @font-white;

  &-logo {
    float: left;
    margin-left: 40px;
    vertical-align: middle;
    img {
      vertical-align: middle;
    }
  }

  &-nav {
    display: inline-block;
    li {
      float: left;
      padding: 0 15px;
      a {
        &:hover {
          .text-hover(nounderline);
        }
      }
    }
  }

  .header-nav2 {
    height: 45px;
    position: absolute;
    left: 0;
    right: 0;
    top: @header-h;
    background-color: @header-nav2-bgcolor;
    z-index: 1;
    ul {
      display: inline-block;
    }
    li {
      float: left;
      line-height: 45px;
      padding: 0 25px;
      a {
        &:hover {
          .text-hover(nounderline);
        }
      }
    }
  }

  &-support {
    float: right;
    margin-right: 40px;
    span {
      margin-left: 15px;
      &:hover {
        .text-hover(nounderline);
      }
    }

    #header-search-icon {
      cursor: pointer;
    }

    #header-search {
      position: absolute;
      width: 450px;
      height: 32px;
      line-height: 30px;
      border: 1px solid @border-color;
      border-radius: 4px;
      margin-left: -380px;
      margin-top: 30px;
      background-color: @bg-color-white;
      // z-index: 1;
      input {
        height: 30px;
        width: 400px;
        line-height: 30px;
        border: none;
        padding: 0;
        margin-left: 10px;
        vertical-align: middle;
        &:focus {
          outline: none;
        }
      }
      img {
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
