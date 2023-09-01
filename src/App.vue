<template>
  <div id="app">
    <HeaderComponent/>
    <MainPage/>

   
    <FooterComponent/>

  </div>
</template>

<script>

import HeaderComponent from "./components/blocks/Header.vue";
import MainPage from './components/pages/MainPage.vue';
import FooterComponent from "./components/blocks/Footer.vue";


export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainPage,
    FooterComponent, 
  }
}
</script>

<style>
#app {
  font-family: DM Serif Display, Jost, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

body {
  background-color: rgba(255, 255, 255, 1);
}
</style>
