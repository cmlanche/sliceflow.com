<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <user-info></user-info>
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
            <a class="button small menu-button" data-toggle="offCanvas" v-on:click="onLogin">登陆</a></li>            
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

export default {
  name: 'app',
  mounted() {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
  },
  components:{
    UserInfo
  },
  methods: {
    onLogin(){
      console.log("onlogin")
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
</style>
