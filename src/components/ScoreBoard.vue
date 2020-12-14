<template>
  <v-container class="grey lighten-5">
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-center">
        <h1>Welcome To MUT Mini contest ScoreBoard</h1>
      </v-flex>
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
