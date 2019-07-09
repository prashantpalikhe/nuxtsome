<template>
  <v-layout>
    <v-flex xs12>
      <v-list two-line>
        <v-list-group v-for="post in posts" :key="post.id">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ post.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile :key="post.id">
            <v-list-tile-content>
              <p v-html="post.body" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class UserPostsPage extends Vue {
  async asyncData({ $axios, error, params }) {
    try {
      const { data: posts } = await $axios.get(
        `https://jsonplaceholder.typicode.com/posts?postId=${params.user_id}`
      )

      return {
        posts
      }
    } catch {
      error({ statusCode: 404, message: 'posts not found' })
    }
  }
}
</script>
