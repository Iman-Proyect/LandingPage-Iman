<script>
export default {
  name: "calendar-personalized2"
}
</script>

<template>
  <section class="calendar">
    <div class="content-wrapper">
      <h1>Calendario de fechas especiales</h1>
      <p>Sube las fechas de cumpleaños y fotos asociadas. Nosotros imprimimos el imán perfecto y lo enviamos justo a tiempo, sin que lo recuerdes.</p>
        <!--<h2>🎉 Calendario inteligente de fechas especiales</h2>
        <p>
          No olvides nunca más un cumpleaños o aniversario importante. Sube tus fechas favoritas y fotos asociadas:
          <strong>nosotros lo imprimimos y entregamos el imán justo a tiempo</strong>.
        </p>
        <ul>
          <li>🗓️ Recordatorios automáticos.</li>
          <li>📸 Imanes con tus fotos para cada evento.</li>
          <li>🚚 Envío programado sin preocuparte de nada.</li>
        </ul>
        -->
      <img src="@/assets/calendario.png" alt="Imagen de calendario" />
    </div>
  </section>
</template>

<style scoped>

.calendar {
  overflow: hidden;
  position: relative;
  height: 1150px;
  background-color: #034846;

}

.content-wrapper{
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px 20px 0px; /* top, right, bottom, left */
  gap: 1rem; /* Añade espacio entre la imagen y el contenido */
  height: 100%;
  max-width: 1500px;
  min-height: 600px; /* Altura mínima */
  max-height: 1050px; /* Altura máxima */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  width: 80%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  z-index: 1; /* Por encima del background */
  overflow: hidden; /* Evita desbordamiento */
}


.calendar h1 {
  color: white;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;  /* Ajusta este valor para aumentar o reducir el espacio */
  width: 75%; /* Ajusta el ancho */
  margin: 0 auto; /* Centra el elemento */
}

.calendar p {
  color: white;
  font-size: 1.25rem;
  /*transform: translateY(-5px); /* Sube 20px */
  text-align: center;
  width: 51%; /* Ajusta el ancho */
  margin: 0 auto; /* Centra el elemento de los lados con auto y 6 para el bottom */
}

.calendar button {
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.calendar-image {
  position: relative;
  max-width: 100%; /* Hace que la imagen ocupe hasta el 100% del ancho disponible */
  height: auto; /* Mantiene la relación de aspecto de la imagen */
  object-fit: contain; /* Si la imagen no es cuadrada, ajustará para mantener la relación */
  //padding: 0px 20px 0px 20px;

}

.calendar img {
  justify-content: space-between;
  align-items: center;
  height: auto;
  border-radius: 10px;
  object-fit: contain; /* estira la imagen para llenar  */
  margin: 5rem 0.2rem 0rem 0.2rem; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  width: 100%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .calendar-content {
    max-width: 100%;
    padding: 6rem 6rem 6rem 6rem;
  }

  .calendar-content::before {
    background: none; /* Elimina solo la difuminación */
  }

  .calendar button {
    width: 100%;
  }

  .calendar-image img {
    max-width: 80%;
  }
}
</style>