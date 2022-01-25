<template lang="pug">
  .news.hidden
    .news__cover
    .news__main
      .news__events-wrapper
        .news__events
          .news__events-title
            h2.news__events-title-text Календарь событий
          .news__events-games
            .news__events-game-wrapper(ref='eventsWrapper')
              .news__events-game(v-for="game in getEvents" :key="game.gameId")
                .news__event-game
                  span.news__event-game-date
                    | {{ game.dateTime }} 
                    span.news__event-game-score(v-if="game.gameScore && mobileSize") | Результат {{ game.gameScore }}
                  span.news__event-game-teams 
                    span.news__event-game-team.news__event-game-team_one
                      img.news__event-game-team-flag.news__event-game-team-flag_one(:src="game.flagTeamOne" alt="flag")
                      span.news__event-game-team-name.news__event-game-team-name_one {{ game.teamOne }}
                    img.news__event-game-vs(src="/icon/vs.svg")
                    span.news__event-game-team.news__event-game-team_two
                      span.news__event-game-team-name.news__event-game-team-name_two {{ game.teamTwo }}
                      img.news__event-game-team-flag.news__event-game-team-flag_two(:src="game.flagTeamTwo" alt="flag")
                .news__event-score(v-if='!mobileSize')
                  span.news__event-game-score(v-if="game.gameScore") {{ game.gameScore }}
                .news__event-line
            .news__events-slider(v-if='mobileSize' ref='slider')
              span.news__events-slider-elipse.news__events-slider-elipse_active(@click='moveSlider($event)')
              span.news__events-slider-elipse(@click='moveSlider($event)')
              span.news__events-slider-elipse(@click='moveSlider($event)')
              span.news__events-slider-elipse(@click='moveSlider($event)')
              span.news__events-slider-elipse(@click='moveSlider($event)')
              span.news__events-slider-elipse(@click='moveSlider($event)')
      .news__main-news-wrapper
        .news__btn-prev-page-wrapper
          //- событие prevPage берется из миксина prevPageMixin
          button.news__btn-prev-page(@click='prevPageAndAnimation()') Назад
        //- кнопка возвращающая назад к предыдущим новостям
        .news__btn-return-wrapper(v-if="this.$store.state.news.indexFirstNews > 0")
          button.news__btn-return(@click="backPrevNews") Предыдущие статьи
        .news__main-news(ref="mainNews")
          .news__topic(v-for="item in getNews")
            .news__topic-inner
              .news__topic-data-wrapper
                span.news__topic-date {{ item.date }}
              .news__topic-desc-wrapper
                h2.news__topic-desc(v-html="item.desc")
              span.news__btn(@click="sendData('novost_1-x_chitat')")
                a.news__btn-link Читать
                img(src="/icon/arrow.svg", alt="arrow")
      .news__main-btn-wrapper(v-if="this.$store.state.news.indexLastNews < this.$store.state.news.news.length")
        button.news__main-btn(@click="getOtherNews") Показать ещё
</template>


<script>
import { animationMixin } from '@/mixins/animationMixin.js'
import { prevPageMixin } from '@/mixins/prevPageMixin.js'
export default {
  mixins: [
    animationMixin,
    prevPageMixin

  ],

  data: () => ({
    widthBody: null,
  }),

  mounted() {
    setTimeout(() => {
      this.toggleClassForAnimation('.news', 'hidden')
    }, 150)

    this.widthBodyResize()
    window.addEventListener('resize', this.widthBodyResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.widthBodyResize)
  },

  computed: {
    getEvents() {
      return this.$store.getters['getEvents']
    },
    getNews() {
      return this.$store.getters['getNews']
    },

    mobileSize() {
      return this.widthBody < 661
    },

  },
  methods: {
    getOtherNews() {
      this.sendData('pokazat_eshe')
      this.toggleAnimationClass()
      setTimeout(() => {
        this.$store.commit({
          type:'INCREMENT_INDEX_NEWS'
        })
        this.toggleAnimationClass()
      }, 350)
    },

    backPrevNews() {
      this.sendData('predydushhie_stati')
      this.toggleAnimationClass()
      setTimeout(() => {
        this.$store.commit({
          type:'DECREMENTED_INDEX_NEWS'
        })
        this.toggleAnimationClass()
      }, 350) 
    },
    
    toggleAnimationClass() {
      this.$refs.mainNews.classList.toggle('news__main-news_opacity')
    },
    
    widthBodyResize() {
      this.widthBody = document.body.offsetWidth
    },

    moveSlider(event) {
      this.sendData('raspisanie_tochka_1-x')
      this.toggleActiveElipse(event)
      this.$refs.eventsWrapper.style.transform = `translateX(-${245 * this.indexActiveElipse()}rem)`
 
    },

    toggleActiveElipse(event) {
      let elementElipseActive = Array.from(document.querySelectorAll('.news__events-slider-elipse')).find((el) => { return el.classList.contains('news__events-slider-elipse_active') })
      elementElipseActive.classList.toggle('news__events-slider-elipse_active')
      event.currentTarget.classList.toggle('news__events-slider-elipse_active')
    },

    indexActiveElipse() {
      return Array.from(document.querySelectorAll('.news__events-slider-elipse')).findIndex((el) => { return el.classList.contains('news__events-slider-elipse_active') })
    },

   
    prevPageAndAnimation() {
      this.toggleClassForAnimation('.news', 'hidden')
      setTimeout(() => {
        this.prevPage(this.$router.options.routes[this.$route.meta.key - 1].path)
      }, 500)
    },
    sendData(payload) {
      this.$root.sendGA('internal', "click", payload)
    },
  }
}

</script>