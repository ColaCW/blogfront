<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <ul class="shareBox">
        <div style="text-align: left;">
          <b>您现在的位置是:</b>&nbsp;&nbsp;网站首页&nbsp;>&nbsp;资源分享
          <hr style="height: 2px;border: 0;margin: 0;margin-top:10px;background-color:#ddd;"/>
        </div>
        <template v-for="share in shareList">
          <a :href="share.href" target="_blank"><li>【视频】{{share.name}} （提取码：{{share.MA}}）</li></a>
        </template>
      </ul>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style scoped>
  @import '../../static/css/resourceShare.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
        shareList:[
          {name:"死神",href:"https://pan.baidu.com/s/1mVf_xqIsN5LUdBBdk4_Qow",MA:"2bq5"},
          ]
      }
    },
    mounted:function(){
      var that = this;
      $(".resource-share").addClass("active");
      window.vue = this;
      that.init();
    },
    methods: {
      init:function () {
        var that = this;
        $("body,html").animate({
          scrollTop: 0
        });
       that.getShareFiles();
      },
      getShareFiles:function () {
        var that = this;
        console.log("获取分享文件");
      },
    }
  }
</script>
