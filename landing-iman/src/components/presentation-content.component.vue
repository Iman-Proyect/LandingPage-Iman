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
    <div class="content-wrapper">
        <div class="presentation-content">
          <h1>¡Bienvenidos a Nuestro Servicio de Imanes Personalizados!</h1>
          <p>Transforma tus recuerdos en regalos únicos y especiales. Personaliza tus imanes con tus fotos favoritas.</p>
          <button @click="goToShop">¡Compra Ahora!</button>
        </div>
        <video
            class="hero-video"
            data-lazy-load="true"
            data-src="https://s3.amazonaws.com/webflow-prod-assets/5e481500baff8f1b46a42ced/65e73b626bef9cff35de090c_Desktop.mp4"
            poster="https://cdn.prod.website-files.com/5e481500baff8f1b46a42ced/6624f91dd7c146d7246fe3c0_Main%20(00000)%201%20(3)-min.png"
            autoplay
            loop
            muted
            playsinline
        >
          Your browser does not support the video tag.
        </video>
    </div>
  </section>

</template>

<style scoped>

.presentation {
  overflow: hidden;
  position: relative; /* Para que esté por encima del video */
  height: 800px;
}


.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}


.content-wrapper{
  display: flex; /* Se adapta al espacio disponible */

  padding: 6.3rem 20px 3.5rem 20px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  flex-wrap: wrap; /* Asegura que el contenido y la imagen se ajusten cuando el tamaño de la pantalla cambie */
  max-width: 1500px;
  max-height: 800px;
  margin: 0 auto;

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