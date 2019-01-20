<template>
  <div id="app">
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="blogDetailBox">

        </div>
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="clickRankBox">
          <h2 class="htitle">
            热门点击
          </h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="recommendBox">
          <h2 class="htitle">
            推荐博文
          </h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="tagBox">
          <h2 class="htitle">
            网站标签
          </h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="friendHrefBox">
          <h2 class="htitle">
            友情链接
          </h2>
          <ul>
            <li>11</li>
            <li>22</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style>
  @import '../../static/css/blogDetail.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
        blogs:[{"name":11111},{"name":22222},{"name":33333},{"name":44444},{"name":55555},{"name":66666},{"name":77777},{"name":88888},{"name":9999},{"name":10000}]
      }
    },
    mounted:function(){
      var that = this;
      that.init();
    },
    methods: {
      init:function () {
        var that = this;
        that.getBlog();
      },
      getBlog:function () {
        var that = this;
        var id = that.$route.params.id;
        console.log(id);
      }
    }
  }
</script>
