<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="https://pbs.twimg.com/profile_images/1013208764021911552/Wnchzf4M_400x400.jpg"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">100 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon color="success" @click="showBuy(this.user_id)">
              BUY
            </v-btn>
            <v-btn icon color="info" @click="showSell(this.contract_id)">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm1>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="http://img.talkandroid.com/uploads/2014/11/united_airlines_app_icon-450x450.png"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!--<span class="headline white&#45;&#45;text">United Airlines</span>-->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">0 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="false">
              BUY
            </v-btn>
            <v-btn icon v-if="false">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm1>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="https://media.glassdoor.com/template/l/8/american-airlines-template-1520555477781.jpg"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Delta</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">100 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="false">
              BUY
            </v-btn>
            <v-btn icon v-if="false">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="https://images.techhive.com/images/article/2017/02/alaska-airlines-cio_primary-100710131-large.jpg"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">650 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="false">
              BUY
            </v-btn>
            <v-btn icon v-if="false">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm1>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="https://media.graytvinc.com/images/810*455/SOUTHWEST38.jpg"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!--<span class="headline white&#45;&#45;text">United Airlines</span>-->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">50 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="false">
              BUY
            </v-btn>
            <v-btn icon v-if="false">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm1>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card>
          <v-img
            src="https://www.delta.com/content/dam/delta-www/responsive/logos/delta-logos/delta_logo_151.jpg"
            height="100px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Delta</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline black--text">100 points</span>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="false">
              BUY
            </v-btn>
            <v-btn icon v-if="false">
              SELL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: {
      contract_id: '0x1234567890123456789012345678901234567891',
      user_id: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
    },
    methods: {
      showBuy (key) {
        this.$router.push({name: 'Buy', params: { 'contract_id': this.contract_id, 'user_id': this.user_id }})
      },
      showSell (key) {
        this.$router.push({name: 'Sell', params: { 'contract_id': this.contract_id, 'user_id': this.user_id }})
      }
    }
  }
</script>
