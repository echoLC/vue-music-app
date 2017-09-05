<template>
  <div id="app">
    <header-component></header-component>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderComponent from 'components/Header/Header'
  export default {
    components: {
      HeaderComponent
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  #app
    color: $color-theme
</style>
