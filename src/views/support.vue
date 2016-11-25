<template lang="html">
<section id="support" class="clearfix">
  <div class="col-md-4 col-sm-12 leftnav">
    <h2>Support</h2>
    <h4>&nbsp</h4>
    <h4>Headquarters:</h4>
    <h4>Burggasse 79，1070 Vienna，AUSTRIA</h4>
    <h4>&nbsp</h4>
    <h4>Telephone international:<br>
      office hours 7am – 15pm CET<br>
      Phone +43 (1) 74040 8047<br>
      Fax +43 (1) 74040 8048<br>
      &nbsp<br>
      General inquiries:<br>
      info@lewitt-audio.com<br>
      &nbsp</h4>
      <div class="leftnav-meun">
        <h4>Menu</h4>
        <hr>
        <ul>
          <li v-on:click="clickWarranty" :class="{'leftnav-focus': isWarranty}">Warranty</li>
          <li v-on:click="clickDownload" :class="{'leftnav-focus': isDownload}">Download</li>
        </ul>
      </div>
  </div>
  <router-view></router-view>
</section>
</template>

<script>
export default {
  data() {
    return {
      isWarranty: true,
      isDownload: false,
    }
  },
  methods: {
    clickWarranty: function(event) {
      this.$router.push('/support/warranty');
      this.isWarranty = true;
      this.isDownload = false;
    },
    clickDownload: function(event) {
      this.$router.push('/support/download');
      this.isDownload = true;
      this.isWarranty = false;
    }
  },
}
</script>

<style lang="less">
@import "../styles/public.less";
#support {
  margin: 45px 40px 0px;
  color: @font-black;

  a {
    color: @font-black;
  }
}

</style>
