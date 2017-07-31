<template>
<div class="card">
    <img src="../assets/img/head.jpg">
    <div class="card-section">
        <h3><img src="../assets/img/platforms/github.png" class="platform_logo">cmlanche</h3>
        <p><a href="http://www.cmlanche.com" target="_blank">http://www.cmlanche.com</a></p>
        <p><button type="button" class="primary button">切换用户</button></p>
    </div>
</div>
</template>

<script>
export default {
  name: 'user-info',
  mounted() {
  },
  props: ['isLogin'],
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
