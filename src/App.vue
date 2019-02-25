<template>
  <div id="app" v-cloak>
    <ul class="header">
      <li class="top-menu index" @click="goA(1)" style="width: 32px;">首页</li>
      <li class="top-menu blog-type" @click="goA(2)">博客分类

      </li>
      <li class="top-menu resource-share" @click="goA(3)">资源分享</li>
      <li class="top-menu web-introduce" @click="goA(4)">网站介绍</li>
      <li class="top-menu about-me" @click="goA(5)">关于我</li>
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
      }
    },
    mounted:function(){
      console.log(Web.host)
    },
    methods: {
        goA:function (type) {
          var node = event.currentTarget;
          $(".header .active").removeClass("active");
          $(node).addClass("active");
          var that = this;
          if(type == 1){
            that.$router.push("/")
          }else if(type == 2){
            that.$router.push("/BlogDetail")
          }else if(type == 3){
            that.$router.push("/ResourceShare")
          }else if(type == 4){
            that.$router.push("/WebIntroduce")
          }else if(type == 5){
            that.$router.push("/AboutMe")
          }
        }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
  z-index:99;
}
</style>
