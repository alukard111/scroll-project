export default {
  state: {
    indexFirstNews: 0,
    indexLastNews: 5,
    news: [
      {
        date: '12.10',
        desc: ' Насколько хорошо ты знаешь <br> \
                сборную России по хоккею?',
      },
      {
        date: '12.10',
        desc: ' Как проходили игры <br> \
                Кубка «Балтики» по хоккею',
      },
      {
        date: '12.10',
        desc: ' «Быков напомнил России о рекордах <br> \
                СССР». Как перед ЧМ-2008 вернулась <br> \
                «Красная машина»',
      },
      {
        date: '12.10',
        desc: ' Как смотреть хоккей дома? <br> \
                Инструкция для новичка',
      },
      {
        date: '12.10',
        desc: 'Статья о сборной <br> \
                России по хоккею',
      },
      {
        date: '12.10',
        desc: ' Как проходили игры <br> \
              Кубка «Балтики» по хоккею',
      },
      {
        date: '12.10',
        desc: ' Насколько хорошо ты знаешь <br> \
                сборную России по хоккею?',
      },
      {
        date: '12.10',
        desc: ' Как смотреть хоккей дома? <br> \
              Инструкция для новичка',
      },
      {
        date: '12.10',
        desc: 'Статья о сборной <br> \
              России по хоккею',
      },
      {
        date: '12.10',
        desc: ' «Быков напомнил России о рекордах <br> \
                СССР». Как перед ЧМ-2008 вернулась <br> \
                «Красная машина»',
      },
    ],
    events: [
      {
        dateTime: '05.11.2020 18:30',
        teamOne: 'Россия',
        teamTwo: 'Финляндия',
        flagTeamOne:  require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo:  require('@/assets/imgs/icon/flags/fin.png'),
        gameScore: '1:1',
        gameId: '1'
      },
      {
        dateTime: '07.11.2020 13:30',
        teamOne: 'Россия',
        teamTwo: 'Швеция',
        flagTeamOne: require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo: require('@/assets/imgs/icon/flags/swe.png'),
        gameScore: '3:0',
        gameId: '2'
      },
      {
        dateTime: '08.11.2020 13:30',
        teamOne: 'Россия',
        teamTwo: 'Чехия',
        flagTeamOne: require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo: require('@/assets/imgs/icon/flags/cheh.png'),
        gameScore: null,
        gameId: '3'
      },
      {
        dateTime: '17.12.2020 20:00',
        teamOne: 'Россия',
        teamTwo: 'Швеция',
        flagTeamOne: require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo: require('@/assets/imgs/icon/flags/swe.png'),
        gameScore: null,
        gameId: '4'
      },
      {
        dateTime: '19.12.2020 15:00',
        teamOne: 'Россия',
        teamTwo: 'Чехия',
        flagTeamOne: require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo: require('@/assets/imgs/icon/flags/cheh.png'),
        gameScore: null,
        gameId: '5'
      },
      {
        dateTime: '20.12.2020 16:00',
        teamOne: 'Россия',
        teamTwo: 'Финляндия',
        flagTeamOne: require('@/assets/imgs/icon/flags/russia.png'),
        flagTeamTwo: require('@/assets/imgs/icon/flags/fin.png'),
        gameScore: null,
        gameId: '6'
      },
    ]
  },


  getters: {
    getEvents(state) {
      return state.events
    },
    getNews(state) { 
      return state.news.slice(state.indexFirstNews, state.indexLastNews)
    },
  },
  mutations: {
    INCREMENT_INDEX_NEWS(state) {
        state.indexFirstNews += 5
        state.indexLastNews += 5
    },
    DECREMENTED_INDEX_NEWS(state) {
      state.indexFirstNews -= 5
      state.indexLastNews -= 5
    }  
  },
  actions: {

  }
}