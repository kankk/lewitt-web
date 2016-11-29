
<template lang="html">
<section class="indexpage">
  <div class="indexpage-banner" id="samples-indexpage-banner">
    <h1>Nothing to hide</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>
  </div>
  <div class="indexpage-banner2">
    <div class="indexpage-banner2-item samples-banner-item1">
      <h3>Select Application</h3>
    </div>
    <div class="indexpage-banner2-item samples-banner-item2">
      <h3>Select Microphone</h3>
    </div>
    <div class="indexpage-banner2-item samples-banner-item3">
      <h3>Compare Against Competition</h3>
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
.indexpage {
  &-banner {
    height: 470px;
  }

  &-banner2 {
    display: flex;
    flex-flow: row nowrap;

    &-item {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        color: @font-silver;
        text-align: center;
      }

      &:hover {
        cursor: pointer;
        h3 {
          color: @font-green;
        }
      }
    }
  }

  .samples-banner-item1 {
    width: 33.33%;
    background-image: url(../assets/images/samples-banner2-img1.png);
    background-size: cover;
  }
  .samples-banner-item2 {
    width: 33.33%;
    background-image: url(../assets/images/samples-banner2-img2.png);
    background-size: cover;
  }
  .samples-banner-item3 {
    width: 33.33%;
    background-image: url(../assets/images/samples-banner2-img3.png);
    background-size: cover;
  }
}

#samples-indexpage-banner {
  background-image: url(../assets/images/samples-page-banner.png);
  background-size: cover;
  background-color: @bg-color-black;
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    color: @font-silver;
    line-height: 3em;
    margin-top: 70px;
  }
  p {
    width: 50%;
    color: @font-gray;
    line-height: 2em;
    text-align: center;
  }
}

</style>
