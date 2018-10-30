<template>
	<v-data-table
		:headers="item.headers"
		:items="item.desserts"
		hide-actions
		class="elevation-1"
	>
		<template slot="items" slot-scope="props">
			<td>
				<v-checkbox
					label="Do you agree?"
					@change="logItem(props.item)"
				></v-checkbox>
			</td>
			<td>{{ props.item.name }}</td>
			<td v-if="props.item.selected" @change="props.item.selected = false" class="text-xs-right">
				<v-text-field
					v-model.number="props.item.calories"
				></v-text-field>
			</td>
			<td v-else class="text-xs-right" @click="props.item.selected = true">
				{{ props.item.calories }}
			</td>
			<td class="text-xs-right">{{ props.item.fat }}</td>
			<td class="text-xs-right">{{ props.item.carbs }}</td>
			<td class="text-xs-right">{{ props.item.protein }}</td>
			<td class="text-xs-right">{{ props.item.iron }}</td>
		</template>
	</v-data-table>
</template>

<script>
// @ is an alias to /src

export default {
	props: ['item'],
  name: 'MyTable',
   methods: {
      logItem(item) {
        console.log('loggeditem',item)
      }
    },
}
</script>