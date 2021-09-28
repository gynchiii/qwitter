<template>
  <q-layout view="lHr LpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }} </span>
          <q-icon
            name="fas fa-dove"
            size="md"
            class="lt-sm header-icon q-pa-md"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above :width="283" v-model="leftDrawerOpen" side="left" bordered>
      <leftDrawer />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <searchComponent />
      <cardComponent />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import { ref } from "vue";
import searchComponent from "../components/searchComponent";
import cardComponent from "../components/cardComponent";
import Footer from "../components/Footer";
import leftDrawer from "../components/leftDrawer";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("mails"),
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: {
    searchComponent,
    cardComponent,
    Footer,
    leftDrawer,
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>