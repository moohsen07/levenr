<template>
  <div class="address">
    <v-row>
      <v-col data-aos="fade-up">
        <v-card ref="ay haga" rounded="lg" class="address-form-wrapper pa-4">
          <header>
            <v-card-title class="px-0 pt-0">Add New Address</v-card-title>
            <v-card-subtitle class="px-0 muted--text"
              >Be sure to fill this form carefully because we will deliver to
              this address</v-card-subtitle
            >
          </header>
          <v-form >
            <div class="inputs-controller d-flex flex-wrap">
              <div class="input-wrapper">
                <label class="overline">Full Name</label>
                <v-text-field
                  dense
                  outlined
                  :rules="[(v) => !!v || 'Name is required']"
                ></v-text-field>
              </div>
              <div class="input-wrapper">
                <label class="overline">Mobile Number</label>
                <v-text-field
                  type="number"
                  dense
                  outlined
                  :rules="[
                    (v) => !!v || 'Mobile Number is required',
                    (v) =>
                      /^01[0125][0-9]{8}$/.test(v) || 'Mobile Number not valid',
                  ]"
                ></v-text-field>
              </div>
            </div>
            <div class="inputs-controller d-flex flex-wrap">
              <div class="input-wrapper">
                <label class="overline">Address Line</label>
                <v-text-field dense outlined></v-text-field>
              </div>
              <div class="input-wrapper">
                <label class="overline">Flat, House No.</label>
                <v-text-field dense outlined></v-text-field>
              </div>
            </div>
            <div class="inputs-controller d-flex flex-wrap">
              <div class="input-wrapper">
                <label class="overline">Town/City</label>
                <v-text-field dense outlined></v-text-field>
              </div>
              <div class="input-wrapper">
                <label class="overline"
                  >Postal Code
                  <span class="muted--text caption">(optional)</span></label
                >
                <v-text-field dense outlined></v-text-field>
              </div>
            </div>
            <div class="inputs-controller d-flex flex-wrap">
              <div class="input-wrapper">
                <label class="overline">State</label>
                <v-text-field dense outlined></v-text-field>
              </div>
              <div class="input-wrapper">
                <label class="overline"
                  >Address Type
                  <span class="muted--text caption">(optional)</span></label
                >
                <v-select outlined dense :items="['Home', 'Work']"></v-select>
              </div>
            </div>
            <div class="submit-button d-flex justify-end">
              <v-btn color="primary" class="black--text"
                >Save and deliver here</v-btn
              >
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.address-form-wrapper {
  .inputs-controller {
    .input-wrapper {
      flex-grow: 1;
    }
  }
}
</style>
