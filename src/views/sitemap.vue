<template lang="html">
<section id="sitemap">
  <div class="list-banner" id="sitemap-banner">
    <h1>
      Unaltered. Authentic. Memorable.
    </h1>
  </div>
  <div id="sitemap-links" class="clearfix">
    <div class="col-md-4 col-sm-12">
      <h2>Site Map</h2>
    </div>
    <div class="col-md-4 col-sm-12">
      <div>
        <h4>Products</h4>
        <hr>
        <ul>
          <li><router-link to="/products/lct">LCT Recording Series</router-link></li>
          <li><router-link to="/products/mtp">MTP Live Series</router-link></li>
          <li><router-link to="/products/dtp">DTP Percussion Series</router-link></li>
          <li><router-link to="/products/dgt">DGT Digital Series</router-link></li>
          <li><router-link to="/products/lts">LTS Wireless Series</router-link></li>
        </ul>
      </div>
      <div>
        <h4>Endorsers</h4>
        <hr>
        <ul>
          <li><router-link to="/endorsers">Endorsers</router-link></li>
        </ul>
      </div>
      <div>
        <h4>Knowledge</h4>
        <hr>
        <ul>
          <li><router-link to="/">Knowledge List</router-link></li>
          <li class="sm-hidden">&nbsp</li>
          <li class="sm-hidden">&nbsp</li>
        </ul>
      </div>
      <div>
        <h4>Supprot</h4>
        <hr>
        <ul>
          <li><router-link to="/">Warranty</router-link></li>
          <li><router-link to="/">Download</router-link></li>
        </ul>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div>
        <h4>Sound Samples</h4>
        <hr>
        <ul>
          <li><router-link to="/samples/">Applications</router-link></li>
          <li><router-link to="/samples/">Microphones</router-link></li>
          <li><router-link to="/samples/">Competition</router-link></li>
          <li class="sm-hidden">&nbsp</li>
          <li class="sm-hidden">&nbsp</li>
        </ul>
      </div>
      <div>
        <h4>News</h4>
        <hr>
        <ul>
          <li><router-link to="/">Latest News</router-link></li>
        </ul>
      </div>
      <div>
        <h4>Lewitt</h4>
        <hr>
        <ul>
          <li><router-link to="/">Our Story</router-link></li>
          <li><router-link to="/">Contact Us</router-link></li>
          <li><router-link to="/">Where to buy</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../styles/public.less";
#sitemap {
  overflow: hidden;
  a {
    color: @font-black;
  }

  &-links {
    margin: 50px 40px 80px;

    h4 {
      color: @font-green;
      line-height: 1.5em;
    }

    hr {
      height: 1px;
      border: none;
      background-color: @hr-color-light;
      padding: 0;
    }

    ul {
      padding-bottom: 40px;
      li {
        font-size: @font-size-normal + 4px;
        line-height: 2em;

        a:hover {
          .text-hover(underline);
        }
      }
    }
  }
}
#sitemap-banner {
  background-image: url(../assets/images/news-banner.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: @font-silver;
    text-align: center;
  }
}
</style>
