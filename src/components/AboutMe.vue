<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="content">
          <div style="text-align: left;">
            <b>您现在的位置是:</b>&nbsp;&nbsp;网站首页&nbsp;>&nbsp;关于我
            <hr style="height: 2px;border: 0;margin: 0;margin-top:10px;background-color:#ddd;"/>
          </div>
          <div style="text-align: left;margin-top: 20px;">
            <p><b style="font-size: 17px;">关于站长：</b></p>
            <p style="margin-top: 20px;">&nbsp;&nbsp;刘国强，男，一个97年的站长，吉林人。</p>
            <p style="margin-top: 10px;">&nbsp;&nbsp;建站时间：2019.01-2019.03，利用业余休息时间搭建了这个网站。</p>
            <p style="margin-top: 20px;"><b style="font-size: 17px;">为什么要搭建博客网站：</b></p>
            <p style="margin-top: 20px;">（1）碰到过的某个问题，记录下来，再次碰见之后可以很快速的解决，平时也可以看看自己遇到过的一些问题。</p>
            <p style="margin-top: 10px;">（2）写博客可以加深自己的理解，当把问题整理后用自己的话描述出来时，才算是真正的了解，会更加深自己的印象。</p>
            <p style="margin-top: 10px;">（3）持续写博客也可以见证自己一路走来的脚印，发现自己的进步与不足。</p>
            <p style="margin-top: 10px;">（4）为什么不用现成的博客网站，是因为想自己通过建站整理出自己的一套框架，往架构师的方向努力。</p>
            <p style="margin-top: 20px;"><b style="font-size: 17px;">关于我的博客：</b></p>
            <p style="margin-top: 20px;">&nbsp;&nbsp;域名：www.lgqoxb.top(刘国强牛比上天哈哈)。</p>
            <p style="margin-top: 10px;">&nbsp;&nbsp;服务器：阿里云服务器。</p>
            <p style="margin-top: 10px;">&nbsp;&nbsp;备案号：吉ICP备18002404号。</p>
            <p style="margin-top: 10px;">&nbsp;&nbsp;程序：Java。</p>
          </div>
        </div>
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="qrcode">
          <img src="../../static/img/微信.jpg" style="border-radius: 6px;"/>
        </div>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style scoped>
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
    beforeDestroy:function(){
      window.vue = this;
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
