<template lang="html">
  <section id="indexcontent">
    <div id="indexcontent-banner">
      <img src="../assets/images/index-banner-img.png" alt="" />
      <div class="">
        <h1>Pro studio<br>goes handy</h1>
        <h4>
          Find out more
        </h4>
      </div>
    </div>
    <div class="indexpage-banner2" id="indexcontent-banner2">
      <div class="indexpage-banner2-item index-banner-item1">
        <h3>Tal Bergman and Lewitt</h3>
        <p>
          Uses an extended DTP Beat Kit Pro 7
        </p>
      </div>
      <div class="indexpage-banner2-item index-banner-item2">
        <h3>Lewitt Live</h3>
        <p>
          Oomph! frontman feedback
        </p>
      </div>
      <div class="indexpage-banner2-item index-banner-item3">
        <h3>LCT 550</h3>
        <p>
          The World's Quietest Studio Microphone
        </p>
      </div>
      <div class="indexpage-banner2-item index-banner-item4">
        <h3>Sound Samples</h3>
        <p>
           It’s the experience that counts.
        </p>
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
#indexcontent {

    position: relative;
    background-color: #000000;

    &-banner {
      background-color: #000000;
      height: 430px;
      background-image: url(../assets/images/index-banner-light.png);
      overflow: hidden;
      // background-repeat: no-repeat;
      // background-position: 385px 65px;
      img {
        margin-left: 370px;
        margin-top: 30px;
        // margin-bottom: -50px;
      }

      div {
        display: inline-block;
        color: @font-white;
        vertical-align: top;
        text-align: right;
        margin-left: 170px;
        margin-top: 80px;

        h1 {
          line-height: 1.5em;
        }
        h4 {
          margin-top: 30px;
          color: @font-green;
        }
      }
    }

    .indexpage-banner2-item {
      display: flex;
      flex-flow: column nowrap;
      text-align: center;
      p {
        line-height: 1.5em;
        color: @font-silver;
      }
    }

    .index-banner-item1 {
      width: 25%;
      background-image: url(../assets/images/index-banner2-img1.png);
      background-size: cover;
    }
    .index-banner-item2 {
      width: 25%;
      background-image: url(../assets/images/index-banner2-img2.png);
      background-size: cover;
    }
    .index-banner-item3 {
      width: 25%;
      background-image: url(../assets/images/index-banner2-img3.png);
      background-size: cover;
    }
    .index-banner-item4 {
      width: 25%;
      background-image: url(../assets/images/index-banner2-img4.png);
      background-size: cover;
    }
}

@media (min-width: 1081px) {
  #indexcontent {
    position: absolute;
    left: 0; right: 0;
    top: @header-h;
    bottom: @footer-index-h;

    &-banner {
      position: absolute;
      left: 0; right: 0;
      bottom: 180px;

      // img:nth-child(2) {
      //   position: absolute;
      //   left: 385px;
      //   bottom: -60px;
      // }
      // img:nth-child(1) {
      //   position: absolute;
      //   left: 30px;
      //   bottom: -250px;
      // }
    }

    &-banner2 {
      position: absolute;
      left: 0; right:0;
      bottom: 0;
    }
  }
}
@media (max-width: 1080px) {
  #indexcontent {
    &-banner {
    }
  }
}
</style>
