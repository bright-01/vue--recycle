<template>
  <Base></Base>
  <hr>
  <TestComponent></TestComponent>
  <hr>
  <CompositionApi></CompositionApi>
</template>

<script>
import Base from './components/Base'
import TestComponent from './components/TestComponent.vue'
import CompositionApi from './components/CompositionApi.vue'
export default {
  name: 'App',
  components: {
    Base,
    TestComponent,
    CompositionApi
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
