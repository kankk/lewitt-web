
<template lang="html">
  <section id="wheretobuy" class="clearfix">
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
          <li v-on:click="clickDistribution" :class="{'leftnav-focus': isDistribution}">Distribution</li>
          <li v-on:click="clickRetailers" :class="{'leftnav-focus': isRetailers}">Retailers</li>
          <li v-on:click="clickOnlineshpos" :class="{'leftnav-focus': isOnlineshops}">Online Shops</li>
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
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDistribution: true,
      isRetailers: false,
      isOnlineshops: false,
    }
  },
  methods: {
    clickDistribution: function(event) {
      this.$router.push('/about/wheretobuy/distribution');
      this.isDistribution = true;
      this.isRetailers = false;
      this.isOnlineshops = false;
    },
    clickRetailers: function(event) {
      this.$router.push('/about/wheretobuy/retailers');
      this.isDistribution = false;
      this.isRetailers = true;
      this.isOnlineshops = false;
    },
    clickOnlineshpos: function(event) {
      this.$router.push('/about/wheretobuy/onlineshops');
      this.isDistribution = false;
      this.isRetailers = false;
      this.isOnlineshops = true;
    },
  },
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
