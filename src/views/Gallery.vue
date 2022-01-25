<template lang="pug">
  .gallery.hidden
    .gallery__cover
    h2.gallery__title
      span.gallery__title-text Участники
    .btn__prev-page-wrapper
      button.btn__prev-page(@click='prevPageAndAnimation()') Назад
    .gallery__photos
      .gallery__btn-return-wrapper
        button.gallery__btn-return(v-if='getIndexFirstPhoto > 0' @click='showPrevPhoto')  К прошлым фото
      .gallery__photos-inner
        .gallery__photo(v-for="photo in getPhotos" :key="photo.photoKey")
          .gallery__photo-img-wrapper
            img.gallery__photo-img(:src='photo.src')
        .gallery__btn-wrapper(v-if="getStateLengthPhoto")
          .gallery__btn-inner
            button.gallery__btn(@click='showMorePhoto') Больше фото
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
      this.toggleClassForAnimation('.gallery', 'hidden')
    }, 150)
  },

  computed: {
    getPhotos() {
      return this.$store.getters['getPhotos']
    },
    getStateLengthPhoto() {
      return this.$store.getters['stateLengthPhoto']
    },
    getIndexFirstPhoto() {
      return this.$store.getters['getIndexFirstPhoto']
    }

  },
  methods: {
    showMorePhoto() {
      this.$store.commit({
        type:'INCREMENT_INDEX_PHOTO'
      })
    },
    showPrevPhoto() {
      this.$store.commit({
        type:'DECREMENTED_INDEX_PHOTO'
      })
    },

    prevPageAndAnimation() {
      this.toggleClassForAnimation('.gallery', 'hidden')
      setTimeout(() => {
        this.prevPage(this.$router.options.routes[this.$route.meta.key - 1].path)
      }, 500)
    }
  }
}

</script>