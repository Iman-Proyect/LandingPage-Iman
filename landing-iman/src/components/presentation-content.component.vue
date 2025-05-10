<script>
import backGroundPresentation from '@/assets/BackGroundPresentation.mp4';
import { gsap } from "gsap";

export default {
  name: "presentation-content",
  data() {
    return {
      backGround: { src: backGroundPresentation},
    };
  },
  mounted() {
    // Animacion de los textos en la presentacion

    // Selecciona el contenedor
    const contentTextPresentation = this.$refs.contentTextPresentation;

    //servicio para aplicar animacion segun el tamano de la pantalla
    const mm = gsap.matchMedia();

    // Aplica la animación al inicio
    // Establece la posición inicial sin animación
    gsap.set(contentTextPresentation, { x: -200, opacity: 0 });



    //aplica animacion de acuerdo al cambio del tamano de la pantalla (474px)
    mm.add("(max-width: 473px)", () => {
      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });

    mm.add("(min-width: 474px)", () => {
      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });

    //aplica animacion de acuerdo al cambio del tamano de la pantalla (474px)
    mm.add("(max-width: 756px)", () => {
      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });

    mm.add("(min-width: 757px)", () => {
      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });

    //aplica animacion de acuerdo al cambio del tamano de la pantalla (474px)
    mm.add("(max-width: 1000px)", () => {
      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });

    mm.add("(min-width: 1001px)", () => {
     // mm.revert(); // Limpia animaciones previas

      // Establece la posición inicial sin animación
      gsap.set(contentTextPresentation, { x: -200, opacity: 0 });

      gsap.to(
          contentTextPresentation,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            overwrite: true // Evita conflictos de animación
          }
      );
    });
  },
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
    <div class="content-wrapper" >
        <div class="presentation-content" :style=contentStyle ref="contentTextPresentation">
          <h1>¡Servicio de Imanes Personalizados!</h1>
          <p>Transforma tus recuerdos en regalos únicos y especiales. Personaliza tus imanes con tus fotos favoritas.</p>
          <button @click="goToShop">¡Compra Ahora!</button>
        </div>

        <!-- <div class="hero-video" :style="{ backgroundImage: `url(${fondoPresentation})` }"></div> -->
    </div>

    <video
        class="hero-video"
        :src=backGround.src
        poster="https://cdn.prod.website-files.com/5e481500baff8f1b46a42ced/6624f91dd7c146d7246fe3c0_Main%20(00000)%201%20(3)-min.png"
        autoplay
        loop
        muted
        playsinline
    >
      Your browser does not support the video tag.
    </video>
  </section>

</template>

<style scoped>

.presentation {
  overflow: hidden;
  position: relative; /* Para que esté por encima del video */
  height: 1000px;
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
  display: flex;
  flex-direction: column; /* Alinea los hijos en columna */
  padding: 140px 0px 3.5rem 0px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 100%;
  max-width: 1500px;
  width: 94%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}


.presentation-content {
  display: flex;
  flex-direction: column; /* Alinea los hijos en columna */
  position: relative;
  max-width: 40%;
  max-height: 600px;
  color: #ffffff;
  gap: 3rem; /* Espacio entre elementos */
  line-height: 1; /* Ajusta este valor según lo necesites */
}

.content-wrapper h1 {
  font-size: 64px;
  font-weight: bold;
}

.content-wrapper p {
  font-size: 18px;
}



.content-wrapper button {
  height: 53px;
  width: 220px;
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #9dd1a1;
  color: #023f3d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}


@media (max-width: 1000px) {
  .content-wrapper h1{
    font-size: 54px;
  }
}

@media (max-width: 756px) {
  .content-wrapper h1{
    font-size: 48px;
  }
}

@media (max-width: 473px) {
  .presentation {
    height: 600px;
  }
  .content-wrapper h1{
    font-size: 48px;
  }
  .content-wrapper p{
    font-size: 16px;
  }
}


</style>