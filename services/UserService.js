import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getUsers() {
    const { data: users } = await apiClient.get('users')

    return users
  },

  async getUser(userId) {
    const { data: user } = await apiClient.get(`users/${userId}`)

    return user
  },

  async getUserPosts(userId) {
    const { data: posts } = await apiClient.get(`posts?userId=${userId}`)

    return posts
  }
}
