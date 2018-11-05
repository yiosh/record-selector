<template>
  <div class="home">
    <MainComp />
  </div>
</template>

<script>
// @ is an alias to /src
import MainComp from '@/components/MainComp.vue'

export default {
  name: 'maincomp',
  components: {
    MainComp
  }
}
</script>
