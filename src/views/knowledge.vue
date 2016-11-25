
<template lang="html">
  <section id="knowledge">
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
          <li v-for="knowledge in knowledges">{{ knowledge.title }}</li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import {knowledge} from '../assets/knowledge.js'
export default {
  data() {
    return {
      knowledges: knowledge,
    }
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
