<template>
  <div id="app">
     <v-app>
       <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
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

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  .application {
    font-family: 'Montserrat', sans-serif;
  }
</style>

