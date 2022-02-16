<template>
  <div class="base">
    <p>Text</p>
    <p>{{ this.addCount(this.count) }}</p>
<!--    <p>{{ this.text }}</p>-->
  </div>
</template>

<script>
import {TestMixin} from "@/mixin/AppMixin";

export default {
  data(){
    return {
      count : 10
    }
  },
  mixins: [TestMixin],
  name: "Base"
}
</script>

<style scoped>

</style>