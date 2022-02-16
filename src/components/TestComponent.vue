<template>
  <div class="test">
    <h1>Test</h1>
    <p>{{ isToggle }}</p>
    <button @click="changeToggle()">click</button>
  </div>
</template>

<script>
import {toggle} from '../mixin/AppMixin2'
export default {
  name: "TestComponent",
  mixins:[toggle]
}
</script>

<style scoped>

</style>