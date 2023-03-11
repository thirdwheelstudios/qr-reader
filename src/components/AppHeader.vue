<template>
  <header>
    <router-link to="/" class="navbar-brand">QR Reader</router-link>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;

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
    ul {
      list-style: none;
      display: flex;
      margin-block-start: unset;
      margin-block-end: unset;
      padding-inline-start: 0;

      li {
        margin-left: 1rem;
      }
    }
  }
}
</style>
