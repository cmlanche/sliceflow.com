<template>
<div class="row">
  <div class="callout">
    <p>网站数：<em>{{wsize}}</em></p>
    <p>总文章数：<em>{{psize}}</em></p>
    <p>总评论数：<em>{{csize}}</em></p>
  </div>
</div>
</template>

<script>
// 统计信息
export default {
  name: 'statistics',
  mounted(){
    this.$http.post("/stat/general", {'wement-token': localStorage.getItem('wm-token')}).then(res=>{
      console.log(res)
      if(res){
        if(res.data.code == 0){
          this.wsize = res.data.wsize;
          this.psize = res.data.psize;
          this.csize = res.data.csize;
        }
      }
    });
  },
  data(){
    return {
      wsize: 0,
      psize: 0,
      csize: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
  .row{
    .callout{
      em{
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
</style>
