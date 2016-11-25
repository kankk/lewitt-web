<template lang="html">
  <div class="col-md-8 col-sm-12">
    <download-item v-for="eachitem in downloadlist" v-bind:item="eachitem"></download-list>
  </div>
</template>

<script>
import App from '../../App';
import {downloadlist} from '../../assets/downloadlist.js'

const downloadItem = {
  template: '<div class="download-list">\
    <div v-on:click="toggleDetails" v-bind:class="[{ \'download-list-title-focus\': showDetails }, \'download-list-title\']">\
    <h4>{{ item.title }}</h4>\
    </div>\
    <template v-if="isNull">\
    <div v-for="catalog in item.catalogs" v-if="showDetails" class="download-list-catalog">\
      <h4>{{ catalog.name }}</h4>\
      <ul>\
        <li v-for="item in catalog.items">{{ item.itemname }}</li>\
      </ul>\
    </div>\
    </template>\
    <template v-else>\
      <div v-if="showDetails" class="download-list-catalog"><h4>Nothing<h4></div>\
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
      // 计算catalogs是否为空, 空则返回不存在的提示
      if(this.item.catalogs.length > 0) {
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
      downloadlist: downloadlist
    }
  },
  components: {
    downloadItem: downloadItem
  }
}
</script>

<style lang="less">
@import "../../styles/public.less";

.download-list {
  color: #4c4c4c;
  &-title {
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

  &-catalog {
    margin: 15px;
    h4 {
      line-height: 2em;
    }
    ul {
      padding: 0px 0px 15px;
    }
    li {
      line-height: 2em;
      color: @font-green;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
