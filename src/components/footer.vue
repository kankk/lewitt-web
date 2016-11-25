<template lang="html">
  <footer id="detailfooter">
      <section id="detailfooter-nav" class="clearfix">
        <div class="detailfooter-nav-column col-md-2">
          <h4>Products</h4>
          <ul>
            <li><router-link to="/products/lct">LCT Recording Series</router-link></li>
            <li><router-link to="/products/mtp">MTP Live Series</router-link></li>
            <li><router-link to="/products/dtp">DTP Percussion Series</router-link></li>
            <li><router-link to="/products/dgt">DGT Digital Series</router-link></li>
            <li><router-link to="/products/lts">LTS Wireless Series</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2">
          <h4>Sound Samples</h4>
          <ul>
            <li><router-link to="/samples/">Applications</router-link></li>
            <li><router-link to="/samples/">Microphones</router-link></li>
            <li><router-link to="/samples/">Competition</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2">
          <h4>support</h4>
          <ul>
            <li><router-link to="/support/warranty">Warranty</router-link></li>
            <li><router-link to="/support/download">Download</router-link></li>
            <li><router-link to="">Knowledge</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-column col-md-2">
          <h4>About Lewitt</h4>
          <ul>
            <li><router-link to="/about/ourstory">Our Story</router-link></li>
            <li><router-link to="/about/contactus">Contact Us</router-link></li>
            <li><router-link to="/about/">Where to Buy</router-link></li>
          </ul>
        </div>
        <div class="detailfooter-nav-sms col-md-4">
          <ul class="clearfix">
            <li><a href="#"><img src="../assets/images/sms-facebook.png" alt="facebook"></a></li>
            <li><a href="#"><img src="../assets/images/sms-twitter.png" alt="twitter"></a></li>
            <li><a href="#"><img src="../assets/images/sms-youtube.png" alt="youtube"></a></li>
            <li><a href="#"><img src="../assets/images/sms-instergram.png" alt="instergram"></a></li>
          </ul>
        </div>
      </section>

      <section id="detailfooter-info">
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
          <span><router-link to="/about/contactus">Contact Us</router-link></span>
        </div>
      </section>
  </footer>
</template>


<script>
export default {

}
</script>

<style lang="less">
@import "../styles/public.less";
#detailfooter {
  height: @footer-h;
  width: 100%;
  background-color: @common-bgcolor;
  box-sizing: border-box;
  border-bottom: 2px solid @theme-color;
  color: @font-white;
  // 抵消inline-block与父级顶部margin重叠
  overflow: hidden;

  &-nav {
    margin: 95px 40px 0px;
  }

  .detailfooter-nav-column {
    display: inline-block;
    // width: 17%;
    vertical-align: top;
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
    display: inline-block;
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
        background-color: @color-img-focus;
      }
    }
  }

  &-info {
    margin: 50px 40px 0px;
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
</style>
