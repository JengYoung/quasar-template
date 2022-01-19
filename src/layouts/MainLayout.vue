<template>
  <q-layout view="hHh ppp lFf">
    <q-header class="header__inner inner" elevated>
      <q-toolbar>
        <q-toolbar-title> Welcome to JengYoung's Template! </q-toolbar-title>

        <div>{{ new Date().toLocaleDateString() }}</div>
      </q-toolbar>

      <q-footer>
        <q-toolbar class="footer-nav">
          <a href="" class="footer-nav__link">재영 소개</a>
          <a href="" class="footer-nav__link">오늘 목표</a>
          <a href="" class="footer-nav__link">마이페이지</a>
        </q-toolbar>
      </q-footer>
    </q-header>

    <q-page-container>
      <router-view />
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
      <div>f</div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 20px;
}
.header__inner {
  display: flex;
  background: var(--bg-black);
  align-items: center;
  height: 4rem;
}
.footer-nav {
  background: var(--bg-black);
  width: 100%;
  &__link {
    margin: 0 auto;
    text-decoration: none;
    color: var(--bg-white);
  }
}
</style>
