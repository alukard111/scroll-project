export const animationMixin = {
  methods: {
    toggleClassForAnimation(applyToSelector, removeFromSelector ) {
      console.log(applyToSelector, removeFromSelector, 'mixin!')
      document.querySelector(`${applyToSelector}`).classList.toggle(`${removeFromSelector}`)
    },
  }
}