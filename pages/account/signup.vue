<template>
  <div class="account-page">
    <v-container>
      <page-title> Sign Up </page-title>
      <div class="form-container mt-8" data-aos="fade-up" data-aos-once="true">
        <v-form class="">
          <label>Name</label>
          <v-text-field
            v-model="user.name"
            outlined
            placeholder="Enter Your Name"
            prepend-inner-icon="las la-user-alt"
          ></v-text-field>

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
            placeholder="Min. 8 characters"
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
              >Sign up
            </v-btn>
          </div>
        </v-form>
      </div>

      <div class="switch-sign-btn absolute">
        <nuxt-link to="login" class="text-decoration-none"
          >Do You Have Account ?</nuxt-link
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
        name: '',
        email: '',
        password: '',
      },
      showPass: false,
    }
  },
}
</script>

<style lang="scss">
</style>
