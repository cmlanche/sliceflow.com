<template>
<form v-on:submit.prevent="onSubmit" data-abide novalidate>
    <div class="row">
        <div class="medium-6 columns">
            <label> 网站Logo
                <input id="file" type="file" name="file" accept="image/x-png,image/gif,image/jpeg">
            </label>
        </div>
    </div>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用URL
                <input id="url" type="text" name="url" pattern="url" required placeholder="请输入您的网站地址">
                <span class="form-error" style="display: none;">网址格式不对</span>
            </label>
        </div>
    </div>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用名称
                <input id="name" name="name" type="text" placeholder="请输入您的网站名称">
                <span class="form-error" style="display: none;">网站名称不能为空</span>                
            </label>
        </div>
    </div>
    <div class="row">
        <button type="submit" class="primary button">提交</button>
    </div>
    <div class="reveal" id="alertDialog" data-reveal data-close-on-click="true">
        <h5><strong>提示</strong></h5>
        <p class='lead'>{{errortip}}</p>
        <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</form>
</template>

<script>
import * as g from '../gobal'

export default {
  name: 'AddApp',
  mounted(){
    this.reveal = new Foundation.Reveal($('#alertDialog'), {
      // These options can be declarative using the data attributes
    });
  },
  data(){
      return {
          urlerror: '',
          errortip: '',
      }
  },
  components: {
  },
  methods: {
      onSubmit(){
          console.log("add website----start")
          let name = $('#name').val();
          let url = $('#url').val();
          let files = $('#file').prop("files");
          if("" == name || "" == url){
              console.log("name or url is empty, fill all of them");
              return;
          }
          if(files.length == 0){
              console.log("file size is 0, you should select 1 file from local");
              return;
          }
          let formdata = new FormData();
          formdata.append("wement-token", localStorage.getItem('wm-token'));
          formdata.append("file", files[0]);
          formdata.append("url", url);
          formdata.append("name", name);
          this.$http.post("/website/add", formdata, {
              method: 'post',
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              transformRequest: [function (data) {
                return data
              }],
              onUploadProgress: function(e) {
                let percentage = Math.round((e.loaded * 100) / e.total) || 0
                console.log(e, percentage)
              }
          }).then(res=>{
              console.log("addwebsite response = " + res)
                if(res){
                    if(res.data.code == 0){
                        // 添加网站成功
                        this.$emit("handler", "addwebsite_success");
                    } else if(res.data.code == -1){
                        g.requestAuth(this.$http);
                    } else {
                        this.errortip = res.data.message;
                        this.reveal.open();
                    }
                }
          }).catch(function (error) {
            console.log(error)
          });
      },
  }
}
</script>

<style lang="scss" scoped>

</style>
