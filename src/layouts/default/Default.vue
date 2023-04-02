<script setup>
import Footer from "@/layouts/default/Footer.vue";
</script>

<template>
  <v-app>
    <v-app-bar :style="{ backgroundColor: '#000' }">
      <v-app-bar-nav-icon
        variant="text"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        src="@/assets/main-logoc.webp"
        height="200px"
        :style="{ left: '-20px' }"
      ></v-img>
    </v-app-bar>

    <v-navigation-drawer
      color="grey-darken-4"
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.value"
          @click="drawer = false"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main :style="{ backgroundColor: '#222' }">
      <v-container :style="{ backgroundColor: '#000' }">
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Home",
        value: "home",
      },
      {
        title: "Gallery",
        value: "gallery",
      },
      {
        title: "Order",
        value: "order",
      },
      {
        title: "Contact",
        value: "contact",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
