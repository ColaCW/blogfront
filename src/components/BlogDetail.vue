<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="blogDetailBox">
            <div style="text-align: left;">
              <b>您现在的位置是:</b>&nbsp;&nbsp;网站首页&nbsp;>&nbsp;关于我
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
            <template v-for="(blog,index) in viewBlogs">
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
            <template v-for="(blog,index) in goodBlogs">
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
        previewBlog:{},
        blogs:[{"name":11111},{"name":22222},{"name":33333},{"name":44444},{"name":55555},{"name":66666},{"name":77777},{"name":88888},{"name":9999},{"name":10000}],
        goodBlogs:[],
        viewBlogs:[]
      }
    },
    watch: {
      $route: "checkRouter"
    },
    mounted:function(){
      var that = this;
      $(".header .active").removeClass("active");
      $(".typeSelect").hide();
      that.init();
    },
    methods: {
      checkRouter(newVal, oldVa) {
        var that = this;
        if(oldVa.path !== newVal.path){
          that.init();
        }
      },
      init:function () {
        var that = this;
        $("body,html").animate({
          scrollTop: 0
        });
        that.id = that.$route.params.id;
        that.getBlog();
        that.getViewBlogs();
        that.getGoodBlogs();
      },
      getBlog:function () {
        var that = this;
        var data = {
          id:that.id
        };
        Web.post(Web.host + "/api/blog/getBlog.do".data,function (res) {
          if(res.status){
            that.previewBlog = res.data;
          }
        })
      },
      //点赞
      good:function () {
        var that = this;
        var data = {
          id:that.id
        }
        Web.post(Web.host + "/api/blog/good.do",data,function (res) {
          if(res.status){
            that.previewBlog.likeNum = res.data;
            that.isGood = true;
          }
        })
      },
      //进入文章详情
      goDetail:function (id) {
        var that = this;
        that.$router.push({name: 'BlogDetail', params: {id: id}});
      },
      //获取推荐文章
      getGoodBlogs:function () {
        var that = this;
        Web.post(Web.host + "/api/blog/getGoodBlogs.do",null,function (res) {
          if(res.status){
            that.goodBlogs = res.data;
          }
        })
      },
      //获取热门点击文章
      getViewBlogs:function () {
        var that = this;
        Web.post(Web.host + "/api/blog/getViewBlogs.do",null,function (res) {
          if(res.status){
            that.viewBlogs = res.data;
          }
        })
      },
    }
  }
</script>
