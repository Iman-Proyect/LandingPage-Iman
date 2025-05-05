<script>
export default {
  name: "presentation-content",
  methods: {
    goToShop() {
      // Lógica para redirigir al usuario a la tienda o página de compra
      this.$router.push('/productos');
    }
  }
}
</script>

<template>
  <section class="presentation">
    <div class="presentation-content">
      <h1>¡Bienvenidos a Nuestro Servicio de Imanes Personalizados!</h1>
      <p>Transforma tus recuerdos en regalos únicos y especiales. Personaliza tus imanes con tus fotos favoritas.</p>
      <button @click="goToShop">¡Compra Ahora!</button>
    </div>
    <div class="presentation-image">
      <img src="@/assets/download.jpg" alt="Imagen de presentación" />
    </div>
  </section>
</template>

<style scoped>
.presentation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background-color: #f8f8f8;
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  flex-wrap: wrap; /* Asegura que el contenido y la imagen se ajusten cuando el tamaño de la pantalla cambie */
}

.presentation-content {
  max-width: 50%;
  flex: 1; /* Se adapta al espacio disponible */
}

.presentation h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.presentation p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.presentation button {
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.presentation-image {
  flex: 1; /* ocupa todo el espacio disponible */
  height: 100%; /* o una altura fija si prefieres */
}

.presentation-image img {
  /*max-width: 100%;*/
  /*height: auto;*/
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill; /* estira la imagen para llenar  */
}

@media (max-width: 768px) {
  .presentation {
    flex-direction: column;
    text-align: center;
  }

  .presentation-content {
    max-width: 100%;
  }

  .presentation button {
    width: 100%;
  }

  .presentation-image img {
    max-width: 80%;
  }
}
</style>