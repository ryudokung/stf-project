<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-center">
        <h1>Welcome to Selfie The Flags</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-center">
          It's a basic Single Page application <br>
          with MUT Mini contest Event
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-center">
        <v-btn color="primary" to="/scoreboard">ScoreBoard</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  //name: "Landing"
};
</script>
