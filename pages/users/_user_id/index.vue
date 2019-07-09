<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-if="user">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ user.name }}</h3>
            <div>{{ user.email }}</div>

            <br />

            <div>{{ user.address.street }}</div>
            <div>{{ user.address.suite }}</div>
            <div>{{ user.address.city }}</div>
            <div>{{ user.address.zipcode }}</div>

            <br />

            <div>{{ user.phone }}</div>
            <div>{{ user.website }}</div>

            <br />

            <div>{{ user.company.name }}</div>
            <div>{{ user.company.catchPhrase }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn nuxt :to="`/users/${user.id}/posts`" flat color="orange">
            View posts
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

const userModule = namespace('user')

@Component
export default class UserPage extends Vue {
  @userModule.State user

  async fetch({ store, error, params }) {
    try {
      await store.dispatch('user/getUser', params.user_id)
    } catch {
      error({ statusCode: 404, message: 'Users not found' })
    }
  }
}
</script>
