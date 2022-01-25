<template lang='pug'>
  .menu
    .menu__burger.header__menu-burger(@click="showMenu()" v-if="(this.isMobile)")
      .bar1
      .bar2
      .bar3
    .menu__inner
      ul.menu__list
        li.menu__item
          router-link(to='/news' class="menu__item-link") о сборной
        li.menu__item
          router-link(to='/rules' class="menu__item-link")  о конкурсе
        li.menu__item
          router-link(to='/gallery' class="menu__item-link") стена поддержки
        li.menu__item
          router-link(to='/video' class="menu__item-link") трансляция
        li.menu__item
          router-link(to='/product' class="menu__item-link") о продукте

</template>


<script>
export default {
  data: () => ({
    mainInnerElem: null,
    burger: null,
  }),
  mounted() {
    this.mainInnerElem = document.querySelector('.main__inner')
		this.burger = document.querySelector('.header__menu-burger')

    setTimeout(() => {
      this.heightMin()
    }, 550)
  },
  updated() {
    this.heightMin()
  },
  computed: {
    isMobile() {
      return document.documentElement.offsetWidth < 661
    }
  },
  methods: {
    heightMin() {
			if (document.documentElement.offsetWidth < 661) {
				document.querySelector('.menu').style.minHeight = `${document.documentElement.offsetHeight}rem`
      }
    },
    showMenu() {
			this.burger.classList.toggle('header__menu-burger_active')
			this.mainInnerElem.classList.toggle('main__inner_active')
      this.sendData('zakryt_burger_menyu')
		},
    sendData(payload) {
			this.$root.sendGA('internal', "click", payload)
		},
  }
}

</script>