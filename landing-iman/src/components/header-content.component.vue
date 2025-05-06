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
      <!-- Botón hamburguesa (solo visible en móvil) -->
      <div class="spacer"></div>

      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <nav :class="['nav', { open: isMenuOpen }]">
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#presentation' }">Inicio</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#products' }">Productos</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#check-features' }">Personalización</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#contacts' }">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
a {
  text-decoration: none;
  color: #333;
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
}
.container {
  max-width: 1200px;
  margin: 0 auto;
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
  background: lightpink;
  border: none;
  display: none; /* oculto en desktop */
  padding: 0.95rem 1.35rem;
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