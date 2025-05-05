<script >
import HeaderContent from "@/components/header-content.component.vue";

export default {
  name: 'app',
  components: {HeaderContent}
}
</script>

<template>

  <header-content></header-content>

  <router-view />

</template>

<style scoped>
section {
  padding: 4rem 1rem;
  border-bottom: 1px solid #ddd;
}
</style>
