<template>
  <tr>
    <td>
      <v-checkbox
        v-model="props.selected"
        primary
        hide-details
      ></v-checkbox>
    </td>
    <Details @td-clicked="unselect" :prop.sync="props.item.name" />
    <NumberTableData @td-clicked="unselect" :prop.sync="props.item.calories" />
    <!-- <TableData @td-clicked="unselect" :prop.sync="props.item.calories" /> -->
    <TableData @td-clicked="unselect" :prop.sync="props.item.fat" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.carbs" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.protein" />
    <TableData @td-clicked="unselect" :prop.sync="props.item.iron" />
  </tr>
</template>

<script>
import TableData from '@/components/TableData.vue'
import NumberTableData from '@/components/NumberTableData.vue'
import Details from '@/components/Details.vue'

export default {
  props: ["props"],
  components: {
    TableData,
    Details,
    NumberTableData
  },
  methods: {
    unselect() {
      this.props.selected = false
    },
  }
}
</script>
