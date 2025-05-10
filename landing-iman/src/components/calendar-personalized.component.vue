<script>
export default {
  name: "calendar-personalized"
}
</script>

<template>
  <section class="calendar">
    <div class="content-wrapper">
      <div class="calendar-image">
        <img src="@/assets/calendario.png" alt="Imagen de calendario" />
      </div>
      <div class="calendar-content">
        <h1>Calendario inteligente de fechas especiales</h1>
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
      </div>
    </div>
  </section>
</template>

<style scoped>

.calendar {
  overflow: hidden;
  position: relative;
  height: 700px;
  background-color: #014e4c;
}

.content-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem; /* top, right, bottom, left */
  gap: 1rem; /* Añade espacio entre la imagen y el contenido */
  height: 100%;
  max-width: 1500px;
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */   width: 95%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  z-index: 1; /* Por encima del background */
  overflow: hidden; /* Evita desbordamiento */
  width: 95%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
}


.calendar-content {
  max-width: 50%;
  flex: 1; /* Se adapta al espacio disponible */
  position: relative;
  padding: 6.3rem 60px 3.5rem 60px; /* top, right, bottom, left */

}

.calendar h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.calendar p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
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
  flex: 1; /* ocupa todo el espacio disponible */
  height: 70%; /* o una altura fija si prefieres */
  z-index: 2; /* Por encima del difuminado */
  padding: 0px 20px 0px 20px;
}

.calendar-image img {
  /*max-width: 100%;*/
  /*height: auto;*/
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill; /* estira la imagen para llenar  */
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