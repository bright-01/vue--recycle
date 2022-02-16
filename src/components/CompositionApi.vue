<template>
  <div>
    <h1>count!!</h1>
    <p>{{ count.valueOf() }}</p>
    <p>{{ count }}</p>

  </div>
</template>

<script>
import {ref} from "vue";
import {logText} from '../mixin/AppMixin2'
export default {
  name: "CompositionApi",
  mixins:[logText],
  setup(props, context) {
    console.log(props);
    console.log(context);
    const count = ref(100);
    const counter = ref(0);
    return {
      count,
      counter
    }
  }
}
</script>

<style scoped>

</style>