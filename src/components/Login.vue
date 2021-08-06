<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div>
      <q-btn
        label="Login"
        type="submit"
        color="primary"
        class="full-width"
        @click="login"
      />
      <q-btn
        flat
        rounded
        color="primary"
        label="New User ?"
        to="/register"
        class="full-width q-mt-sm"
      />
    </div>
  </div>
  <!-- <h5>Dashboard</h5>
  <button v-if="!auth?.isAuthenticated.value" @click="login">Log in</button>
  <button v-if="auth?.isAuthenticated.value" @click="logout">Log out</button> -->
</template>

<script>
import { defineComponent, reactive, inject, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    // const store = inject("store");
    const router = useRouter();

    const auth = inject("auth");

    // auth
    //   .getIdTokenClaims()
    //   .then((data) => {
    //     console.log("token");
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    // console.log(auth.user.value);

    //  getIdTokenClaims,
    // getTokenSilently,
    // getTokenWithPopup,

    // console.log(auth);

    // onBeforeMount(() => {
    //   if (auth.isAuthenticated.value) {
    //     router.push("/dashboard");
    //   } else {
    //   }

    //   //  router.push("/dashboard");
    // });

    function login() {
      auth.loginWithRedirect();
    }

    function logout() {
      auth.logout({
        returnTo: "http://localhost:8080/tax-return",
      });
    }

    return {
      auth,
      login,
      logout,
    };
  },
});
</script>

<style>
</style>