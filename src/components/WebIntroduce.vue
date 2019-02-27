<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="blogDetailBox">
          <div style="text-align: left;">
            <b>您现在的位置是:</b>&nbsp;&nbsp;网站首页&nbsp;>&nbsp;网站介绍
            <hr style="height: 2px;border: 0;margin: 0;margin-top:10px;background-color:#333;"/>
          </div>
          <div class="blog-name">博客标题</div>
          <div>
            <img src="../../static/img/标签.png" style="float: left;margin-left: 15px;"/>
            <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:green;">【JAVA·trim()】</div>
            <img src="../../static/img/浏览.png" style="float: left;margin-left: 15px;"/>
            <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:red;">20</div>
            <img src="../../static/img/日期.png" style="float: left;margin-left: 15px;"/>
            <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;">2019-09-09</div>
            <div style="clear: both"></div>
          </div>
          <div class="blog-content">
            正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
          </div>
          <div>
            <img src="../../static/img/点赞.png" @click="good()" v-show="!isGood" style="cursor: pointer;"/>
            <img src="../../static/img/点赞1.png" v-show="isGood"/>
            <p>（1）</p>
            <p>点个赞吧</p>
          </div>
        </div>
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="clickRankBox">
          <h2 class="htitle">
            热门点击
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for="(blog,index) in blogs">
              <li @click="goDetail(blog.name)" :title="blog.name">
                <i :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;<span :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{blog.name}}</span>
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
                <i :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;<span :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{blog.name}}</span>
              </li>
            </template>
          </ul>
        </div>
        <div class="tagBox">
          <h2 class="htitle">
            网站标签
          </h2>
          <ul style="margin-left: 15px;">
            <li></li>
          </ul>
        </div>
        <div class="friendHrefBox">
          <h2 class="htitle">
            友情链接
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for=" friend in friendHref">
              <li><a :href="friend.href" target="_blank">{{friend.name}}</a></li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
  </div>
</template>
<style scoped>
  @import '../../static/css/blogDetail.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
        id:"",
        isGood:false,
        blogs:[{"name":11111},{"name":22222},{"name":33333},{"name":44444},{"name":55555},{"name":66666},{"name":77777},{"name":88888},{"name":9999},{"name":10000}],
        friendHref:[{"name":"杨青","href":"https://www.yangqq.com/"}]
      }
    },
    mounted:function(){
      var that = this;
      $(".web-introduce").addClass("active");
      that.init();
    },
    methods: {
      init:function () {
        var that = this;
        $("body,html").animate({
          scrollTop: 0
        });
        that.id = "1";
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
