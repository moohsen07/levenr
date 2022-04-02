<template>
  <div class="account-page">
    <v-container>
      <page-title> Sign In </page-title>
      <div class="form-container mt-8" data-aos="fade-up" data-aos-once="true">
        <v-form>
          <label>Email</label>
          <v-text-field
            v-model="user.email"
            outlined
            placeholder="email@domain.com"
            prepend-inner-icon="las la-envelope"
          ></v-text-field>

          <label>Password</label>
          <v-text-field
            v-model="user.password"
            outlined
            placeholder="Enter Password"
            prepend-inner-icon="las la-lock"
            :type="showPass ? 'text' : 'password'"
            :append-icon="showPass ? 'las la-eye' : 'las la-low-vision'"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <div class="submit-btn">
            <v-btn
              type="submit"
              block
              x-large
              light
              color="primary"
              style="color: black"
              >Sign in</v-btn
            >
          </div>
        </v-form>
        <div class="forget-password text-center my-3">
          <nuxt-link
            to="forgot-password"
            class="muted--text text-decoration-none"
            >Forget Password ?</nuxt-link
          >
        </div>
      </div>
      <div class="switch-sign-btn absolute">
        <nuxt-link to="signup" class="text-decoration-none"
          >Don't You Have Account ?</nuxt-link
        >
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
      user: {
        email: '',
        password: '',
      },
      showPass: false,
    }
  },
}
</script>

<style lang="scss">
.switch-sign-btn {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
