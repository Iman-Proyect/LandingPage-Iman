<script>
import PresentationContent from "@/components/presentation-content.component.vue";
import ProductsContent from "@/components/products-content.component.vue";

export default {
  name: "home-content",
  components: {ProductsContent, PresentationContent}
}
</script>

<template>
  <section id="presentation">
    <presentation-content></presentation-content>
  </section>

  <section id="products">
    <products-content></products-content>
  </section>

  <section id="personalizacion">

  </section>

  <section id="contacto">

  </section>
</template>

<style scoped>

</style>