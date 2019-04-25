<template>
  <div id="BlogList" v-cloak>
    <router-view name="Header"></router-view>
    <div class="nullBox layui-col-xs0 layui-col-md2"></div>
    <div class="main layui-col-xs12 layui-col-md8">
      <div style="text-align: left;">
        <b>您现在的位置是:</b>&nbsp;&nbsp;博客分类&nbsp;>&nbsp;{{categary}}
        <hr style="height: 2px;border: 0;margin: 0;margin-top:10px;background-color:#ddd;"/>
      </div>
      <div class="leftBox layui-col-xs12 layui-col-md9" style="margin-bottom:20px;">
        <template v-for="blog in blogs">
          <div class="blogBox layui-col-xs12" @click="goDetail(blog.id)">
            <div class="blog-name">{{blog.name}}</div>
            <div class="blog-body">
              <div class="blog-img layui-col-xs4 layui-col-md2">
                <template v-if="blog.imgSrc">
                  <template v-for="(img,index) in blog.imgSrc.split(',')" v-if="index == 0">
                    <img :src="getSrc(img)" style="width: 100%;"/>
                  </template>
                </template>
                <template v-else>
                  <img src="../../static/img/666.gif" style="width: 100%;height:100%"/>
                </template>
              </div>
              <div class="blog-content layui-col-xs8 layui-col-md10">
                <div class="blog-articel" v-html="blog.brief"></div>
                <ul class="blog-other">
                  <li style="float: left;">
                    <img src="../../static/img/分类.png" style="float: left;margin-left: 15px;"/>
                    <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:green;" @click="">【{{blog.blogCategoryObj.name}}】</div>
                    <div style="clear: both"></div>
                  </li>
                  <li style="float: left;">
                    <img src="../../static/img/浏览.png" style="float: left;margin-left: 15px;"/>
                    <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;color:red;">{{blog.viewNum}}</div>
                    <div style="clear: both"></div>
                  </li>
                  <li style="float: left;">
                    <img src="../../static/img/日期.png" style="float: left;margin-left: 15px;"/>
                    <div style="height: 20px;line-height: 20px;float: left;margin-left: 5px;">{{blog.createAt.substring(0,10)}}</div>
                    <div style="clear: both"></div>
                  </li>
                  <li style="float: right;">
                    <div class="read-article" style="margin-right: 10px" @click.stop="goDetail(blog.id)">阅读原文</div>
                  </li>
                  <div style="clear: both"></div>
                </ul>
              </div>
              <div style="clear: both"></div>
            </div>
          </div>
        </template>
        <!--分页-->
        <div class="page" v-if="blogs && blogs.length > 0">
          <div class="page_num">
            <button class="" @click="goLastPage(currentPage-1)"  :style="(currentPage-1)<1 ? 'cursor: not-allowed;' : ''">上一页</button>
            <ul>
              <template v-for="pageNum in 5" v-if="(5*(pageIndex-1)+pageNum) <= totalPage">
                <li :class="(5*(pageIndex-1)+pageNum) == currentPage ? 'active' : ''" @click="goPage(5*(pageIndex-1)+pageNum)">{{5*(pageIndex-1)+pageNum}}</li>
              </template>
            </ul>
            <button class="" @click="goNextPage(currentPage+1)" :style="(currentPage+1) > totalPage ? 'cursor: not-allowed;' : ''">下一页</button>
          </div>
          <p>共{{totalPage}}页</p >
          <div><b>到第</b><input type="text" placeholder="1" id="choosePageInput" v-model="skipPage" @keyup.enter="goPage(skipPage)"><b>页</b></div>
          <button @click ="goPage(skipPage)">确定</button>
        </div>
        <!--分页-->
      </div>
      <div class="rightBox layui-col-xs12 layui-col-md3" style="padding-left: 35px;margin-bottom:20px;">
        <div class="clickRankBox" v-if="viewBlogs && viewBlogs.length>0">
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
        <div class="recommendBox" v-if="goodBlogs && goodBlogs.length>0">
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
        blogs: [],
        goodBlogs:[],
        viewBlogs:[],
        categary:"",
        currentPage:1,//当前页
        pageIndex:1,//五页一组，第几个5页
        totalPage:1,//总页数
        skipPage:"",//跳转页
      }
    },
    watch: {
      $route: "checkRouter"
    },
    mounted: function () {
      var that = this;
      $(".blog-type").addClass("active");
      window.vue = this;
      that.init();
    },
    methods: {
      checkRouter(newVal, oldVa) {
        var that = this;
        if(oldVa.path !== newVal.path){
          that.init();
        }
      },
      init: function () {
        var that = this;
        $(".typeSelect").hide();
        that.categary = that.$route.params.categary;
        $("."+that.categary).addClass("active");
        that.getBlogs(1);
        that.getGoodBlogs();
        that.getViewBlogs();
      },
      //加载文章
      getBlogs:function (page) {
        var that = this;
        var data = {
          categary:that.categary,
          page:page
        }
        Web.post(Web.host + "/api/blog/getBlogs.do",data,function (res) {
          if(res.status){
            that.currentPage = res.data.pageable.pageNumber+1;
            that.totalPage = res.data.totalPages;
            that.blogs = res.data.content;
            that.$nextTick(function () {
              $("body,html").animate({
                scrollTop: 0
              });
              //加载文章滚动条动画
              that.scrollReveal.reveal('.blogBox', {
                duration: 1000,//动画的时长
                delay: 100,//延迟时间
                origin: 'top',//动画开始的位置，'bottom', 'left', 'top', 'right'
                reset: true,//回滚的时候是否再次触发动画
                mobile: true,//在移动端是否使用动画
                distance: '20px',//滚动的距离，单位可以用%，rem等
                opacity: 0.001,//其他可用的动画效果
                easing: 'linear',
                scale: 0.9,
              });
            })
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
      getSrc:function (imgSrc) {
        return Web.getSrc(imgSrc);
      },
      goPage:function(page){
        var that = this;
        if(page < 1){
          Web.showToast("最小第一页",2000);
          return
        }
        if(page > that.totalPage){
          Web.showToast("最大页数"+that.totalPage+"页");
          return
        }
        that.pageIndex = Math.ceil(page/5);
        that.getBlogs(page);
      },
      goLastPage:function (page) {
        var that = this;
        if(page < 1){
          return
        }
        if(page == 5*(that.pageIndex-1)){
          that.pageIndex--;
        }
        that.getBlogs(page);
      },
      goNextPage:function (page) {
        var that = this;
        if(page > that.totalPage){
          return
        }
        if(page == 5*that.pageIndex+1){
          that.pageIndex++;
        }
        that.getBlogs(page);
      },
    }
  }
</script>
