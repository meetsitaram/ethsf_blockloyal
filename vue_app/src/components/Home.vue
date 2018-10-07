
<template>
  <v-container fluid>
    <v-layout column align-center>
      <blockquote>
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn
        @click="showBuyer('0x123')"
      >
        Buyer
      </v-btn>
      <v-btn
        @click="showSeller('0x234c')"
      >
        Seller
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods: {
      showBuyer (key) {
        this.$router.push({name: 'Buyer', params: { 'id': key }})
      },
      showSeller (key) {
        this.$router.push({name: 'Seller', params: { 'id': key }})
      }
    }
  }
</script>
