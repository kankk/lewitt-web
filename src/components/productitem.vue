<template lang="html">
  <div class="col-md-4 col-sm-12 product-list-item">
    <img :src="product.imgpath" alt="" />
    <div class="product-list-item-text">
      <h4>{{ product.name }}</h4>
      <hr>
      <p>
        {{ product.outline }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style lang="less">
@import "../styles/public.less";

@img-w: 140px;
@img-h: 140px;
.product-list-item {
  height: @img-h;
  border: none;
  background-color: #f7f7f7;
  overflow: hidden;

  &:hover {
    color: @font-green;
    cursor: pointer;
    hr {
      background-color: @font-green;
    }
  }

  img {
    width: @img-w;
    height: @img-h;
    float: left;
  }
  &-text {
    margin-left: @img-w + 20px;
    margin-right: 20px;
    margin-top: 20px;
    h4 {
      color: @font-green;
      &:hover {
        color: color-hover;
        cursor: pointer;
      }
    }
    hr {
      height: 1px;
      border: none;
      background-color: @hr-color-dark;
      padding: 0;
    }
    p {
      font-size: @font-size-normal - 2px;
      line-height: 1.5em;
      margin-top: 10px;
      // webkit内核
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
