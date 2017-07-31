<template>
<div class="row">
  <table class="hover">
    <thead>
      <th width="50%">评论</th>
      <th width="20%">文章</th>
      <th width="20%">创建时间</th>
      <th width="10%">操作</th>
    </thead>
    <tbody>
      <tr v-for="c in comments">
        <td>{{c.content}}</td>
        <td><a :href="c.url" target="_blank">{{c.title}}</a></td>
        <td>{{c.createdtime}}</td>
        <td>
          <a v-on:click="deleteComment(c, $event)">删除</a>         
        </td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="button primary" v-on:click="loadMore">点击加载</button>
</div>
</template>

<script>
import * as g from '../gobal'

export default {
  name: 'comments',
  mounted(){
    this.requestPage(0);
  },
  data(){
    return {
      comments: [],
      pageSize: 0,
      pageIndex: 0,
      itemCount: 20,
      amount: 0
    }
  },
  methods: {
    deleteComment(comment, event){
      console.log("deletecomment = " + comment.id);
      this.$http.post("/comment/delete", 
        {id: comment.id, 'wement-token': localStorage.getItem('wm-token')}).then(res=>{
        if(res){
          if(res.data.code == 0){
            let domCmt = event.target.parentNode.parentNode; 
            console.log(domCmt)
            domCmt.parentNode.removeChild(domCmt);
          } else if(res.data.code == -1){
            g.requestAuth(this.$http);
          } else{
            console.log(res.data.message);
          }
        }
      });
    },
    requestPage(pageindex){
      this.$http.post("/comments/all", {
        'wement-token': localStorage.getItem('wm-token'),
        'pageindex': pageindex,
        'pagecount': this.itemCount,
        }).then(res=>{
        if(res){
          console.log(res.data);
          if(res.data.code == 0){
            for(let c of res.data.comments){
              this.comments.push(c);
            }
            this.amount = res.data.count;
          }else if(res.data.code == -1){
            g.requestAuth(this.$http);
          } else {
            console.log(res.data.message);
          }
        }
      });
    },
    loadMore(){
      this.pageIndex++;
      this.requestPage(this.pageIndex);
    }
  }
}
</script>

<style lang="scss" scoped>
  table{
    td{
      font-size: 12px;
      font-weight: bold;
    }
  }
</style>

