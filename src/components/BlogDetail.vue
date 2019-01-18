<template>
  <div id="app">
    详情
  </div>
</template>
<script>
  import { Web } from "../../static/js/web.js";
  export default {
    data () {
      return {
        blogs:[{"name":11111},{"name":22222},{"name":33333},{"name":44444},{"name":55555},{"name":66666},{"name":77777},{"name":88888},{"name":9999},{"name":10000}]
      }
    },
    mounted:function(){
      console.log(Web.host)
    },
    methods: {

    }
  }
</script>
