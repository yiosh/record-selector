<template>
  <td 
    class="text-xs-left"
    @click="onClick"
  >
    <v-text-field
      v-if="selected"
      v-model="props"
      @change="onChange"
    ></v-text-field>
    <template v-else>
      {{ props }}
    </template>
  </td>
</template>

<script>
export default {
  props: ["props"],
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
      this.$emit('update:props', this.props)
      this.selected = false
    }
  }
}
</script>

