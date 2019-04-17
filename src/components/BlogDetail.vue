<template>
  <div id="app" v-cloak>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <div class="blogDetailBox" v-if="previewBlog">
            <div style="text-align: left;">
              <b>您现在的位置是:</b>&nbsp;&nbsp;网站首页&nbsp;>&nbsp;博客详情
              <hr style="height: 2px;border: 0;margin: 0;margin-top:10px;background-color:#ddd;"/>
            </div>
            <div class="blog-name">{{previewBlog.name}}</div>
            <ul style="text-align: left;">
              <li style="float: left;margin-left: 15px;height: 30px;">
                <img src="../../static/img/分类.png" style="width: 18px;float: left;"/>
                <span style="margin-left:5px;cursor: pointer;">{{previewBlog.blogCategoryObj.name}}</span>
              </li>
              <li style="float: left;margin-left: 15px;height: 30px;">
                <img src="../../static/img/浏览.png" style="width: 19px;float: left;"/>
                <span style="margin-left:5px;">{{previewBlog.viewNum}}</span>
              </li>
              <li style="float: left;margin-left: 15px;height: 30px;">
                <img src="../../static/img/日期.png" style="width: 18px;float: left;"/>
                <span style="margin-left:5px;">{{previewBlog.createAt.substring(0,10)}}</span>
              </li>
              <li style="float: left;margin-left: 15px;height: 30px;">
                <template v-if="previewBlog.tags" v-for="tag in previewBlog.tags.split(',')">
                  <span style="background-color: #e6e6e6;border-radius: 6px;padding: 5px 12px;margin-left: 5px">{{tag}}</span>
                </template>
              </li>
              <div style="clear: both"></div>
            </ul>

            <div class="blog-content" id="blog-content" v-html="previewBlog.content"></div>
            <div>
              <img src="../../static/img/点赞.png" @click="good()" v-show="!isGood" style="cursor: pointer;"/>
              <img src="../../static/img/点赞1.png" v-show="isGood"/>
              <p>（{{previewBlog.likeNum}}）</p>
              <p>点个赞吧</p>
            </div>
        </div>
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="clickRankBox" v-if="viewBlogs && viewBlogs.length>0">
          <h2 class="htitle">
            热门点击
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for="(blog,index) in viewBlogs">
              <li @click="goDetail(blog.id)" :title="blog.name">
                <i :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;<span :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{blog.name}}</span>
              </li>
            </template>
          </ul>
        </div>
        <div class="recommendBox" v-if="goodBlogs && goodBlogs.length > 0">
          <h2 class="htitle">
            推荐博文
          </h2>
          <ul style="margin-left: 15px;">
            <template v-for="(blog,index) in goodBlogs">
              <li @click="goDetail(blog.id)" :title="blog.name">
                <i :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{index<9 ? '&nbsp;&nbsp;' : ''}}{{index+1}}.</i>
                &nbsp;&nbsp;<span :style="{'color':+index == 0 ? 'red': index == 1 ? 'green' : index == 2 ? 'blue' : ''}">{{blog.name}}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div style="clear: both"></div>
  </div>
</template>
<style scoped>
  @import '../../static/css/blogDetail.css';
</style>
<style>
  @import '../../static/css/style.css';
</style>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
        id:"",
        isGood:false,
        previewBlog:null,
        blogs:[],
        goodBlogs:[],
        viewBlogs:[],
        blogTags:[]
      }
    },
    watch: {
      $route: "checkRouter"
    },
    mounted:function(){
      var that = this;
      $(".header .active").removeClass("active");
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
        Web.post(Web.host + "/api/blog/getBlog.do",data,function (res) {
          if(res.status){
            that.previewBlog = res.data;
            that.$forceUpdate();
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
