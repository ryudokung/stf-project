<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-center" mt-5>
        <v-img
          :src="require('../assets/404.png')"
          class="my-3"
          contain
          height="200"
        />
        <h1>Error - page not found</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>
