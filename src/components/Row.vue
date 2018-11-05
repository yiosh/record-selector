<template>
  <tr>
    <td>
      <v-checkbox
        v-model="props.selected"
        primary
        hide-details
      ></v-checkbox>
    </td>
    <TableData @td-clicked="unselect" :props.sync="props.item.name" />
    <TableData :props="props.item.calories" />
    <TableData :props="props.item.fat" />
    <TableData :props="props.item.carbs" />
    <TableData :props="props.item.protein" />
    <TableData :props="props.item.iron" />
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
    }
  }
}
</script>
