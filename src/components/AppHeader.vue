<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<template>
  <header>
    <router-link to="/" class="navbar-brand">QR Reader</router-link>
    <div>
      <nav :class="{ 'show-menu': showMenu }">
        <button
          type="button"
          title="Show navigation menu"
          @click="showMenu = true"
        >
          <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </button>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9fe;
  border-bottom: 1px solid #e4e5fc;
  box-shadow: 0 1px 3px #b8bce854;
  padding: 0.5em;

  .navbar-brand {
    text-decoration: none;
    background: linear-gradient(to right, #0a85ed, #0c63e7, #0d41e1);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
  }

  nav {
    button {
      border: 1px solid #e4e5fc;
      box-shadow: 1px 1px 3px #b8bce854;
      display: none;
    }

    ul {
      list-style: none;
      display: flex;
      margin-block-start: unset;
      margin-block-end: unset;
      padding-inline-start: 0;
      font-size: 1.2rem;

      li {
        margin: 0.5em;
        margin-right: 0;

        .nav-link {
          border-radius: 0.25em;
          text-decoration: none;
          padding: 0.5em 1em;
          transition: background-color 0.4s, color 0.4s;
          font-weight: 700;
          color: #303030
        }

        .nav-link.router-link-active,
        .nav-link:hover {
          background-color: #6a7cfd;
          color: #fff;
        }
      }
    }
  }

  nav.show-menu {
    ul {
      display: block;
    }
  }
}

@media screen and (min-width: 768px) {
  header {
    nav,
    nav.show-menu {
      button {
        display: none;
      }

      ul {
        display: flex;
      }
    }
  }
}
</style>
