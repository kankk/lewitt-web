
<template lang="html">
  <section id="contactus">
    <div class="list-banner" id="contactus-banner">
      <h1>
        Unaltered. Authentic. Memorable.
      </h1>
    </div>
    <div id="contactus-info" class="clearfix">
      <div class="col-md-4 col-sm-12">
        <h2>Contact Us</h2>
        <h4>&nbsp</h4>
        <h4>
          LEWITT customer service and technical professionals are available to assist you by phone, fax or email.
        </h4>
        <h4>&nbsp</h4>
        <div id="contactus-info-followus">
          <h4>Follow us</h4>
          <ul class="clearfix">
            <li><a href="#"><img src="../../assets/images/followus-facebook.png" alt="facebook"></a></li>
            <li><a href="#"><img src="../../assets/images/followus-twitter.png" alt="twitter"></a></li>
            <li><a href="#"><img src="../../assets/images/followus-youtube.png" alt="youtube"></a></li>
            <li><a href="#"><img src="../../assets/images/followus-instergram.png" alt="instergram"></a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-8 col-sm-12">
        <!-- <div id="contactus-info-map">
        </div> -->
        <img src="../../assets/images/contactus-map.png" alt="" id="contactus-info-map"/>
        <hr>
        <h4><b>LEWITT GmbH</b></h4>
        <h4>Burggasse 79，1070 Vienna，AUSTRIA</h4>
        <h4>&nbsp</h4>
        <h4>Telephone international:<br>
          office hours 7am – 15pm CET<br>
          Phone +43 (1) 74040 8047<br>
          Fax +43 (1) 74040 8048<br>
          &nbsp<br>
          General inquiries:<br>
          info@lewitt-audio.com</h4>
        <hr>
        <h4><b>LEWITT GmbH</b></h4>
        <h4>Roman Perschon <br>
          &nbsp<br>
          Company registration no.: FN 331913h<br>
          County court: Vienna<br>
          VAT registration no.: ATU 65514909</h4>
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
#contactus-banner {
  background-image: url(../../assets/images/news-banner.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: @font-silver;
    text-align: center;
  }
}

#contactus-info {

  margin: 40px 40px 0px;
  padding-bottom: 50px;

  &-map {
    width: 100%;
  }

  &-followus {
    ul {
      margin-top: 15px;
    }
    li {
      width: 36px;
      height: 36px;
      float: left;
      margin-right: 20px;
      background-color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  hr {
    height: 1px;
    border: none;
    background-color: @hr-color-light;
    padding: 0;
    margin: 25px 0px;
  }

  h4 {
    line-height: 1.5em;
    color: @font-black;

    b {
      color: @font-green;
    }
  }
}
</style>
