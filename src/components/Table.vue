<template>
  <v-data-table
    :headers="item.headers"
    :items.sync="item.desserts"
    :search="search"
    v-model="selected"
    item-key="name"
    select-all
    :loading="active"
    rows-per-page-text="Rows"
    class="elevation-1"
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>

    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <tr is="Row" :props="props">
      </tr>
    </template>
  </v-data-table>
</template>

<script>
// @ is an alias to /src
import TableData from '@/components/TableData.vue'
import Row from '@/components/Row.vue'
import { EventBus } from '../event-bus.js';

export default {
	props: ['item'],
  name: 'Table',
  components: {
    TableData,
    Row
  },
	data() {
		return {
			pagination: {
        sortBy: 'name'
      },
      search: '',
      selected: [],
      active: false
		}
	},
  methods: {
    logItem(item) {
      console.log('loggeditem',item)
    },
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.item.desserts.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    rowClicked(props) {
      props.selected = !props.selected
      props.expanded = !props.expanded
    }
  },
  mounted() {
    EventBus.$on('btn-clicked', () => {
      if (this.selected.length > 0) {
        EventBus.$emit('selected-sent', this.selected)
      }
    })

    EventBus.$on('loading', () => {
      this.active = !this.active
    })
  }
}
</script>

<style>
  table.v-table thead th {
    font-size: 1.2em;
  }
</style>
