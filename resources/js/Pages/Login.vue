<template>
<v-app>
    <v-container grid-list-md>
      <br/>
      <br/>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm8 lg4 md5>
          <v-card class="login-card">
            <v-card-title>
              <!-- <span class="headline">Login t</span> -->
            </v-card-title>

            <v-spacer/>

            <v-card-text>

              <v-layout
                row
                fill-height
                justify-center
                align-center
                v-if="loading"
              >
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                />
              </v-layout>


              <v-form v-else ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-icon class="icon_size" color="blue darken-4">account_circle</v-icon>

                  <v-text-field
                    v-model="credentials.username"
                    :counter="70"
                    label="username"
                    :rules="rules.username"
                    maxlength="70"
                    required
                  />

                  <v-text-field
            
                    type="password"
                    v-model="credentials.password"
                    :counter="20"
                    label="password"
                    :rules="rules.password"
                    maxlength="20"
                    required
                  />

                </v-container>
                <v-btn class="blue darken-4 white--text login_btn" :disabled="!valid" @click="login">Login</v-btn>

              </v-form>


            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</v-app>
</template>

<script>


import routes from "../router"

export default {

    data: () => ({
        credentials: {},
        alertData:{},
        valid:true,
        loading:false,
        rules: {
          username: [
            v => !!v || "Username is required",
            v => (v && v.length > 1) || "A username must be more than 3 characters long",
            v => /^[a-z0-9_]+$/.test(v) || "A username can only contain letters and digits"
          ],
          password: [
            v => !!v || "Password is required",
          //  v => (v && v.length > 7) || "The password must be longer than 7 characters"
          ]
        }
    }),
    methods: {
        login() {
                this.loading = true;
          // checking if the input is valid
            if (this.$refs.form.validate()) {
              this.loading = false;
                alert("OK")
      routes.push('/admin');
        }else{
            this.loading = false;
            alert("enter every details")
        }
    }
    }
}
</script>
<style scoped>
.icon_size{
  font-size: 100px!important;
}


</style>