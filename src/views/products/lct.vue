
<template lang="html">
  <section>
    <div class="list-banner product-banner">
      <div>
        <h2>EMPHASIZE THE <b>GENUINE</b></h2>
        <h2>IN YOUR <b>SOUND</b></h2>
        <h3><b>//</b> LCT <b>Recording Series</b></h3>
      </div>
    </div>
    <div class="product-list clearfix">
      <product-item v-for="n in 30" v-bind:product="product"></product-item>
    </div>
    <div class="product-accessory clearfix">
      <h4>Accessories</h4>
      <product-item v-for="accessory in accessories" v-bind:product="accessory"></product-item>
    </div>
  </section>
</template>

<script>
import productitem from '../../components/productitem.vue'
export default {
  components: {
    productItem: productitem,
  },
  data() {
    return {
      product: {
        name: 'LCT 140',
        imgpath: '/static/images/product.png',
        outline: 'The gateway to the world of LEWITT large-diaphragm condenser microphones'
      },
      accessories: [
        {
          name: 'LCT 40 Shxx',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        },
        {
          name: 'LCT 40 Shs',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        },
        {
          name: 'LCT 40 M2',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import "../../styles/public.less";

.product-banner {
  background-image: url(../../assets/images/product-banner.png);
  background-size: cover;
  overflow: hidden;

  & > div {
    margin-top: 90px;
    margin-right: 40px;
    color: @font-white;
    text-align: right;

    h2 {
      line-height: 1.2em;
    }

    h3 {
      line-height: 3.5em;
    }

    b {
      color: @font-green;
    }
  }
}

.product-list {
  box-sizing: border-box;
  margin: 25px ( 40px - @col-margin / 2 ) 0px;
}

.product-accessory {
  box-sizing: border-box;
  margin: 15px ( 40px - @col-margin / 2 ) 0px;
  padding-bottom: 90px;
  & > h4 {
    margin-left: @col-margin / 2;
    line-height: 4em;
  }
}
</style>
