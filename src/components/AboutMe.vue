<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="content">
        关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我
      </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style>
  @import '../../static/css/aboutMe.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
      }
    },
    mounted:function(){
      var that = this;
      $(".about-me").addClass("active");
      that.init();
    },
    methods: {
      init:function () {
        var that = this;
        $("body,html").animate({
          scrollTop: 0
        });
      },
    }
  }
</script>
