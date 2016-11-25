<template lang="html">
<section id="support" class="clearfix">
  <div id="support-nav" class="col-md-4 col-sm-12">
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
      info@lewitt-audio.com</h4>
      <div>
        <h4>Menu</h4>
        <hr>
        <ul>
          <li v-on:click="clickWarranty" :class="{'support-nav-focus': isWarranty}">Warranty</li>
          <li v-on:click="clickDownload" :class="{'support-nav-focus': isDownload}">Download</li>
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

  &-nav {
    h2 {
      line-height: 1.5em;
    }
    h4 {
      line-height: 1.5em;
    }

    hr {
      height: 1px;
      border: none;
      background-color: @hr-color-light;
      padding: 0;
      margin: 5px 20px

    }

    & > div {
      background-color: #e6e6e6;
      padding: 7px 0px;
      margin-top: 30px;

      h4 {
        margin: 0px 20px;
      }

      li {
        line-height: 2em;
        padding: 0px 20px;

        &:hover {
          background-color: #cccccc;
          cursor: pointer;
        }
      }
    }
  }

  a {
    color: @font-black;
  }
}

.support-nav-focus {
  background-color: #cccccc;
}
</style>
