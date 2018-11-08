<template>
<v-container fluid grid-list-md class="elevation-1">
  <v-data-iterator
    :items="item"
    :rows-per-page-items="rowsPerPageItems"
    :pagination.sync="pagination"
    content-class="layout row wrap"
  >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
        @click="selectToggle(props)"
      >
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          
        >
          <v-btn
            v-if="props.item.selected"
            absolute
            dark
            fab
            top
            small
            right
          >
            <v-icon>check</v-icon>
          </v-btn>
          <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Calories:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Fat:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Carbs:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Protein:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Sodium:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Calcium:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Iron:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
        </v-hover>
      </v-flex>
    </v-data-iterator>
</v-container>
</template>

<script>
// @ is an alias to /src
import { EventBus } from '../event-bus.js';

export default {
	props: ['item'],
  name: 'DataIterator',
	data() {
		return {
			rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      search: '',
      selected: [],
      active: false
		}
	},
  methods: {
    selectToggle(p) {
      p.item.selected = !p.item.selected
      console.log('props', p.item)
      console.log('value', p.selected)
    },
    log(props) {
      console.log('hover', props)
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
