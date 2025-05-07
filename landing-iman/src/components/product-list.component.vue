<script>
import {Product} from "@/model/product.entity.js";
import ProductItem from "@/components/product-item.component.vue";

export default {
  name: "product-list",
  components: {ProductItem},
  props: {
    visible: Boolean,
    products: Array[Product]
  }
}
</script>

<template>
  <div class="product-list">
    <product-item v-for="product in products" :product="product" class="product-card"/>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;          /* Permite que los elementos pasen a la siguiente fila */
  gap: 1.5rem;              /* Espacio entre los productos */
  justify-content: center; /* Centra los productos horizontalmente */
}

.product-card {
  flex: 1 1 calc(33.333% - 1rem); /* 3 columnas con espacio */
  max-width: 250px;
  min-width: 220px; /* 👈 mínimo tamaño permitido */
  box-sizing: border-box;
  box-shadow: none;
}
</style>