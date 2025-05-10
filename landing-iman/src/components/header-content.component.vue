<script>
export default {
  name: 'header-content',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleResize() {
      if (window.innerWidth > 1000 && this.isMenuOpen) {
        this.closeMenu();
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
</script>

<template>
  <header :class="['header', { 'scrolled': isScrolled }]">
    <div class="container">

      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo" />
      </div>

      <!-- Botón hamburguesa (solo visible en móvil) -->
      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <!-- Navegación -->
      <nav :class="['nav', { open: isMenuOpen }]">
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#presentation' }">Inicio</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#check-features' }">Caracteristicas</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#products' }">Productos</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#calendar' }">Agenda</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#footer' }">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>


.nav {
  display: flex;
  flex: 1;
  gap: 2.3rem;
  padding: 1rem 1rem 1rem 3rem;
  justify-content: flex-start; /* Links alineados a la izquierda */

}


.logo {
  font-weight: bold;
  font-size: 1.5rem;
  gap: 18rem;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;     /* Centra verticalmente */
         /* O ajusta la altura según necesites */
}

.logo img {
  width: 50px;
  height: auto;
}

.header {
  overflow: hidden;
  position: fixed;
  height: 66px;
  top: 0; /* Se queda pegado al tope al hacer scroll */
  width: 100%;
  z-index: 1000; /* asegúrate de que esté por encima del resto */
  background-color: transparent; /* importante para que no sea transparente */
  transition: background-color 0.09s ease, transform 0.09s ease;
  padding: 0 16px 0 24px ;
}

.container {
  display: flex;
  width: 100%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  height: 100%;
  max-width: 1500px;
  align-items: center;
  justify-content: space-between; /* Distribuye espacio uniformemente */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  background-color: transparent;

}

.header.scrolled {
  background-color: #034846;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}


.hamburger {
  min-width: 55px;
  font-size: 2rem;
  background: none;
  border: none;
  display: none; /* oculto en desktop */
  color: #ffffff;
}
.nav a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.nav.open a {
  color: black; /* Cambia este color por el que desees */
}

.nav.open {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 60px;
  right: 1rem;
  background: white;
  padding: 1rem 1rem 1rem 1rem;
  width: 200px; /* Ajusta el ancho según tu diseño */
  max-height: calc(100vh - 40px); /* Altura máxima dinámica según la pantalla */
  overflow-y: auto; /* Muestra la barra solo si es necesario */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
  justify-content: flex-start;
  z-index: 9999; /* asegúrate de que esté por encima del resto */
}

/* Estilo para Chrome, Edge y Safari */
.nav.open::-webkit-scrollbar {
  width: 8px;
}

.nav.open::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

/* Estilos responsive */
@media (max-width: 1000px) {
  .hamburger {
    display: block; /* visible en móviles */
  }
  .nav {
    display: none; /* oculto por defecto */
  }
  .header{
    height: 82px;
    background-color: #034846;
  }
}

@media (max-width: 756px) {
  .header{
    height: 50px;
  }

  .hamburger {
    height: 100%;
  }
}

@media (max-width: 590px) {
  .logo {
    margin-right: 2rem;
  }

}

@media (max-width: 473px) {
  .header {
    padding: 0.35rem 1.4rem 0rem 2.1rem;
  }

}

</style>