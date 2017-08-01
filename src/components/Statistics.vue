<template>
<div class="row">
  <div class="callout">
    <p>网站数：<em>{{website_count}}</em></p>
    <p>今日评论数：<em>{{comments_today}}</em></p>
    <p>7日内评论数：<em>{{comments_7days}}</em></p>
    <p>总评论数：<em>{{comments_all}}</em></p>
  </div>
</div>
</template>

<script>
// 统计信息
export default {
  name: 'statistics',
  data(){
    return {
      website_count: 0,
      comments_today: 0,
      comments_7days: 0,
      comments_all: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
