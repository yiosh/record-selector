<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-tabs
          dark
          color="cyan"
          show-arrows
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in itemList"
            :href="'#tab-' + item.id"
            :key="item.id"
          >
            {{ item.name }}
          </v-tab>

          <v-tabs-items>
            <v-tab-item
              v-for="item in itemList"
              :value="'tab-' + item.id"
              :key="item.id"
            >
              <v-card flat>
                <!-- <v-card-text>{{ todo.body }}</v-card-text> -->
                <MyTable :item="item"></MyTable>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MyTable from '@/components/MyTable.vue'

  export default {
    components: {
      MyTable
    },
    data() {
       return {
         itemList: [
           {
            name: 'First ItemList',
            id: 1,
            headers: [
              {
                text: '',
                align: 'left',
                // sortable: false,
                value: 'log'
              },
              {
                text: 'Dessert (100g serving)',
                align: 'left',
                // sortable: false,
                value: 'name'
              },
              { text: 'Calories', value: 'calories' },
              { text: 'Fat (g)', value: 'fat' },
              { text: 'Carbs (g)', value: 'carbs' },
              { text: 'Protein (g)', value: 'protein' },
              { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                  value: false,
                  name: 'Frozen Yogurt',
                  calories: 159,
                  fat: 6.0,
                  carbs: 24,
                  protein: 4.0,
                  iron: '1%',
                  selected: false
                },
                {
                  value: false,
                  name: 'Ice cream sandwich',
                  calories: 237,
                  fat: 9.0,
                  carbs: 37,
                  protein: 4.3,
                  iron: '1%'
                },
                {
                  value: false,
                  name: 'Eclair',
                  calories: 262,
                  fat: 16.0,
                  carbs: 23,
                  protein: 6.0,
                  iron: '7%'
                },
                {
                  value: false,
                  name: 'Cupcake',
                  calories: 305,
                  fat: 3.7,
                  carbs: 67,
                  protein: 4.3,
                  iron: '8%'
                },
                {
                  value: false,
                  name: 'Gingerbread',
                  calories: 356,
                  fat: 16.0,
                  carbs: 49,
                  protein: 3.9,
                  iron: '16%'
                },
                {
                  value: false,
                  name: 'Jelly bean',
                  calories: 375,
                  fat: 0.0,
                  carbs: 94,
                  protein: 0.0,
                  iron: '0%'
                },
                {
                  value: false,
                  name: 'Lollipop',
                  calories: 392,
                  fat: 0.2,
                  carbs: 98,
                  protein: 0,
                  iron: '2%'
                },
                {
                  value: false,
                  name: 'Honeycomb',
                  calories: 408,
                  fat: 3.2,
                  carbs: 87,
                  protein: 6.5,
                  iron: '45%'
                },
                {
                  value: false,
                  name: 'Donut',
                  calories: 452,
                  fat: 25.0,
                  carbs: 51,
                  protein: 4.9,
                  iron: '22%'
                },
                {
                  value: false,
                  name: 'KitKat',
                  calories: 518,
                  fat: 26.0,
                  carbs: 65,
                  protein: 7,
                  iron: '6%'
                }
              ],
          },
          {
            name: 'Second ItemList',
            id: 2,
            headers: [
              {
                text: 'Dessert (100g serving)',
                align: 'left',
                sortable: false,
                value: 'name'
              },
              { text: 'Calories', value: 'calories' },
              { text: 'Fat (g)', value: 'fat' },
              { text: 'Carbs (g)', value: 'carbs' },
              { text: 'Protein (g)', value: 'protein' },
              { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                  value: false,
                  name: 'Frozen Yogurts',
                  calories: 159,
                  fat: 6.0,
                  carbs: 24,
                  protein: 4.0,
                  iron: '1%'
                },
                {
                  value: false,
                  name: 'Ice cream sandwich',
                  calories: 237,
                  fat: 9.0,
                  carbs: 37,
                  protein: 4.3,
                  iron: '1%'
                },
                {
                  value: false,
                  name: 'Eclair',
                  calories: 262,
                  fat: 16.0,
                  carbs: 23,
                  protein: 6.0,
                  iron: '7%'
                },
                {
                  value: false,
                  name: 'Cupcake',
                  calories: 305,
                  fat: 3.7,
                  carbs: 67,
                  protein: 4.3,
                  iron: '8%'
                },
                {
                  value: false,
                  name: 'Gingerbread',
                  calories: 356,
                  fat: 16.0,
                  carbs: 49,
                  protein: 3.9,
                  iron: '16%'
                },
                {
                  value: false,
                  name: 'Jelly bean',
                  calories: 375,
                  fat: 0.0,
                  carbs: 94,
                  protein: 0.0,
                  iron: '0%'
                },
                {
                  value: false,
                  name: 'Lollipop',
                  calories: 392,
                  fat: 0.2,
                  carbs: 98,
                  protein: 0,
                  iron: '2%'
                },
                {
                  value: false,
                  name: 'Honeycomb',
                  calories: 408,
                  fat: 3.2,
                  carbs: 87,
                  protein: 6.5,
                  iron: '45%'
                },
                {
                  value: false,
                  name: 'Donut',
                  calories: 452,
                  fat: 25.0,
                  carbs: 51,
                  protein: 4.9,
                  iron: '22%'
                },
                {
                  value: false,
                  name: 'KitKat',
                  calories: 518,
                  fat: 26.0,
                  carbs: 65,
                  protein: 7,
                  iron: '6%'
                }
              ],
           }
          
         ],
        todos: null
       }
    },
    mounted() {
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json)
      //     this.todos = json
      //   })
    }
  }
</script>

<style>

</style>
