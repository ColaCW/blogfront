<template>
  <div id="app" v-cloak>
    <ul class="header">
      <li class="top-menu index" @click="goA(1)" @mouseover="show('none')">网站首页</li>
      <li class="top-menu blog-type" style="position: relative">博客分类
        <ul class="typeSelect" ref="typeSelect" @mouseleave="show('none')" @mouseover="show('block')">
          <template v-for="categary in categarys">
            <li @click="goA(2,categary.name)" :class="categary.name">{{categary.name}}</li>
          </template>
        </ul>
      </li>
      <li class="top-menu resource-share" @click="goA(3)" @mouseover="show('none')">资源分享</li>
      <li class="top-menu web-introduce" @click="goA(4)" @mouseover="show('none')">网站介绍</li>
      <li class="top-menu about-me" @click="goA(5)" @mouseover="show('none')">关于我</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Web } from "../static/js/web.js";
  export default {
    name: 'App',
    data () {
      return {
        categarys:[],
      }
    },
    mounted:function(){
      var that = this;
      that.init();
    },
    methods: {
      init:function(){
        var that = this;
        that.getBlogCategorys();
      },
      getBlogCategorys:function(){
        var that = this;
        Web.post(Web.host + "/api/blog/getBlogCategorys.do",null,function (res) {
          if(res.status){
            that.categarys = res.data;
          }
        })
      },
      goA: function (type,name) {
        var node = event.currentTarget;
        $(".header .active").removeClass("active");
        $(node).addClass("active");
        var that = this;
        if (type == 1) {
          that.$router.push("/")
        } else if (type == 2) {
          that.$refs.typeSelect.style.display = "none";
          that.$router.push({name: 'BlogList', params: {categary: name}});
        } else if (type == 3) {
          that.$router.push("/ResourceShare")
        } else if (type == 4) {
          that.$router.push("/WebIntroduce")
        } else if (type == 5) {
          that.$router.push("/AboutMe")
        }
      },
      show: function (type) {
        var that = this;
        if(type == 'none'){
          that.$refs.typeSelect.style.display = "none"
        }else if(type == 'block'){
          that.$refs.typeSelect.style.display = "block"
        }
      }
    }
  }
</script>
