<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <!--<v-img-->
          <!--src="/static/tesla.jpg"-->
          <!--aspect-ratio="2.75"-->
          <!--&gt;</v-img>-->

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {getSeller} from './api'

  export default {
    data () {
      return {
        buyer: []
      }
    },

    methods: {
      refresh (err, data) {
        this.buyer = data
        console.log('refresh : ', data, ' err:', err)
      }
    },

    beforeRouteEnter (to, from, next) {
      getSeller(to.params.id).then((data) => {
        next(vm => vm.refresh(null, data))
      })
    }
  }
</script>
