<script>
export default {
  name: "calendar-personalized"
}
</script>

<template>
  <section class="calendar">
    <div class="calendar-image">
      <img src="@/assets/calendario.png" alt="Imagen de calendario" />
    </div>
    <div class="calendar-content">
      <div class="content-wrapper">
      <h1>Calendario inteligente de fechas especiales</h1>
      <p>Sube las fechas de cumpleaños y fotos asociadas. Nosotros imprimimos el imán perfecto y lo enviamos justo a tiempo, sin que lo recuerdes.</p>
      <h2>🎉 Calendario inteligente de fechas especiales</h2>
      <p>
        No olvides nunca más un cumpleaños o aniversario importante. Sube tus fechas favoritas y fotos asociadas:
        <strong>nosotros lo imprimimos y entregamos el imán justo a tiempo</strong>.
      </p>
      <ul>
        <li>🗓️ Recordatorios automáticos.</li>
        <li>📸 Imanes con tus fotos para cada evento.</li>
        <li>🚚 Envío programado sin preocuparte de nada.</li>
      </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

.calendar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem; /* top, right, bottom, left */
  background-color: white;
  gap: 0rem; /* Añade espacio entre la imagen y el contenido */
  flex-wrap: wrap; /* Asegura que el contenido y la imagen se ajusten cuando el tamaño de la pantalla cambie */
  background-image: url('@/assets/calendar-back.png'); /* tu imagen de fondo */
}

.calendar-content {
  max-width: 50%;
  flex: 1; /* Se adapta al espacio disponible */
  padding: 6rem 6rem 6rem 9rem;
  position: relative;
  overflow: hidden; /* Para que no sobresalga el difuminado */
}

.calendar-content .content-wrapper {
  position: relative;
  z-index: 2; /* Por encima del difuminado */
}

/* Difuminado escalado */
.calendar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right,
  rgba(255, 255, 255, 0) 0%,
  rgba(255, 255, 255, 0) 10%,
  rgba(255, 255, 255, 0) 20%,
  rgba(255, 255, 255, 0) 30%,
  rgba(255, 255, 255, 0) 40%,
  rgba(255, 255, 255, 0) 50%,
  rgba(255, 255, 255, 0) 60%,
  rgba(255, 255, 255, 0) 70%,
  rgba(255, 255, 255, 0) 80%,
  rgba(255, 255, 255, 0) 90%,
  rgba(255, 255, 255, 0) 95%,
  rgba(255, 255, 255, 0) 100%);
  z-index: 1; /* Debajo del contenido */
  pointer-events: none; /* para evitar que interfiera con los clicks */
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
  flex: 1; /* ocupa todo el espacio disponible */
  height: 100%; /* o una altura fija si prefieres */
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
  .calendar {
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