<template>
  <div id="app">
    <header-component></header-component>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderComponent from 'components/Header/Header'
  import Tab from 'components/Tab/Tab'

  export default {
    components: {
      HeaderComponent,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
