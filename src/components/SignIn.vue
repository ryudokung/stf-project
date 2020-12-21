<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-center">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card width="400" class="mx-auto mt-5" flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="mdi-account-circle" name="Username" label="Username"></v-text-field>
            <v-text-field prepend-icon="mdi-lock" name="Password" label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block>Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

  export default {
    data: () => ({
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
    }),
  }
</script>