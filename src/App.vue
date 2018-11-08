<template>
  <div id="app">
     <v-app>
       <v-toolbar flat>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-if="layout == 'data_tables'"
            flat
            @click="dataTables"
          >
            <v-icon>view_list</v-icon>
          </v-btn>
          <v-btn
            v-else
            flat
            @click="dataIterator"
          >
            <v-icon>view_module</v-icon>
          </v-btn>
          <v-btn to="/" flat>Root</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
    
  </div>
</template>

<script>
import { EventBus } from './event-bus';

export default {
  data() {
    return {
      layout: 'data_tables'
    }
  },
  methods: {
    dataTables() {
      this.layout = 'data_iterator'
      EventBus.$emit('data_iterator')
    },
    dataIterator() {
      this.layout = 'data_tables'
      EventBus.$emit('data_tables')
    }
  }
}
</script>


<style>

  body {
    color: #202124;
  }
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  .application {
    font-family: 'Montserrat', sans-serif;
  }

  .v-toolbar {
    border-bottom: 1px solid #ccc;
  }
</style>

