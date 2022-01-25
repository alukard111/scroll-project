import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false;
const isProd = process.env.VUE_APP_ANALYTICS === 'production';



Vue.use(Vue2TouchEvents)

new Vue({
	methods: {
		sendGA(category, action, label) {
			if (isProd)
				// eslint-disable-next-line
				gtag('event', action, {
					'event_category': category,
					'event_label': label
				});
			else
				// eslint-disable-next-line
				console.log(`ga ${category} ${action} ${label}`)
		},
	},
	router,
	store,
	render: h => h(App)
}).$mount('.main')
