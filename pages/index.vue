<template>
  <v-layout>
    <v-flex xs12>
      <v-list two-line>
        <template v-for="user in users">
          <v-list-tile :key="user.id" nuxt :to="`/users/${user.id}`">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ user.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ user.email }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class HomePage extends Vue {
  async asyncData({ $axios, error }) {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users'

      const { data: users } = await $axios.get(url)

      return {
        users
      }
    } catch {
      error({ statusCode: 404, message: 'Users not found' })
    }
  }
}
</script>
