<template lang='pug'>
  .product.hidden
    .product__cover
    .btn__prev-page-wrapper
      button.btn__prev-page(@click='prevPageAndAnimation()') Назад
    KinesisElement.product__background-img-wrapper(tag='div' :strength='20')
      img.product__background-img(:src='backgroundImg.players')
      img.product__background-img(:src='backgroundImg.bottle')
    .product__main
      .product__main-slogan-wrapper
        .product__main-slogan
          h1.product__main-slogan-text поддержи
      .product__main-slogan-wrapper
        .product__main-slogan
          h1.product__main-slogan-text сборную
      .product__main-slogan-wrapper
        .product__main-slogan
          h1.product__main-slogan-text вместе
      .product__main-slogan-wrapper
        .product__main-slogan
          h1.product__main-slogan-text с балтикой
          
</template>


<script>
import { animationMixin } from '@/mixins/animationMixin.js'
import { prevPageMixin } from '@/mixins/prevPageMixin'
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
  data: () => ({
    backgroundImg: {
      players: require('@/assets/imgs/background/players.png'),
      bottle: require('@/assets/imgs/background/bottle.png'),
    },
  }),

  mounted() {
    setTimeout(() => {
      this.toggleClassForAnimation('.product', 'hidden')
    }, 150)
  },

  methods: {
    prevPageAndAnimation() {
      this.toggleClassForAnimation('.product', 'hidden')
      setTimeout(() => {
        this.prevPage(this.$router.options.routes[this.$route.meta.key - 1].path)
      }, 500)
    }
  }
}
</script>