<template lang="html">
  <footer id="brieffooter">
    <section id="brieffooter-info">
      <div id="brieffooter-info-copyright">
        &copy;2015 <span>LEWITT GmbH</span> all rights reserved
      </div>
      <div id="brieffooter-info-country">
        <img src="../assets/images/country-american.png" id="country-icon">
        <span>USA</span>
        <img src="../assets/images/arrow.png" id="country-arrow">
      </div>
      <div id="brieffooter-info-about">
        <span><router-link to="/sitemap">Site Map</router-link></span>
        <span><router-link to="/">Jobs</router-link></span>
        <span><router-link to="/about/contactus">Contact Us</router-link></span>
      </div>
    <section>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../styles/public.less";
#brieffooter {
  height: @footer-index-h;
  background-color: @footer-index-bgcolor;
  color: @footer-index-font;
  line-height: @footer-index-h;
  display: flex;
  justify-content: center;
  align-items: center;

  &-info {
    margin: 0px 40px;
    width: 100%;
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

@media (min-width: 1081px) {
  #brieffooter {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
