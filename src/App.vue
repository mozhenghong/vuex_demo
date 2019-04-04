<template>
  <div id="app">
    <Home></Home>
    <About />
  </div>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
export default {
  name: "app",
  components: {
   Home,
   About
  },
  data(){
    return {
     
    }
  },
  methods: {
   
  }
};
</script>

<style>

</style>
