<template>
<form data-abide novalidate>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用URL
                <input id="url" type="text" pattern="url" required placeholder="请输入您的网站地址">
                <span class="form-error" style="display: none;">网址格式不对</span>
            </label>
        </div>
    </div>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用名称
                <input id="name" type="text" placeholder="请输入您的网站名称">
                <span class="form-error" style="display: none;">网站名称不能为空</span>                
            </label>
        </div>
    </div>
    <div class="row">
        <button type="submit" class="primary button" v-on:click="addWebsite">提交</button>
    </div>
</form>
</template>

<script>
import * as g from '../gobal'

export default {
  name: 'AddApp',
  data(){
      return {
          urlerror: '',
      }
  },
  methods: {
      addWebsite(){
          let name = $('#name').val();
          let url = $('#url').val();
          if("" == name || "" == url){
              return;
          }
          this.$http.post("/website/add", {
                url: url, name: name, 'wement-token': localStorage.getItem('wm-token')
            }).then(res=>{
                if(res){
                    if(res.data.code == 0){
                        // 添加网站成功
                        this.$emit("handler", "addwebsite_success");
                    } else if(res.data.code == -1){
                        g.requestAuth(this.$http);
                    }
                }
            })
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
