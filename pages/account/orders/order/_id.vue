<template>
  <v-dialog v-model="dialog" width="500" @click:outside="closeDialog()">
    <v-card>
      <v-card-title class="text-h5 black--text primary">
        Order No.
        <v-chip
          label
          color="black"
          text-color="primary"
          class="font-weight-bold ml-2"
          >#445</v-chip
        >
      </v-card-title>

      <v-stepper v-model="stepper" vertical>
        <v-stepper-step :complete="stepper > 1" step="1">
          <span class=""> Order Placed </span>
          <small class="mt-2">Thursday, 07/04</small>
        </v-stepper-step>

        <v-stepper-content step="1"> </v-stepper-content>

        <v-stepper-step :complete="stepper > 2" step="2">
          <span class=""> order confirmed and processing </span>
          <small class="mt-2">Thursday, 07/04</small>
        </v-stepper-step>

        <v-stepper-content step="2"> </v-stepper-content>

        <v-stepper-step :complete="stepper > 3" step="3">
          <span class="">Order shipped</span>
          <small class="mt-2">Not too long! item has been shipped </small>
        </v-stepper-step>

        <v-stepper-content step="3"> </v-stepper-content>

        <v-stepper-step step="4">out for delivery</v-stepper-step>

        <v-stepper-content step="4"> </v-stepper-content>

        <v-stepper-step step="5">out for delivery</v-stepper-step>
      </v-stepper>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog()"> Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  asyncData({ route }) {
    const id = route.params.id
    return {
      dialog: true,
      id,
      stepper: 3,
    }
  },
  methods: {
    closeDialog() {
      this.$router.back(-1)
    },
  },
}
</script>

<style lang="scss">
.v-stepper--vertical {
  .v-stepper__step {
    padding-bottom: 8px;
    .v-stepper__label {
      span {
        border-radius: 4px;
        background: $primary-color;
        color: black;
        padding: 2px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
      }
    }
    &.v-stepper__step--complete {
      .v-stepper__step__step {
        opacity: 0.5;
        .v-icon {
          color: black !important;
        }
      }
      .v-stepper__label {
        span {
          opacity: 0.5;
        }
      }
      + .v-stepper__content {
        border-color: rgba($color: $primary-color, $alpha: 0.5) !important;
      }
    }
    &.v-stepper__step--active {
      .v-stepper__step__step {
        color: black !important;
      }
      + .v-stepper__content {
        border-left: 4px dotted $primary-color !important;
      }
    }
  }
  .v-stepper__content {
    padding: 24px !important;
    border-left-width: 4px !important;
  }
}
</style>
