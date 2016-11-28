
<template lang="html">
  <section id="knowledge" class="clearfix">
    <div class="col-md-4 col-sm-12 leftnav">
      <h2>Knowledge</h2>
      <div id="knowledge-nav-search">
        <input type="text" placeholder="Search in knowledge">
        <img src="../assets/images/leftnav-search.png" alt="" />
      </div>
      <hr class="leftnav-hr">
      <div class="leftnav-meun">
        <h4>Menu</h4>
        <hr>
        <ul>
          <router-link :to="{ path: '/knowledge/' + knowledge.title}" v-for="(knowledge, index) in knowledges" tag="li" v-on:click.native="leftnavClick(index)" :class="{'leftnav-focus': focusList[index]}">{{ knowledge.title }}</router-link>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import {knowledge} from '../assets/knowledge.js'
import Vue from 'vue'
export default {
  data() {
    return {
      knowledges: knowledge,
      focusList: [],
    }
  },
  methods: {
    leftnavClick: function (index) {
      this.clearFocusList();
      // this.focusList[index] = true;
      // Vue不能检测数组直接赋值的变动
      Vue.set(this.focusList, index, true);
    },
    clearFocusList: function () {
      for(var i = 0; i < this.focusList.length; i++) {
        // this.focusList[i] = false;
        Vue.set(this.focusList, i, false);
      }
    },
  },
  created: function () {
    this.focusList.length = this.knowledges.length;
    this.clearFocusList();
  },

}
</script>

<style lang="less">
@import "../styles/public.less";
#knowledge {
  margin: 45px 40px 0px;

  &-nav-search {
    height: 40px;
    margin-top: 30px;
    box-sizing: border-box;
    background-color: @leftnav-bg-normal;
    display: flex;
    justify-content: space-between;;
    align-items: center;
    padding: 8px;
    border-radius: @border-radius;

    input {
      font-size: 18px;
      width: 80%;
      background: none;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
