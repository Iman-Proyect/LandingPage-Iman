<script>
import twitter from '@/assets/twitter.png';
import whatsapp from '@/assets/whatsapp.png';
import facebook from '@/assets/facebook.png';
import instagram from '@/assets/instagram.png';

export default {
  name: "footer-content",
  data() {
    return {
      redes: [
        { src: twitter, alt: "twitter" },
        { src: whatsapp, alt: "whatsapp" },
        { src: facebook, alt: "facebook" },
        { src: instagram, alt: "instagram" },
      ]
    };
  }
}
</script>

<template>
  <section class="footer-section">
    <div class="content-wrapper">
      <div class="info-content">
        <h3>info@example.com</h3>
        <h3>+123 456 7890</h3>
      </div>
      <div class="images-content">
        <img  v-for="(red, index) in redes" :key="index" :src="red.src" :alt="red.alt" class="red-content" :width="red.width" :sizes="red.sizes" :srcset="red.srcset" loading="lazy" />

      </div>
    </div>
  </section>
</template>

<style scoped>
.footer-section{
  overflow: hidden;
  position: relative; /* Para que esté por encima del video */
  height: 200px;
  background-color: #034846;
}

.content-wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 136px;
  row-gap: 2px;
  justify-content: space-between;
  align-items: center; /* Añadido */
  height: 80%; /* Para que tome la altura completa del contenedor */
  max-width: 1500px;
  margin: 1.3rem auto 1.3rem auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  padding: 1rem 0 1rem 0;
  overflow: hidden; /* Evita desbordamiento */
  width: 85%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  border-top: 0.5px solid #ffffff; /* Grosor y color del borde superior */
  border-bottom: 1px solid #ffffff; /* Grosor y color del borde inferior */
}

.info-content {
  max-width: 250px;
  max-height: 100%; /* Restringe la altura para evitar desbordamiento */
  height: auto;
}

.info-content h3{
  font-size: 16px;
  color: #f8f8f8;
}

.images-content{
  display: flex;
  gap: 60px;
}

.images-content img{
  max-width: 40px;
  max-height: 100%; /* Restringe la altura para evitar desbordamiento */
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