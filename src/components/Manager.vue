<template>
  <div class="row">
    <div class="grid-x grid-padding-x">
      <div class="cell medium-2 small-4 large-2">
        <manager-menu v-on:onMenuItemSelected="onMenuItemSelected"></manager-menu>
      </div>
      <div class="cell medium-10 small-8 large-10">
        <component :is="view" v-on:handler="onHandler"></component>
      </div>
    </div>
</div>
</template>

<script>
import ManagerMenu from './ManagerMenu';
import Apps from './Apps'
import Ads from './Ads'
import Comments from './Comments'
import AddApp from './AddApp'
import Statistics from './Statistics'

export default {
  name: 'manager',
  components: {
    ManagerMenu,
  },
  mounted() {
  },
  data() {
    return {
      view: Statistics,
    };
  },
  methods: {
    onMenuItemSelected(item){
      if("statistics" == item.name){
        this.view  = Statistics
      }else if("apps" == item.name){
        this.view = Apps
      }else if("ads" == item.name){
        this.view = Ads
      }else if("comments" == item.name){
        this.view = Comments
      }
    },
    onHandler(tag, data){
      console.log(tag);
      if("addapp" == tag){
        // 添加新引用
        this.view = AddApp
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
