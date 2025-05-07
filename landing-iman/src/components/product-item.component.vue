<script>
import {Product} from "@/model/product.entity.js";
import {Button as PvButton} from "primevue";

export default {
  name: "product-item",
  components: {PvButton},
  props: {
    product: {
      type: Product,
      required: true
    }
  }
}
</script>

<template>

  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="product image" :src="product.image" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        {{ product.description }}
      </p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>