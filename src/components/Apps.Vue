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
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'apps',
    methods: {
        addApp() {
            this.$emit("handler", "addapp")
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

