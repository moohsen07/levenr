<template>
  <div class="account-page">
    <v-container>
      <page-title> Verification code </page-title>
      <p class="text-left text-md-center muted--text text-body-2">
        You need to enter 4-digit code we send to your email address
      </p>
      <div class="form-container mt-8" data-aos="fade-up" data-aos-once="true">
        <v-form>
          <label class="mb-0">Verification code</label>
          <v-otp-input
            @finish="finish"
            length="4"
            type="number"
            dark
          ></v-otp-input>

          <div class="submit-btn">
            <v-btn
              block
              light
              x-large
              color="primary"
              style="color: black"
              type="submit"
              >Confirm</v-btn
            >
          </div>
        </v-form>
      </div>
      <v-overlay :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </v-container>
  </div>
</template>

<script>
import PageTitle from '~/components/Account/PageTitle.vue'
export default {
  components: { PageTitle },
  layout: 'secondary',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    finish() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('new-password')
      }, 2000)
    },
  },
}
</script>

<style>
.theme--dark.v-otp-input .v-input .v-input__control .v-input__slot {
  background: transparent;
}
</style>
