<template>
<div class="row">
    <button type="button" class="primary button" v-on:click="addApp">新增</button>
    <table>
        <thead>
            <th>AppId</th>
            <th>URL</th>
            <th>创建时间</th>
        </thead>
        <tbody>
            <tr v-for="w in websites">
                <td>{{w.id}}</td>
                <td>{{w.url}}</td>
                <td>{{w.createdtime}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import * as g from '../gobal'

export default {
    name: 'apps',
    mounted(){
        console.log("apps mounted");
        this.$http.post("/websites/me", {'wement-token': localStorage.getItem('wm-token')}).then(res=>{
            if(res){
                if(res.data.code == 0){
                    console.log("fetch my websites success");
                    console.log(res.data);
                    this.websites = res.data.websites;
                } else if(res.data.code == -1){
                    g.requestAuth(this.$http);
                } else {
                    console.log(res.dark.message);
                }
            }
        })
    },
    methods: {
        addApp() {
            this.$emit("handler", "addapp")
        }
    },
    data(){
        return {
            websites: [],
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

