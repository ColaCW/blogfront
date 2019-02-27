<template>
  <div id="BlogList" v-cloak>
    <router-view name="Header"></router-view>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="banner-box layui-col-xs12">
          <div class="banner-img layui-col-xs12 layui-col-md9">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../static/img/in_top_bj.jpg"/></div>
                <div class="swiper-slide"><a href="https://www.aliyun.com" target="_blank"><img src="../../static/img/aliyun.png"/></a></div>
                <div class="swiper-slide"><a href="https://portal.qiniu.com" target="_blank"><img src="../../static/img/qiniuyun.png"/></a></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="banner-message layui-col-xs12 layui-col-md3" style="padding-left:35px;">
            <div class="message1">
              <a href="https://www.aliyun.com" target="_blank"><img src="../../static/img/aliyun.jpg" style="width: 100%;"/></a>
            </div>
            <div class="message2">
              <a href="https://portal.qiniu.com" target="_blank"><img src="../../static/img/qiniuyun.jpg" style="width: 100%;"/></a>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>
        <template v-for="(blog,index) in blogs">
          <div data-scroll-reveal="enter top  over 0.3s" class="blogBox layui-col-xs12" @click="goDetail(index)">
            <div class="blog-name">{{blog.name}}</div>
            <div class="blog-body">
              <div class="blog-img layui-col-xs4 layui-col-md2">
                <img src="../../static/img/666.gif" style="width: 100%;height:100%"/>
              </div>
              <div class="blog-content layui-col-xs8 layui-col-md10">
                <div class="blog-articel">sdasd</div>
                <div class="blog-other">
                  <img src="../../static/img/标签.png" style="float: left;margin-left: 15px;"/>
                  <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:green;">【JAVA·trim()】</div>
                  <img src="../../static/img/浏览.png" style="float: left;margin-left: 15px;"/>
                  <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:red;">20</div>
                  <img src="../../static/img/日期.png" style="float: left;margin-left: 15px;"/>
                  <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;">2019-09-09</div>
                  <div class="read-article" style="float: right;margin-right: 10px" @click.stop="goDetail(index)">阅读原文</div>
                  <div style="clear: both"></div>
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
        </template>
        <div id="articlePage"></div>
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="userBox">
          <h2>刘国强的名片</h2>
          <div style="float: left;width:65%;">
            <p>职业：程序猿，JAVA开发</p>
            <p>现居：上海</p>
            <p>工作：上海撷知教育</p>
            <p>电话：17601349133</p>
            <p>邮箱：2629080132@qq.com</p>
          </div>
          <div style="float: right;width:25%;margin: 15px 20px 0 0;">
            <img src="../../static/img/gaga.jpg"/>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="clickRankBox">
          <h2 class="htitle">
            热门点击
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for="(blog,index) in blogs">
              <li @click="goDetail(blog.name)" :title="blog.name">
                <i :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;{{blog.name}}
              </li>
            </template>
          </ul>
        </div>
        <div class="recommendBox">
          <h2 class="htitle">
            推荐博文
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for="(blog,index) in blogs">
              <li @click="goDetail(blog.name)" :title="blog.name">
                <i>{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;{{blog.name}}
              </li>
            </template>
          </ul>
        </div>
        <div class="friendHrefBox">
          <h2 class="htitle">
            友情链接
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for=" friend in friendHref">
              <li style="text-align: center;"><a :href="friend.href" target="_blank">{{friend.name}}</a></li>
            </template>
          </ul>
        </div>
        <div class="musicBox">
          <iframe id="yunMusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=450 src="//music.163.com/outchain/player?type=0&id=308071449&auto=0&height=430"></iframe>
        </div>
      </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div style="clear: both"></div>
  </div>
</template>
<style scoped>
  @import '../../static/css/blogList.css';
</style>
<script>
  import {Web} from "../../static/js/web.js";
  import 'swiper/dist/css/swiper.min.css';
  import scrollReveal from 'scrollreveal';
  import Swiper from 'swiper';

  export default {
    data() {
      return {
        scrollReveal: scrollReveal(),
        blogs: [{"name": 11111}, {"name": 22222}, {"name": 33333}, {"name": 44444}, {"name": 55555}, {"name": 66666}, {"name": 77777}, {"name": 88888}, {"name": 9999}, {"name": 10000}],
        friendHref:[{"name":"杨青","href":"https://www.yangqq.com/"}]
      }
    },
    mounted: function () {
      var that = this;
      $(".index").addClass("active");
      that.init();
    },
    methods: {
      init: function () {
        var that = this;
        that.getBanners();
        that.getBlogs();
      },
      getBanners:function(){
        var that = this;
        that.$nextTick(function () {
          //加载轮播图
          new Swiper ('.swiper-container', {
            autoplay:true,
            loop:false,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
      //加载文章
      getBlogs:function () {
        var that = this;
        that.$nextTick(function () {
          //加载文章滚动条动画
          that.scrollReveal.reveal('.blogBox', {
            duration: 2000,//动画的时长
            delay: 300,//延迟时间
            origin: 'top',//动画开始的位置，'bottom', 'left', 'top', 'right'
            reset: true,//回滚的时候是否再次触发动画
            mobile: true,//在移动端是否使用动画
            distance: '20px',//滚动的距离，单位可以用%，rem等
            opacity: 0.001,//其他可用的动画效果
            easing: 'linear',
            scale: 0.9,
          });
          //加载分页效果
          layui.use(['laypage', 'layer'], function(){
            var laypage = layui.laypage;
            //不显示首页尾页
            laypage.render({
              elem: 'articlePage'
              ,count: 100
              ,first: false
              ,last: false
            });
          });
        })
      },
      //进入文章详情
      goDetail:function (id) {
        var that = this;
        that.$router.push({name: 'BlogDetail', params: {id: id}});
      },
    }
  }
</script>
