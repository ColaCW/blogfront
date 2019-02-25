<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      fenxiang
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style>
  @import '../../static/css/resourceShare.css';
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
      $(".resource-share").addClass("active");
      that.init();
    },
    methods: {
      init:function () {
        var that = this;
        $("body,html").animate({
          scrollTop: 0
        });
        that.id = that.$route.params.id;
        that.getBlog();
      },
      getBlog:function () {
        var that = this;

        console.log(that.id);
      },
      good:function () {
        var that = this;
        console.log(that.id);
        that.isGood = true;
      },
      //进入文章详情
      goDetail:function (id) {
        console.log(id)
        var that = this;
        that.$router.push({name: 'BlogDetail', params: {id: id}});
      },
    }
  }
</script>
