<template lang="pug">
	main.main
		KinesisContainer.main__inner(v-touch:swipe="swipe")
			<Header :page="key" />
			.main__content(v-if="!awaitingBackgroundImage")
				<transition name="fade" mode="out-in">
					<router-view :key="key"></router-view>
				</transition>
			<Footer :page="key" :indexPage='indexPage' />
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { on_load_mixin } from "./system/statistics";
import { animationMixin } from '@/mixins/animationMixin.js'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
	mixins: [
		on_load_mixin,
		animationMixin
	], 
	components: {
		Header,
		Footer,
		KinesisContainer,
		KinesisElement
	},

	data: () => ({
		stateDelayScroll: false,
		routesLength: null,
		indexPage: 0,
		bodyElem: null,

		mainInnerElem: null,
		burger: null,

		scrollBtn: null,
		scrollHeight: 0,
		bottomDistance: 0,
		awaitingBackgroundImage: true,

	}),
	
	mounted() {
		this.heightMin()
		setTimeout(() => {
			this.awaitingBackgroundImage = false
		},500)


		this.mainInnerElem = document.querySelector('.main__inner')
		this.burger = document.querySelector('.header__menu-burger')
		this.scrollBtn = document.querySelector('.footer__scroll-btn')
		this.bodyElem = document.body
		
		this.scrollTop()

		this.bodyElem.addEventListener('wheel', this.scroll)

		this.bottomDistance = this.getBottomDistance()
		this.routesLength = this.$router.options.routes.length - 1
		this.scrollHeight = this.heightScrollMax()
		this.overwriteIndexPage()
	},

	updated() {	
		setTimeout(() => {
			this.scrollTop()
			this.bottomDistance = this.getBottomDistance()
		}, 1000)
		this.overwriteIndexPage()
		this.hiddenMenu()
		this.hiddenScrollBtn()
	},

	beforeDestroy() {
		this.bodyElem.removeEventListener('wheel', this.scroll)
	},
	
	computed: {
		key() {
			return this.$route.meta.key !== undefined 
				? this.$route.meta.key : this.$route;
		},
	},


	methods: {
		swipe(event) {
			if (event === 'top') {
				if ((this.bottomDistance-100) <= (window.pageYOffset || document.documentElement.scrollTop)) {
					this.nextPage()
				}

			} else if (event === 'bottom' && (window.pageYOffset || document.documentElement.scrollTop) <= 0) {
				this.prevPage()
			}

			setTimeout(() => {
				this.bottomDistance = this.getBottomDistance()
			}, 1000) 
		},

		scrollTop() {
			if (this.$store.state.common.mobile) {
				return window.scrollTo(0,0)
			}
		},
		
		scroll(event) {
			if (event.deltaY > 0) {
				if (this.bottomDistance <= (window.pageYOffset || document.documentElement.scrollTop)) {
					this.sendData('scroll_1-4')
					this.nextPage()
				}

			} else if ((window.pageYOffset || document.documentElement.scrollTop) <= 0) {
				this.sendData('scroll_1-4')
				this.prevPage()
			}

			setTimeout(() => {
				this.bottomDistance = this.getBottomDistance()
			}, 1000) 
		},

		
		getBottomDistance() {
			return Math.floor(this.heightScrollMax() - document.documentElement.clientHeight)
		},


		nextPage() {
			if (!this.stateDelayScroll && this.indexPage < this.routesLength) {
				this.toggleClassForAnimation('.main__content>div', 'hidden')
				this.delayScroll() 
				setTimeout(() => {
					this.indexPage +=1
					this.$router.push({path: `${this.$router.options.routes[this.indexPage].path}`})
				}, 1000)
			}
		},

		prevPage() {
			if (!this.stateDelayScroll && this.indexPage <= this.routesLength && this.indexPage !== 1) {
				this.toggleClassForAnimation('.main__content>div', 'hidden')
				this.delayScroll() 
				setTimeout(() => {
					this.indexPage -=1
					this.$router.push({path: `${this.$router.options.routes[this.indexPage].path}`})
				}, 1000)
			}
		},


		delayScroll() {
			this.stateDelayScroll = true
			setTimeout(() => { 
					this.stateDelayScroll = false 
			}, 2500)
		},
		
		hiddenMenu() {
			if (this.burger.classList.contains('header__menu-burger_active') && this.mainInnerElem.classList.contains('main__inner_active')) {
				this.burger.classList.toggle('header__menu-burger_active')
				this.mainInnerElem.classList.toggle('main__inner_active')
			}
		},

		hiddenScrollBtn() {
			if (!(this.indexPage < this.routesLength)) {
				this.scrollBtn.classList.add('footer__scroll-btn_disable')
			} else {
				this.scrollBtn.classList.remove('footer__scroll-btn_disable')
			}
		},


		heightMin() {
			if (this.$store.state.common.mobile) {
				document.querySelector('.main').style.minHeight = `${document.documentElement.clientHeight}rem`
				document.querySelector('.main__inner').style.minHeight = `${document.documentElement.clientHeight}rem`
			}
		},

		heightScrollMax() {
			return Math.max(
				document.body.scrollHeight, document.documentElement.scrollHeight,
				document.body.offsetHeight, document.documentElement.offsetHeight,
				document.body.clientHeight, document.documentElement.clientHeight
			)
		},
		
		overwriteIndexPage() {
			this.indexPage = (this.$route.meta.key === 101 || this.$route.meta.key === 101) ? 1 : this.$router.options.routes.findIndex((el) => el.meta.key === this.$route.meta.key)
		},

		sendData(payload) {
			this.$root.sendGA('internal', "click", payload)
		},
	}
};
</script>

<style lang="stylus">
.main
	pos relative
</style>
