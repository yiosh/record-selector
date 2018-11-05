<template>
  <td 
    class="text-xs-left"
    @click="onClick"
  >
    <v-text-field
      v-if="selected"
      v-model="prop"
      @change="onChange"
    ></v-text-field>
    <template v-else>
      {{ prop }}
    </template>
  </td>
</template>

<script>
export default {
  props: ["prop"],
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      this.$emit('td-clicked')
      this.selected = true
    },
    onChange() {
      this.$emit('update:prop', this.prop)
      this.selected = false
    }
  }
}
</script>

