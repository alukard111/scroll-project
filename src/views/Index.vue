<template lang="pug">
	.index.hidden(ref='index')
		.index__background-img-wrapper
			KinesisElement.img-wrapper(tag='div' :strength='20')
				img.index__background-img( ref='parallaxItemBottle' :src='backgroundImgs.bottle')
				img.index__background-img( :src='backgroundImgs.washer')
		.index__cover
		.index__inner
			.index__title
				.index__title-wrapper
					.index__title-slogan-wrapper
						.index__title-slogan
							h1 поддержи
					.index__title-slogan-wrapper
						.index__title-slogan
							h1 сборную
					.index__title-slogan-wrapper
						.index__title-slogan
							h1 вместе
			span.index__subtitle
				| Все самое важное, <br>
				|	что нужно знать
			span.index__desc
				| Национальная команда, представляющая Россию на международных турнирах по хоккею с шайбой.
				| Управляется Федерацией хоккея России. Впервые была собрана в 1992 году, получив право выступать
				| в группе сильнейших на чемпионате мира как правопреемница сборной СССР.
			.index__scroll
</template>

<script>
import { animationMixin } from '@/mixins/animationMixin.js'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
	mixins: [animationMixin],
	components: {
		KinesisContainer,
		KinesisElement
	},

	data: () => ({
		indexElem: null,
		backgroundImgs: {
			bottle: require('@/assets/imgs/background/bottle.png'),
			washer: require('@/assets/imgs/background/washer.png'),
		},
	}),

	mounted() {
		this.heightMin()
		setTimeout(() => {
			this.toggleClassForAnimation('.index', 'hidden')
		}, 150)
	},

	methods: {
    heightMin() {
      if (this.$store.state.common.mobile || document.documentElement.offsetWidth < 661) {
        document.querySelector('.index').style.minHeight = `${document.documentElement.clientHeight}rem`
      }
    },


		
  }
}
</script>

