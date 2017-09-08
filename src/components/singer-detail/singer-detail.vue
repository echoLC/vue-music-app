<template>
  <transition name="slide">
    <singer-detail-list></singer-detail-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SingerDetailList from 'components/singer-detail-list/singer-detail-list'
//  import {getSingerDetail} from 'api/singer'
//  import {ERR_OK} from 'api/config'
//  import {createSong} from 'common/js/song'
//  import {mapGetters} from 'vuex'

  export default {
    computed: {

    },
    data() {
      return {}
    },
    created() {

    },
    methods: {
    },
    components: {
      SingerDetailList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .singer-detail
    z-index: 100
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background $color-background
</style>
