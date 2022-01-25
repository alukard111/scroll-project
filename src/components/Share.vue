<template lang="pug">
	.share()
		yandex-share(:title='shareTitle' :description='shareDescription' :image='shareImage' :url='shareUrl' :services='services' :contentByService='contentByService' @share='share'  )
</template>

<script>
	import YandexShare from '@cookieseater/vue-yandex-share';

	export default {
		props: {
			title: {
				type: String,
				require: false,
				default: null
			},
			description: {
				type: String,
				require: false,
				default: null
			},
			image: {
				type: String,
				require: false,
				default: null
			},
			url: {
				type: String,
				require: false,
				default: null
			},
			services: {
				type: Array,
				require: false,
				default: Array
			},
		},
		
		components: {
			YandexShare
		},

		methods: {
			share(payload) {
				this.$emit('share', payload);
			}
		},
		
		computed: {
			shareTitle() {
				let shareTitle = this.title ? this.title : 'Семейный досуг от Kinder Delice'
				return shareTitle
			},
			shareDescription() {
				let shareDescription = this.description ? this.description : 'Время стать ближе!'
				return shareDescription
			},
			shareImage() {
				let shareImage = this.image ? `${location.origin}${this.image}` : `${location.origin}/share.png`
				return shareImage
			},
			shareUrl() {
				let url = this.url ? `${location.origin}/${this.url}` : location.origin;
				return url
			},
			contentByService() {
				return {
					vkontakte: {
						title: this.title+' '+this.description
					},
					twitter : {
						title: this.title,
					},
					facebook: {
						title: this.title,
					}
				}
			},
		}
	}
</script>
