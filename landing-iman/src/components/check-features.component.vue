<script>
import impresoraImg from '@/assets/impresora.png';
import imanImg from '@/assets/iman.png';
import regaloImg from '@/assets/regalo.png';
import cuboImg from '@/assets/cubo.png';

export default {
  name: "check-features",
  data() {
    return {
      logos: [
        { src: impresoraImg, alt: "impresora" },
        { src: imanImg, alt: "iman" },
        { src: regaloImg, alt: "regalo" },
        { src: cuboImg, alt: "cubo" },
      ]
    };
  }
}
</script>

<template>
  <section id="check-features" class="features-section">
    <div class="container-features">
      <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt" class="home-logo" :width="logo.width" :sizes="logo.sizes" :srcset="logo.srcset" loading="lazy" />
    </div>
  </section>

</template>

<style scoped>

.features-section{
  overflow: hidden;
  position: relative; /* Para que esté por encima del video */
  height: 160px;
  background-color: #034846;
}

.container-features{
  display: flex;
  flex-wrap: wrap;
  gap: 136px;
  row-gap: 2px;
  justify-content: center;
  align-items: center; /* Añadido */
  height: 100%; /* Para que tome la altura completa del contenedor */
  max-width: 1500px;
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  padding: 1.3rem 0px 1.3rem 0px; /* top, right, bottom, left */
  overflow: hidden; /* Evita desbordamiento */
  width: 95%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
}

.home-logo {
  max-width: 190px;
  max-height: 100%; /* Restringe la altura para evitar desbordamiento */
  height: auto;
  object-fit: contain;
}


/* Estilos responsive */
@media (max-width: 1020px) {
  .container-features {
    gap: 66px;
  }
}

@media (max-width: 556px) {
  .home-logo{
    width: 94px;
  }
}
</style>