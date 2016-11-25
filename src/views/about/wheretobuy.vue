
<template lang="html">
  <section id="wheretobuy">
    <div class="col-md-4 col-sm-12 leftnav">
      <h2>Where to Buy</h2>
      <h4>&nbsp</h4>
      <h4>
        Find international distributors or stroes selling Lewitt products
      </h4>
      <h4>&nbsp</h4>
      <div class="leftnav-meun">
        <h4>Menu</h4>
        <hr>
        <ul>
          <li :class="{'leftnav-focus': isWarranty}">Distribution</li>
          <li :class="{'leftnav-focus': isWarranty}">Retailers</li>
          <li :class="{'leftnav-focus': isWarranty}">Online Shops</li>
        </ul>
      </div>
      <div class="leftnav-img" v-for="n in 3">
        <div class="leftnav-img-text">
          <h2>LCT 550</h2>
          <h4>Emphasize the<br>
genuine in your sound.</h4>
        </div>
        <img src="../../assets/images/wheretobuy-leftnav-img.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../../styles/public.less";
#wheretobuy {
  margin: 45px 40px 0px;
}

.leftnav-img {
  margin: 25px 0px;
  position: relative;
  background-color: #e6e6e6;
  &-text {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    margin-left: 30px;
    h2 {
      color: @font-green;
    }
    h4 {
      color: @font-darkgray;
    }
  }
  img {
    width: 100%;
  }
}
</style>
