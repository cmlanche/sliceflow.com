<template>
<div class="card">
    <img src="../assets/img/head.jpg">
    <div class="card-section">
        <h3>cmlanche</h3>
        <p><a href="http://www.cmlanche.com">http://www.cmlanche.com</a></p>
    </div>
</div>
</template>

<script>
export default {
  name: 'user-info',
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

$card-width: 300px;

.card{
  width: $card-width;
  .card-divider{
    font-size: 24px;
    font-weight: bold;
  }

  img{
      width: $card-width;
      height: $card-width;
  }

  h3{
      font-weight: bold;
  }
}
</style>
