<template>
  <div>
    <h1>排名页面</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTopList} from 'api/rank'

  export default {
    methods: {
      _getRankList() {
        getTopList().then((res) => {
          console.log(res)
        })
      }
    },
    created() {
      this._getRankList()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
