<script>
import PresentationContent from "@/components/presentation-content.component.vue";
import ProductsContent from "@/components/products-content.component.vue";
import CheckFeatures from "@/components/check-features.component.vue";
import CalendarPersonalized from "@/components/calendar-personalized2.component.vue";
import FooterContent from "@/components/footer-content.component.vue";



export default {
  name: "home-content",
  components: {FooterContent, CalendarPersonalized, CheckFeatures, ProductsContent, PresentationContent},
}
</script>

<template>
  <section id="presentation" class="presentation-content">
    <presentation-content></presentation-content>
  </section>

  <section id="check-features">
    <check-features></check-features>
  </section>

  <section id="products">
    <products-content></products-content>
  </section>

  <section id="calendar">
    <calendar-personalized></calendar-personalized>
  </section>

  <section id="footer">
    <footer-content></footer-content>
  </section>
</template>

<style scoped>

section {
  /*border: 1px solid red;*/
  box-sizing: border-box; /* Incluye el padding en el ancho */
}
</style>