<template>
  <div>
    <h1>推荐页面</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        recommend: []
      }
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommend = res.data.slider
            console.log(this.recommend)
          }
        })
      }
    },
    created () {
      this._getRecommend()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
