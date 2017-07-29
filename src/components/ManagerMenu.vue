<template>
  <ul class="menu vertical align-right">
      <li v-for="item in menus" v-on:click="onMenuItem(item)" v-bind:class="{active: item.isActive}">
          <a>{{item.title}}</a>
      </li>
</ul>
</template>

<script>
export default {
  name: 'manager-menu',
  mounted() {

  },
  data() {
    return {
      menus: [
          {
              title: '统计信息', isActive: true, name: 'statistics'
          },
          {
              title: '应用管理', isActive: false, name: 'apps'
          },
          {
              title: '评论管理', isActive: false, name: 'comments'
          },
          {
              title: '广告设置', isActive: false, name: 'ads'
          },
      ],
      active: 'active'
    };
  },
  methods: {
    onMenuItem(item) {
        for(let menu of this.menus){
            menu.isActive = (item.name == menu.name);
        }
        this.$emit("onMenuItemSelected", item)
    }
  },
};
</script>

<style lang="scss" scoped>
.cell{
    min-height: 600px;
    .menu{
    background-color: whitesmoke;
    li{
        &:hover{
            background-color: #333;
            color: red;
            }
        }
    }
}
</style>
