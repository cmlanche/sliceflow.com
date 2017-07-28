<template>
  <div class="row">
    <div class="grid-x grid-padding-x">
      <div class="cell medium-2 small-4">
        <manager-menu v-on:onMenuItemSelected="onMenuItemSelected"></manager-menu>
      </div>
      <div class="cell medium-8 small-8">
        <component :is="view"></component>
      </div>
    </div>
</div>
</template>

<script>
import ManagerMenu from './ManagerMenu';
import UserInfo from './UserInfo';
import Apps from './Apps'
import Ads from './Ads'
import Comments from './Comments'

export default {
  name: 'manager',
  components: {
    ManagerMenu,
    UserInfo,
  },
  mounted() {
  },
  data() {
    return {
      view: UserInfo,
    };
  },
  methods: {
    onMenuItemSelected(item){
      if("userinfo" == item.name){
        this.view  = UserInfo
      }else if("apps" == item.name){
        this.view = Apps
      }else if("ads" == item.name){
        this.view = Ads
      }else if("comments" == item.name){
        this.view = Comments
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
