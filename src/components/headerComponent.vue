<template>
  <header id="header">
    <div class="center">
      <!--LOGO-->
      <div id="logo">
        <router-link v-bind:to="'/'">
          <img src="../assets/images/logo.png" class="imgLogo" alt="logo" />
        </router-link>
        <span id="brand">
          <p>My<strong>Blog</strong></p>
        </span>
      </div>

      <!--MENU-->
      <nav id="menu">
        <ul>
          <li>
            <router-link v-bind:to="'/'">Home</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/aboutFront'">About the Front</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/aboutBack'">About the Back</router-link>
          </li>
        </ul>
      </nav>

      <!--Cleaning the floats-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
};
</script>

