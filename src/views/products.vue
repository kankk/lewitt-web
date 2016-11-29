
<template lang="html">
  <section class="indexpage">
    <div class="indexpage-banner" id="product-indexpage-banner">
      <router-link tag="div" to="/products/lct">
        <h1>LCT Recording</h1>
        <p>
          Emphasize thegenuine in your sound
        </p>
      </router-link>
    </div>
    <div class="indexpage-banner2">
      <router-link class="indexpage-banner2-item product-banner-item1"  tag="div" to="/products/mtp">
        <h3>MTP Live</h3>
      </router-link>
      <router-link class="indexpage-banner2-item product-banner-item2" tag="div" to="/products/dtp">
        <h3>DTP Percussion</h3>
      </router-link>
      <router-link class="indexpage-banner2-item product-banner-item3" tag="div" to="/products/dgt">
        <h3>DGT Digital</h3>
      </router-link>
      <router-link class="indexpage-banner2-item product-banner-item4" tag="div" to="/products/lts">
        <h3>LTS Wireless</h3>
      </router-link>
    </div>
  </section>
</template>

<script>
import footer from '../components/footer.vue'
export default {
  components: {
    lFooter: footer,
  }
}
</script>

<style lang="less">
@import "../styles/public.less";
.indexpage {
  .product-banner-item1 {
    width: 25%;
    background-image: url(../assets/images/product-banner2-img1.png);
    background-size: cover;
  }
  .product-banner-item2 {
    width: 25%;
    background-image: url(../assets/images/product-banner2-img2.png);
    background-size: cover;
  }
  .product-banner-item3 {
    width: 25%;
    background-image: url(../assets/images/product-banner2-img3.png);
    background-size: cover;
  }
  .product-banner-item4 {
    width: 25%;
    background-image: url(../assets/images/product-banner2-img4.png);
    background-size: cover;
  }
}
#product-indexpage-banner {
  background-image: url(../assets/images/product-page-banner.png);
  // background-size: cover;
  background-color: @bg-color-black;
  padding-left: 50%;
  overflow: hidden;

  div:hover {
    cursor: pointer;
    h1,p {
      color: @font-green;
    }
  }

  h1 {
    color: @font-silver;
    line-height: 2em;
    margin-top: 60px;
  }
  p {
    color: @font-gray;
    line-height: 2em;
  }
}
</style>
