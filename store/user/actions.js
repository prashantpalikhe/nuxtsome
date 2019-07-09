export default {
  async getUser({ commit }, userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`

    const { data: user } = await this.$axios.get(url)

    commit('setUser', user)
  }
}
