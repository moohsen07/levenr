<template>
  <div class="account-page">
    <v-container>
      <page-title>New password</page-title>
      <p class="text-left text-md-center muted--text text-body-2">
        You can create a new password, please don't forget this one too.
      </p>

      <div class="form-container mt-8" data-aos="fade-up" data-aos-once="true">
        <v-form>
          <label>password</label>
          <v-text-field
            v-model="password"
            outlined
            placeholder="Min. 8 characters"
          ></v-text-field>

          <label>confirm password</label>
          <v-text-field
            v-model="confirmPassword"
            outlined
            placeholder="Min. 8 characters"
          ></v-text-field>

          <div class="submit-btn">
            <v-btn
              block
              light
              x-large
              color="primary"
              style="color: black"
              to="login"
              >Done</v-btn
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
  data() {
    return {
      password: '',
      confirmPassword: '',
    }
  },
}
</script>

<style>
</style>
