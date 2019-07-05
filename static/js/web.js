function getHost() {
  var s = location.href;
  var i = s.indexOf('/', 10);
  if (i != -1) {
    s = s.substring(0, i);
  }
  return s;
}

var Web = {

  // host: "http://127.0.0.1:8088",
  host: "http://www.lgqoxb.top:8088",
  img_host:"http://lgqoxb.top",

  get: function (url, data, success) {
    var data2 = "";
    if (data) {
      for (var key in data) {
        data2 += "&" + key + "=" + encodeURIComponent(data[key]);
      }
    }
    jQuery.ajax({
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      url: url,
      xhrFields: {
        withCredentials: true
      },
      data: data2,
      dataType: "json",
      success: success
    });
  },

  post: function (url, data, success) {
    jQuery.ajax({
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      url: url,
      xhrFields: {
        withCredentials: true
      },
      data: JSON.stringify(data),
      dataType: "json",
      success: success
    });
  },

  go: function (url) {
    location.href = url;
  },

  setValue:function(key, value){
    store.set(key, value);
  },

  getValue:function (key) {
    return store.get(key);
  },

  login: function (phone, password, callback) {
    var data = {
      phone: phone,
      password: password
    }
    Web.post(Web.host + "/api/web/login.do", data, function (res) {
      callback(res);
      if(res.status){
        Web.saveUser(res.data);
      }
    })
  },

  logout: function (goPage) {
    if(typeof(goPage)=='undefined' || !goPage){
      goPage = Web.host;
    }
    var user=Web.getUser();
    if(user && user.token){
      Web.post(Web.host + "/api/web/logout.do", {token:user.token}, function (res) {
        if(res.status){
          Web.saveUser(null);
          Web.go(goPage);
        }
      });
    }else{
      Web.saveUser(null);
      Web.go(goPage)
    }
  },

  getParam: function (url, name, defaultValue) {
    if (typeof (url) == 'undefined' || !url) {
      url = window.location.search.substr(1);
    }
    var i = url.indexOf('#');
    if (i != -1) {
      url = url.substring(0, i);
    }
    i = url.indexOf('?');
    if (i != -1) {
      url = url.substring(i + 1);
    }
    url = '&' + url + '&';
    var key = '&' + name + '=';
    var i = url.indexOf(key);
    if (i != -1) {
      var j = url.indexOf('&', i + key.length);
      if (j != -1) {
        return url.substring(i + key.length, j);
      }
    }
    return defaultValue;
  },

  getUser: function () {
    var user = this.getValue("user");
    return user;
  },

  saveUser: function (user) {
    this.setValue("user", user);
  },

  getToken:function(){
    var user = this.getValue("user");
    // return user && user.token;
    return "S5zadQHNC4";
  },

  getSrc:function(s){
    if(s && s.indexOf("http")==-1){
      s = this.img_host+"/"+s;
    }else{
      s='/f/_.gif';
    }
    return s;
  },

  removeObj:function(obj,list){
    var index = -1;
    if(list && list.length != 0){
      for(var i = 0;i<list.length;i++){
        if(Web.equalObj(obj,list[i])){
          index = i;
          break;
        }
      }
      if(index != -1){
        list.splice(index,1);
      }
      return list;
    }
    return null;
  },

  equalObj:function(obj1,obj2){
    if(obj1 && obj2){
      if(JSON.stringify(obj1) == JSON.stringify(obj2)){
        return true;
      }
    }
    return false;
  },

  showToast:function(message, show_icon, duration, callback){
    var o=$(".toast")[0];
    if(!o){
      $(document.body).append('<div class="toast"><p></p></div>');
    }
    $(".toast p").html(message);
    if(typeof(show_icon)!='undefined' && show_icon){
      $(".toast div").show();
    }else{
      $(".toast div").hide();
    }
    $(".toast").show();
    if(typeof(duration)=='undefined'){
      duration=2;
    }
    if(duration<1000){
      duration=duration*1000;
    }
    if(typeof(callback)=='function'){
      $(".toast").fadeOut(duration,callback);
    }else{
      $(".toast").fadeOut(duration);
    }
  },
};

export {Web}


