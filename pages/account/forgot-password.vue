<template>
  <div class="account-page">
    <v-container>
      <page-title>Forgot password</page-title>
      <p class="text-left text-md-center muted--text text-body-2">
        We need your email address so we can send the password reset code.
      </p>
      <div class="form-container mt-8" data-aos="fade-up" data-aos-once="true">
        <v-form>
          <label>Email</label>
          <v-text-field outlined placeholder="Enter Your Email"></v-text-field>
          <div class="submit-btn">
            <v-btn
              block
              light
              large
              color="primary"
              style="color: black"
              to="otp-code"
              >Send verification code</v-btn
            >
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from '~/components/Account/PageTitle.vue'
export default {
  components: { PageTitle },
  layout: 'secondary',
}
</script>

<style>
</style>
