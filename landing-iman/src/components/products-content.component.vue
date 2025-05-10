<script>
import ProductList from "@/components/product-list.component.vue";
import {products} from "@/data/products.js";

export default {
  name: "products-content",
  components: {ProductList},
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.products = products;
    },
  }
}
</script>

<template>
  <section id="products" class="products-section">
    <div class="content-wrapper">
      <!--<h1>¿Por qué elegir nuestros imanes?</h1>-->
      <h1>Nuestros imanes</h1>

      <!-- <ul class="benefits">
         <li>📸 Personalización total con tus fotos</li>
         <li>🎁 Ideal para regalos únicos</li>
         <li>🧲 Alta calidad y durabilidad</li>
         <li>🚚 Envíos rápidos y seguros</li>
       </ul>-->


      <product-list :products="products"></product-list>
    </div>
  </section>

</template>

<style scoped>

.products-section {
  overflow: hidden;
  position: relative;
  height: 855px;
  background-color: #0e7676;
}

.products-section h1{
  color: #023f3d;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 70px;

}

.content-wrapper{
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px 20px 0px; /* top, right, bottom, left */
  height: 100%;
  width: 95%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  max-width: 1500px;
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  z-index: 1; /* Por encima del background */
  overflow: hidden; /* Evita desbordamiento */
}

.products-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}



</style>