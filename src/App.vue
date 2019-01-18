<template>
  <div id="app">
    <div class="header">
      <label @click="goA(1)">1111</label>
      <label @click="goA()">22222</label>
      <label @click="goA()">3333</label>
    </div>
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
          var that = this;
          if(type == 1){
            that.$router.push("/")
          }else{
            that.$router.push("/BlogDetail")
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
