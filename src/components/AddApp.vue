<template>
<form>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用名称
                <input type="text" placeholder="请输入您的网站名称">
            </label>
        </div>
    </div>
    <div class="row">
        <div class="medium-6 columns">
            <label>应用URL
                <input type="text" placeholder="请输入您的网站地址">
            </label>
        </div>
    </div>
    <div class="row">
        <button type="button" class="primary button">提交</button>
    </div>
</form>
</template>

<script>
export default {
  name: 'AddApp',
}
</script>

<style lang="scss" scoped>

</style>
