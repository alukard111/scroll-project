<template lang='pug'>
  .video.hidden
    .video__cover
    .video__marquee
    .btn__prev-page-wrapper
      button.btn__prev-page(@click='prevPageAndAnimation') Назад
    .video__main
      .video__main-inner
        .video__main-video-wrapper
          video.video__main-video(poster='/video/poster.png')    
</template>


<script>
import { animationMixin } from '@/mixins/animationMixin.js'
import { prevPageMixin } from '@/mixins/prevPageMixin'
export default {
  mixins: [
    animationMixin,
    prevPageMixin
  ],
  mounted() {
    setTimeout(() => {
      this.toggleClassForAnimation('.video', 'hidden')
    }, 150)
  },
  methods: {
    prevPageAndAnimation() {
      this.toggleClassForAnimation('.video', 'hidden')
      setTimeout(() => {
        this.prevPage(this.$router.options.routes[this.$route.meta.key - 1].path)
      }, 500)
    }
  }
  
}
</script>