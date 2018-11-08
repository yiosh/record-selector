<template>
  <td>
    <v-tooltip bottom>
      <v-btn fab small color="info" slot="activator">
        <v-icon>edit</v-icon>
      </v-btn>
      <span>Edit</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn fab small color="success" slot="activator">
        <v-icon>send</v-icon>
      </v-btn>
      <span>Send</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn fab small color="error" slot="activator">
        <v-icon>delete</v-icon>
      </v-btn>
      <span>Delete</span>
    </v-tooltip>
  </td>
</template>

<script>
import { EventBus } from '../event-bus';
export default {
  props: ["prop"],
  data() {
    return {
      selected: false,
      toggle_exclusive: 2
    }
  },
  methods: {
    onChange() {
      EventBus.$emit('loading')
      if (typeof this.prop == "number") {
        this.localProp = Number(this.prop)
      }
      this.$emit('update:prop', this.prop)
    }
  }
}
</script>

<style scoped>
  td {
    text-align: left;
    padding: 0 !important;
  }
</style>
