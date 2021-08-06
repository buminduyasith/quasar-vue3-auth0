<template>
  <q-page class="flex flex-center">
    <login />
  </q-page>
</template>

<script>
import Login from "src/components/Login.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Login },
  name: "PageIndex",
});
</script>
