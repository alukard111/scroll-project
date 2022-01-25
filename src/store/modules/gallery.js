export default {
  state: {
    indexFirstPhoto: 0, 
    indexLastPhoto: 5,
    photo: [
      {
        photoKey: '0',
        src: require('@/assets/imgs/gallery/photo0.png'),
      },
      {
        photoKey: '1',
        src: require('@/assets/imgs/gallery/photo1.png'),
      },
      {
        photoKey: '2',
        src: require('@/assets/imgs/gallery/photo2.png'),
      },
      {
        photoKey: '3',
        src: require('@/assets/imgs/gallery/photo3.png'),
      },
      {
        photoKey: '4',
        src: require('@/assets/imgs/gallery/photo4.png'),
      },    
      {
        photoKey: '5',
        src: require('@/assets/imgs/gallery/photo2.png'),
      },
      {
        photoKey: '3',
        src: require('@/assets/imgs/gallery/photo3.png'),
      },
      {
        photoKey: '6',
        src: require('@/assets/imgs/gallery/photo4.png'),
      },
      {
        photoKey: '7',
        src: require('@/assets/imgs/gallery/photo2.png'),
      },
      {
        photoKey: '8',
        src: require('@/assets/imgs/gallery/photo3.png'),
      },
      {
        photoKey: '9',
        src: require('@/assets/imgs/gallery/photo4.png'),
      },
      
    ]
  },

  getters: {
    getPhotos(state) {
      let indexLastPhoto = state.indexLastPhoto > state.photo.length ? state.photo.length : state.indexLastPhoto
      return state.photo.slice(state.indexFirstPhoto, indexLastPhoto)
    },

    stateLengthPhoto(state) {
      return state.indexLastPhoto <= state.photo.length
    },
    
    getIndexFirstPhoto(state) {
      return state.indexFirstPhoto
    }
    
  },
  mutations: {  
    INCREMENT_INDEX_PHOTO(state) {
      state.indexFirstPhoto += 5 
      state.indexLastPhoto += 5
    },
    DECREMENTED_INDEX_PHOTO(state) {
      if (state.indexFirstPhoto <= 0 ) {
        state.indexFirstPhoto = 0 
        state.indexLastPhoto = 5
      } else {
        state.indexFirstPhoto -= 5 
        state.indexLastPhoto -= 5
      }
    }
  },
  actions: {

  }
}