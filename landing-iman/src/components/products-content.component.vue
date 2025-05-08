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
    <h2>¿Por qué elegir nuestros imanes?</h2>

    <!-- <ul class="benefits">
       <li>📸 Personalización total con tus fotos</li>
       <li>🎁 Ideal para regalos únicos</li>
       <li>🧲 Alta calidad y durabilidad</li>
       <li>🚚 Envíos rápidos y seguros</li>
     </ul>-->


      <product-list :products="products"></product-list>

  </section>

</template>

<style scoped>

.products-section {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #fafafa;
  width: 100vw;

}

.products-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.benefits li {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.magnet-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.magnet-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

</style>