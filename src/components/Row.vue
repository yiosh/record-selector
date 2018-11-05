<template>
  <tr>
    <td>
      <v-checkbox
        v-model="props.selected"
        primary
        hide-details
      ></v-checkbox>
    </td>
    <TableData @td-clicked="unselect" :prop.sync="props.item.name" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.calories" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.fat" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.carbs" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.protein" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.iron" />
  </tr>
</template>

<script>
import TableData from '@/components/TableData.vue'

export default {
  props: ["props"],
  components: {
    TableData
  },
  methods: {
    unselect() {
      this.props.selected = false
    },
  }
}
</script>
