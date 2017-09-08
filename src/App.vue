<template>
  <div id="app">
    <header-component></header-component>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderComponent from 'components/Header/Header'
  import Tab from 'components/Tab/Tab'
  import Player from 'components/player/player'

  export default {
    components: {
      HeaderComponent,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
