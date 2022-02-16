<template>
  <Base></Base>
  <TestComponent></TestComponent>
</template>

<script>
import Base from './components/Base'
import TestComponent from './components/TestComponent.vue'
export default {
  name: 'App',
  components: {
    Base,
    TestComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
