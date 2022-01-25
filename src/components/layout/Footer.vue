<template lang="pug">
	footer.footer
		.footer__inner
			.footer__items
				a(@click='sendData("logo_xokkej_rossii")' href="https://fhr.ru/" target="_blank")
					img.footer__logo-item(alt='' :src='imgs.logoBaltika')
				span.footer__scroll-btn(@click='nextPage')
					| Скролль
				img.footer__logo-item.footer__logo-item_logo-alc-zero(alt='logoAlcZero' :src='imgs.logoAlcZero' )
</template>


<script> 
export default {
	props: {
		indexPage: {
			type: Number,
			require: true,
			default: 0
		} 
	},

	data: () => ({
		stateDelayScroll: false,
		routesLength: null,

		imgs: {
			logoBaltika: '/icon/logoBaltika.svg',
			logoAlcZero: '/icon/logoAlcZero.png'
		}
	}),


	mounted() {
		this.routesLength = this.$router.options.routes.length - 1
	},


	methods: {
		scroll(event) {
			if (event.deltaY > 0) {
				this.nextPage()
			} else {
				this.prevPage()
			}
		},

		nextPage() {
			if (!this.stateDelayScroll && this.indexPage < this.routesLength) {
				this.$router.push({path: `${this.$router.options.routes[this.indexPage + 1].path}`})
				this.delayScroll() 
			}
		},

		prevPage() {
			if (!this.stateDelayScroll && this.indexPage <= this.routesLength && this.indexPage !== 1) {
				this.$router.push({path: `${this.$router.options.routes[this.indexPage + 1].path}`})
				this.delayScroll() 
			}
		},

		delayScroll() {
			this.stateDelayScroll = true
			setTimeout(() => { 
					this.stateDelayScroll = false 
			}, 2500)
		},

		sendData(payload) {
      this.$root.sendGA('external', "click", payload)
    },
	}
}
</script>