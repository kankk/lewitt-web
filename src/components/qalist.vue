<template lang="html">
<div class="col-md-8 col-sm-12">
  <qa-item v-for="qa in qas" v-bind:qa="qa"></qa-item>
</div>
</template>

<script>
import {knowledge} from '../assets/knowledge.js'

const qaItem = {
  template: '<div class="qa-list">\
  <div v-bind:class="[{ \'qa-qusetion-focus\': showDetails }, \'qa-question\']"\ v-on:click="toggleDetails">\
    <h4>{{ qa.question }}</h4>\
  </div>\
  <div v-if="showDetails" class="qa-answer">\
    <p class="qa-answer-content">{{ qa.answer }}</p>\
    <router-link :to="detailPath" tag="p" class="qa-answer-todetail">How does it work？</router-link>\
  </div>\
  </div>',
  props: ['qa'],
  data() {
    return {
      showDetails: false,
      detailPath: '',
    }
  },
  methods: {
    toggleDetails: function() {
      this.showDetails = !(this.showDetails)
    }
  },
  created: function() {
    this.detailPath = this.$route.path + '/' + this.qa.question;
  },
  watch: {
    '$route' (to, from) {
      this.detailPath = to.path + '/' + this.qa.question;
      this.showDetails = false;
    }
  }
}

export default {
  data() {
    return {
      qas: [],
      knowledge: knowledge,
    }
  },
  components: {
    qaItem: qaItem,
  },
  methods: {
    getQalist: function(title) {
      for(var index in knowledge) {
        if(knowledge[index].title == title) {
          return knowledge[index].qas;
        }
      }
      return '';
    },
  },
  created() {
    this.qas = this.getQalist(this.$route.params.qatitle);
  },
  watch: {
    '$route' (to, from) {
      this.qas = this.getQalist(to.params.qatitle);
    }
  }
}
</script>

<style lang="less">
@import "../styles/public.less";
.qa-question {
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

.qa-answer {
  line-height: 2em;
  margin: 20px 15px;
  color: #333333;
  &-content {
    margin-bottom: 20px;
  }
  &-todetail {
    .text-hover(nounderline);
  }
}
</style>
