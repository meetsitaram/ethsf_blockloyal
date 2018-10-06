<template>
  <v-container fluid>
    <ul v-if="programs && programs.length">
      <li v-for="program of programs">
        <p><strong>{{program.name}}</strong></p>
        <p>{{program.points}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        programs: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created () {
      axios.get(`http://127.0.0.1:5000/programs`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.programs = response.data
          console.log('programs:', this.programs)
        })
        .catch(e => {
          this.errors.push(e)
        })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>
