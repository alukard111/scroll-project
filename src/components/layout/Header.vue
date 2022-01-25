<template lang="pug">
	header.header
		Menu
		.header__wrapper
			.header__logo-wrapper
				a(href="https://www.championat.com/" target="_blank" @click="sendData('logo_chempionat', 'external')") 
					img.header__logo.header__logo_chempionat( alt="logoChempionat" :src="imgs.logoChempionat" :class="{ 'header__logo_index' : !(this.$router.meta === 0) }")
				.header__menu-burger(@click="showMenu()")
					.bar1
					.bar2
					.bar3
				span.header__share
					Share(v-if="showShare" @share="hiddenShare($event)" :services="services" :title="title" :description="description")
					img.header__logo(@click="toggleShowShare" v-if="shareState" alt="share" :src="imgs.logoShare" :class="{ 'header__logo_share' : !(this.$router.meta === 0)}")
					a(v-if="!shareState" @click="sendData('logo_xokkej_rossii', 'external')" href="https://fhr.ru/" target="_blank")
						img.header__logo.header__logo_baltika(alt="logoBaltika" :src="imgs.logoBaltika")
						
</template>


<script>
import Menu from '@/components/Menu.vue'
import Share from '@/components/Share.vue'

export default {
	components: {
		Menu,
		Share
	},
	data: () =>  ({
		pageIndex: false, 
		imgs: {
			logoChempionat: '/icon/logoChempionat.svg',
			logoShare: '/icon/logoShare.svg',
			logoBaltika: '/icon/logoBaltika.svg',
		},
		
		showShare: false,
		title: 'Брать от жизни все или плыть по течению?',
		description: 'Пройди этот тест и узнай, в чем твой фокус',
		services: [
			'facebook',
			'twitter',
			'vkontakte',
			'telegram'
		],

		burgerElem: null,
		mainInnerElem: null,
		menuElem: null,
		shareState: true,
	}),

	mounted() {
		this.mainInnerElem = document.querySelector('.main__inner')
		this.burger = document.querySelector('.header__menu-burger')
		this.menuElem = document.querySelector('.menu__inner')

		this.hangUpEventResize(this.mobileSize)
		this.mobileSize()

	},


	destroyed() {
		this.removeEventResize(this.desktopSize)	
		this.removeEventResize(this.mobileSize)
	},


	methods: {
		showMenu() {
			this.burger.classList.toggle('header__menu-burger_active')
			this.mainInnerElem.classList.toggle('main__inner_active')
			if (document.body.offsetWidth < 661 && !this.burger.classList.contains('header__menu-burger_active')) {
				this.gaMobileBurger()
			}
		},
		
		gaMobileBurger() {
			this.sendData('burger_menyu', 'internal')
		},

		mobileSize() {
			if (document.body.offsetWidth < 661) {
				this.shareState = false
			
				this.removeEventResize(this.mobileSize)
				this.hangUpEventResize(this.desktopSize)
			}
		},

		desktopSize() {
			if (document.body.offsetWidth > 660) {
				this.shareState = true
			
				this.removeEventResize(this.desktopSize)
				this.hangUpEventResize(this.mobileSize)
			}
		},

		hangUpEventResize(sizeEvent) {
			window.addEventListener('resize', sizeEvent)
		},

		removeEventResize(sizeEvent) {
			window.removeEventListener('resize', sizeEvent)
		},

		hiddenShare(event) {
			this.sendData(`share_${event}`, 'external')
			this.showShare = false
		},

		toggleShowShare() {
			this.sendData('share', 'internal')
			this.showShare = !this.showShare
		},


		sendData(payload, pathTo) {
			this.$root.sendGA(pathTo, "click", payload)
		},
	},
	
	

	


}
</script>