<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <LoginPage />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import LoginPage from "./LoginPage.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    LoginPage,
  },

  data: () => ({
    //
  }),
};
</script>
