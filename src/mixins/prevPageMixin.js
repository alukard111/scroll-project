export const prevPageMixin = {
  methods: {
    prevPage(path) {
      this.$router.push({ path: `${path}`})
    },
  }
}