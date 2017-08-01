import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/Home';
import Manager from '@/components/Manager';
import UserInfo from '@/components/UserInfo';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: Home },
    { name: 'accordion', path: '/manager', component: Manager },
    { name: 'userinfo', path: '/userinfo', component: UserInfo },
  ],
});
