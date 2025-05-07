<script>
export default {
  name: 'header-content',
  data() {
    return {
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
    }
  }
}
</script>

<template>
  <header class="header">
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
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#products' }">Productos</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#check-features' }">Personalización</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#calendar' }">Agenda</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#contacts' }">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 1rem;
  justify-content: flex-start; /* Links alineados a la izquierda */
}
a {
  text-decoration: none;
  color: #333;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 60px;
  height: auto;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* asegúrate de que esté por encima del resto */
  background-color: white; /* importante para que no sea transparente */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* opcional, para un efecto bonito */
  border-bottom: 1px solid #ddd;
  padding: 0rem 2rem 0rem 2.1rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  gap: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
.hamburger {
  min-width: 55px;
  font-size: 1.5rem;
  background: none;
  border: none;
  display: none; /* oculto en desktop */
  padding: 0.45rem 0.23rem;
}
.nav a {
  text-decoration: none;
  color: #333;
}
.nav.open {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 60px;
  right: 1rem;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 200px; /* Ajusta el ancho según tu diseño */
  max-height: calc(100vh - 40px); /* Altura máxima dinámica según la pantalla */
  overflow-y: auto; /* Muestra la barra solo si es necesario */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
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
}
</style>