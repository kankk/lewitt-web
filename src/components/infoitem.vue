<template lang="html">
  <div class="info-list-item">
    <img :src="info.imgpath" alt="" />
    <div>
      <h4>{{ info.name }}</h4>
      <p>
        {{ info.title }}
      </p>
      <span>{{ info.info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="less">
@import "../styles/public.less";
@infoitem-h: 440px;
@infoitem-w: 380px;
@infoitem-img-h: 250px;

.info-list-item {
  height: @infoitem-h;
  width: @infoitem-w;
  background-color: #f7f7f7;
  margin-bottom: 25px;
  margin-left: 13px;
  margin-right: 13px;

  &:hover {
    color: @font-green;
    cursor: pointer;
  }

  img {
    width: @infoitem-w;
    height: @infoitem-img-h;
  }
  & > div {
    padding: 10px 20px;

    h4 {
      color: @font-green;
      line-height: 1.5em;
    }
    p {
      line-height: 2em;
      margin-bottom: 15px;
    }

    span {
      line-height: 1.5em;

      // webkit内核
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

</style>
