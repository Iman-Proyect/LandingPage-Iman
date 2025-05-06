<script>
import PresentationContent from "@/components/presentation-content.component.vue";
import ProductsContent from "@/components/products-content.component.vue";
import CheckFeatures from "@/components/check-features.component.vue";


export default {
  name: "home-content",
  components: { CheckFeatures, ProductsContent, PresentationContent},
}
</script>

<template>
  <section id="presentation">
    <presentation-content></presentation-content>
  </section>


  <section id="products">
    <products-content></products-content>
  </section>

  <section id="check-features">
    <check-features></check-features>
  </section>

  <section id="contacts">

  </section>
</template>

<style scoped>
section {
  border: 1px solid red;
}
</style>