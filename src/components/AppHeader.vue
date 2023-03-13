<script setup lang="ts"></script>

<template>
  <header>
    <div class="container">
      <router-link to="/" class="navbar-brand">QR Reader</router-link>
      <div>
        <nav>
          <ul>
            <li><router-link to="/" class="nav-link">Scan</router-link></li>
            <li>
              <router-link to="/history" class="nav-link">History</router-link>
            </li>
            <li>
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #f9f9fe;
  border-bottom: 1px solid #e4e5fc;
  box-shadow: 0 1px 3px #b8bce854;
  padding: 0.5em;

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: auto;

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
            color: #303030;
          }

          .nav-link.router-link-active,
          .nav-link:hover {
            background-color: #6a7cfd;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
