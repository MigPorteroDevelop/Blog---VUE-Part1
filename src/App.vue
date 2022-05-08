<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <router-view></router-view>
      <SideBarComponent></SideBarComponent>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/headerComponent.vue";
import SliderComponent from "./components/sliderComponent.vue";
import SideBarComponent from "./components/sideBarComponent.vue";
import FooterComponent from "./components/footerComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SliderComponent,
    SideBarComponent,
    FooterComponent,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
