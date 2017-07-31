<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <user-info is-login="isLogin"></user-info>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="menu">
            <li class="logo">
              <router-link to="/">Sliceflow.com</router-link>
            </li>
            <li>
              <router-link to="/">主页</router-link>
            <li>
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
    </div>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo'
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
          if(res){
            console.log(res.data);
            if(res.data.code == 0){
              console.log("login success");
              config.getUser().isLogin = true;
              config.getUser().user = res.data.user;
              config.getUser().website = res.data.website;
              console.log(config.getUser());
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
      isLogin: false
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
    padding: 0.75rem 0;
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
</style>
