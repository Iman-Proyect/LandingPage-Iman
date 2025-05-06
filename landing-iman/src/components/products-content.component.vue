<script>
export default {
  name: "products-content"
}
</script>

<template>
  <section id="products" class="products-section">
    <h2>¿Por qué elegir nuestros imanes?</h2>

    <ul class="benefits">
      <li>📸 Personalización total con tus fotos</li>
      <li>🎁 Ideal para regalos únicos</li>
      <li>🧲 Alta calidad y durabilidad</li>
      <li>🚚 Envíos rápidos y seguros</li>
    </ul>

    <div class="magnet-gallery">
      <div class="magnet-item" v-for="n in 6" :key="n">
        <img :src="`/assets/imanes/iman${n}.jpg`" alt="Imán personalizado" />
        <p>Diseño #{{ n }}</p>
      </div>
    </div>
  </section>

</template>

<style scoped>
.products-section {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #fafafa;
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