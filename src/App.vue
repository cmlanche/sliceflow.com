<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <user-info v-bind:userdata="userData"></user-info>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="menu">
            <li class="logo">
              <router-link to="/">Wement</router-link>
            </li>
            <li>
              <router-link to="/">主页</router-link>
            <li>
            <li><router-link to="/">主题</router-link></li>
            <li><router-link to="/">文档</router-link></li>
            <li>
              <router-link to="/manager">管理中心</router-link>
            </li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li v-if="isLogin">
              <a data-toggle="offCanvas" class="headimage-link"><img src="./assets/img/head.jpg" class="headimage"></a>
            </li>
            <li v-else>
              <a class="button small menu-button" v-on:click="onLogin">登陆</a></li>            
            </li>
          </ul>
        </div>
      </div>

      <div class="content-wrapper">
        <router-view></router-view>
      </div>

      <footer>
        <div class="grid-x">
          <div class="cell">@2017 Wement</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo'
import Themes from './components/Themes'
import * as config from './config'
import * as g from './gobal'

export default {
  name: 'app',
  mounted() {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
    this.token = g.getQueryString("wm-token")
    if(undefined != this.token && null != this.token){
      localStorage.setItem("wm-token", this.token)
    }else{
      this.token = localStorage.getItem("wm-token")
    }
    if(undefined != this.token && null != this.token){
      this.$http.post('/wementinfo', 
        {"appid": config.getAppId(), 
        "domain": document.location.host,
        "wement-token": this.token
        }).then(res=>{
          console.log(res);
          if(res){
            console.log(res.data);
            if(res.data.code == 0){
              console.log("login success");
              config.getUser().isLogin = true;
              config.getUser().user = res.data.user;
              config.getUser().website = res.data.website;
              console.log(config.getUser());
              this.userData = config.getUser();
              this.isLogin = true;
              this.initLogin();
            }else if(res.data.code == -1){
              // unauth
              this.isLogin = false;
              this.requestAuth();
            }else{
              this.isLogin = false;
              console.log("login failed, the reason is " + res.data.message);
            }
          }
        })
    }
  },
  components:{
    UserInfo
  },
  data(){
    return {
      isLogin: false,
      userData: config.getUser(),
    }
  },
  methods: {
    onLogin(){
      if(config.getUser().isLogin){
        // 已登录
      }else{
        // 未登录，先登录
        this.requestAuth();
      }
    },
    initLogin(){
      
    },
    requestAuth(){
      g.requestAuth(this.$http);
    },
    notifyLogined(){
      
    }
  }
};
</script>



<style lang="scss">  
  @import './styles/global';

  $footer-height: 36px;
  
  // Chrome Reset 
  a:focus {
    outline: none;
  }

  .logo, .logo a {
    color: $white;
    font-weight: bold;
    font-size: 18px;
  }

  li a.menu-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
  }

  .content-wrapper {
    padding: 0 0;
    padding-bottom: $footer-height;
    background-color: white;
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      font-weight: 600;
      color: $primary-color;
    }
  }

  .off-canvas-content{
    .top-bar-right{
      .menu{
        .headimage-link{
          padding: 0 8px 0 0;
          .headimage{
            width: 36px;
            height: 36px;
            border-radius: 18px;
          }
        }
      }
    }
  }

  #app{
    min-height: 100%;
  }

  footer{
    position:absolute;
    bottom:0;
    width:100%;
    height: $footer-height;
    background-color: #34495e;
    color: white;

    .cell{
      padding: 6px 16px;
      font-size: 14px;
    }
  }

  html{height:100%;}
  body{min-height:100%;margin:0;padding:0;position:relative;}
</style>
