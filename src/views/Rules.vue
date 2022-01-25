<template lang="pug">
  .rules.hidden
    .rules__cover
    .rules__marquee
    .btn__prev-page-wrapper
        button.btn__prev-page(@click='prevPageAndAnimation') Назад
    .rules__main(ref="scene")
      .rules__main-inner
        .rules__main-title
          h2.rules__main-title-text Зарядим сборную на победу вместе!
        KinesisElement.rules__main-challenge
          .rules__main-challenge-inner
            .rules__main-challenge-desc(v-for="challenge in getChallenge" :key="challenge.keyChallenge" )
              //- img.rules__main-challenge-desc-img(:src="challenge.src" alt='photo-phone'  )
           
              img.rules__main-challenge-desc-img( :src="challenge.src")
              span.rules__main-challenge-desc-text(v-html="challenge.desc")
        .rules__main-challenge-info
          a.rules__main-challenge-info-link Полные правила участия в конкурсе
</template>


<script>
import { animationMixin } from '@/mixins/animationMixin.js'
import { prevPageMixin } from '@/mixins/prevPageMixin.js'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  mixins: [
    animationMixin,
    prevPageMixin
  ],
  components: {
		KinesisContainer,
		KinesisElement
	},
  data: () => ({ }),

  mounted() {
    setTimeout(() => {
      this.toggleClassForAnimation('.rules', 'hidden')
    }, 150)
  },

  computed: {
    getChallenge() {
      return this.$store.getters['getChallenge']
    }
  },
  methods: {
    prevPageAndAnimation() {
      this.toggleClassForAnimation('.rules', 'hidden')
      setTimeout(() => {
        this.prevPage(this.$router.options.routes[this.$route.meta.key - 1].path)
      }, 500)
    },
  }

 
}
</script>