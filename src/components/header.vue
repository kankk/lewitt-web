<template lang="html">
  <header>
    <ul>
      <li><router-link to="/products" v-on:mouseover.native="showProductsNav" v-on:mouseout.native="hiddenProductNav">PRODUCTS</router-link></li>
      <li><router-link to="/samples" v-on:mouseover.native="showSamplesNav" v-on:mouseout.native="hiddenSamplesNav">SOUND SAMPLES</router-link></li>
      <li><router-link to="/endorsers">ENDORSERS</router-link></li>
      <li><router-link to="/news">NEWS</router-link></li>
      <li><router-link to="/knowledge">KNOWLEDGE</router-link></li>
      <li><router-link to="/about" v-on:mouseover.native="showAboutNav" v-on:mouseout.native="hiddenAboutNav">LEWITT</router-link></li>
    </ul>

    <products-nav v-show="showProducts"></products-nav>
    <samples-nav v-show="showSamples"></samples-nav>
    <about-nav v-show="showAbout"></about-nav>
  </header>
</template>

<script>

const productsNav = {
  template: '<div>products nav</div>',
}

const samplesNav = {
  template: '<div>samples nav</div>',
}

const aboutNav = {
  template: '<div>about nav</div>',
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
      showAbout: false
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
    }
  }
}
</script>

<style lang="less">

</style>
