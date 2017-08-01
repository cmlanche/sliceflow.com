<template>
<div class="card" v-if="userdata.isLogin">
    <img :src="userdata.user.headimage">
    <div class="card-section">
        <h3><img src="../assets/img/platforms/github.png" class="platform_logo">{{userdata.user.nickname}}</h3>
        <p><a href="http://www.cmlanche.com" target="_blank">{{userdata.user.homepage}}</a></p>
        <p><button type="button" class="primary button">注销</button></p>
    </div>
</div>
</template>

<script>
import * as config from '../config'

export default {
  name: 'user-info',
  mounted() {
      console.log("user info")
  },
  props: ['userdata'],
};
</script>

<style lang="scss" scoped>

.card{
    margin: 8px;
  .card-divider{
    font-size: 24px;
    font-weight: bold;
  }

  h3{
      font-weight: bold;
  }

  .card-section{
      .platform_logo{
          width: 32px;
          height: 32px;
          margin-right: 8px;
          border: #aaa solid 1px;
          border-radius: 5px;
      }
  }
}
</style>
