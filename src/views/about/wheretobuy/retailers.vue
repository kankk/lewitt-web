<template lang="html">
<div class="col-md-8 col-sm-12">
  <retailers-item v-for="retailer in retailers" v-bind:item="retailer"></retailers-item>
</div>
</template>

<script>
import {retailers} from '../../../assets/retailers.js';

const retailersItem = {
  template: '<div class="retailers-list">\
    <div v-bind:class="[{ \'retailer-country-name-focus\': showDetails }, \'retailer-country-name\']"\ v-on:click="toggleDetails">\
      <h4>{{ item.country }}</h4>\
    </div>\
    <template v-if="isNull">\
    <div class="retailer" v-if="showDetails">\
      <div class="retailer-title">\
        <div class="retailer-name">\
          Shop name\
        </div>\
        <div class="retailer-address">\
          Address & Google Maps link\
        </div>\
      </div>\
      <div class="retailer-info" v-for="each in item.retailer">\
        <div class="retailer-name"><a>{{ each.name }}</a></div>\
        <div class="retailer-address"><a>{{ each.address }}</a></div>\
      </div>\
    </div>\
    </template>\
    <template v-else>\
    <div v-if="showDetails" class="retailer"><h4>There are no retailers in {{ item.country }}<h4></div>\
    </template>\
  </div>',
  props: ['item'],
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails: function() {
      this.showDetails = !(this.showDetails)
    }
  },
  computed: {
    isNull: function() {
      if(this.item.retailer.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export default {
  data() {
    return {
      retailers: retailers,
    }
  },
  components:{
    retailersItem: retailersItem
  },
}
</script>

<style lang="less">
@import "../../../styles/public.less";

.retailer-country-name {
  line-height: 1em;
  color: #333333;
  background-color: #e6e6e6;
  padding: 15px;
  border-top: 1px solid @border-color-light;

  &:hover {
    background-color: #cccccc;
    cursor: pointer;
  }

  &-focus {
    background-color: #cccccc;
  }
}
.retailer {
  margin: 15px;
  line-height: 2em;
  &-title {
    font-weight: bolder;
  }
  &-info {
    a {
      color: @font-green;
      text-decoration: underline;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &-name {
    display: inline-block;
    width: 40%;
    vertical-align: top;
  }
  &-address {
    display: inline-block;
    width: 50%;
    vertical-align: top;
  }
}
</style>
