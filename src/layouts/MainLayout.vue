<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <span v-if="auth.user.value">Hi {{ Name }}</span>
        <!-- <q-btn
          flat
          round
          dense
          icon="account_circle"
          v-if="auth?.isAuthenticated.value"
          @click="logout"
        /> -->

        <!-- drop down start -->
        <q-btn-dropdown
          v-if="auth.user.value"
          stretch
          flat
          icon="account_circle"
          class="q-ml-xs"
        >
          <q-list>
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>
                <q-item-label>Signout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent, ref, inject, computed } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const auth = inject("auth");

    const Name = computed(() => auth.user.value.name);

    function logout() {
      auth.logout({
        returnTo: "http://localhost:8080",
      });
    }

    function reditectToHome() {
      router.push("/");
    }

    return {
      auth,
      Name,

      logout,
      reditectToHome,
    };
  },
});
</script>
