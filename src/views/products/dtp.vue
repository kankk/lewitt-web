
<template lang="html">
  <section>
    <div class="list-banner product-banner">
      <div>
        <h2>EMPHASIZE THE <b>GENUINE</b></h2>
        <h2>IN YOUR <b>SOUND</b></h2>
        <h3><b>//</b> DTP <b>Percussion Series</b></h3>
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
        name: 'DTP 350',
        imgpath: '/static/images/product.png',
        outline: 'The gateway to the world of LEWITT large-diaphragm condenser microphones'
      },
      accessories: [
        {
          name: 'DTP 40 Shxx',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        },
        {
          name: 'DTP 40 Shs',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        },
        {
          name: 'DTP 40 M2',
          imgpath: '/static/images/product.png',
          outline: 'Small cylindrical foam windscreen'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
