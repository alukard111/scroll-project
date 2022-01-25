export default {
  state: {
    stepChallenge: [
      {
        desc: 'Сфотографируй как ты поддерживаешь команду самым необычным способом',
        src: require('@/assets/imgs/icon/rules/iphone.png'),
        keyChallenge: '01'
      },
      {
        desc: 'Выложи <br> со специальным хэштегом',
        src: require('@/assets/imgs/icon/rules/hashtag.png'),
        keyChallenge: '02'
      },
      {
        desc: 'Выигрывай хоккейный свитер с автографами кумиров!',
        src: require('@/assets/imgs/icon/rules/pullover.png'),
        keyChallenge: '03'
      }
    ]
  },


  getters: {
    getChallenge: state => {
      return state.stepChallenge
    }
  },
  mutations: {  
  },
  actions: {

  }
}