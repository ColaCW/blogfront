<template>
  <div id="BlogList" v-cloak>
    <router-view name="Header"></router-view>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
        <div class="bannerBox layui-col-xs12 layui-col-md12">
          <img src="../../static/img/in_top_bj.jpg">
        </div>
        <div class="leftBox layui-col-xs12 layui-col-md8" style="margin-bottom:20px;">
            <template v-for="blog in blogs">
              <div data-scroll-reveal="enter top  over 1.33s" class="blogBox">{{blog.name}}</div>
            </template>
        </div>
        <div class="nullBox layui-col-md1"></div>
        <div class="rightBox layui-col-xs12 layui-col-md3" style="margin-bottom:20px;background-color: #ccc">
          <div>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=450 src="//music.163.com/outchain/player?type=0&id=308071449&auto=0&height=430"></iframe>
          </div>
        </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div style="clear: both"></div>
  </div>
</template>
<style>
  @import '../../static/css/blogList.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  import scrollReveal from  'scrollreveal';
  export default {
    data () {
      return {
        scrollReveal:scrollReveal(),
        blogs:[{"name":11111},{"name":22222},{"name":33333},{"name":44444},{"name":55555},{"name":66666},{"name":77777},{"name":88888},{"name":9999},{"name":10000}]
      }
    },
    mounted:function(){
      var that = this;
      that.scrollReveal.reveal('.blogBox', {
        duration: 2000,//动画的时长
        delay:300,//延迟时间
        origin: 'top',//动画开始的位置，'bottom', 'left', 'top', 'right'
        reset:true,//回滚的时候是否再次触发动画
        mobile: true,//在移动端是否使用动画
        distance:'20px',//滚动的距离，单位可以用%，rem等
        opacity:0.001,//其他可用的动画效果
        easing:'linear',
        scale: 0.9,
      });
    },
    methods: {

    }
  }
</script>
