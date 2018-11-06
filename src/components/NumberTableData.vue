<template>
  <td>
    <v-edit-dialog
      :return-value.sync="prop"
      lazy
    >€ {{ prop }}
      <v-text-field
        slot="input"
        v-model.number="prop"
        prefix="€"
        @change="onChange"
      ></v-text-field>
    </v-edit-dialog>
  </td>
</template>

<script>
import { EventBus } from '../event-bus';
export default {
  props: ["prop"],
  data() {
    return {
      selected: false,
    }
  },
  methods: {
    onChange() {
      EventBus.$emit('loading')
      this.$emit('update:prop', this.prop)
    }
  }
}
</script>