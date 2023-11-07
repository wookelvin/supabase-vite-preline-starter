import { defineStore } from "pinia";
import * as netlifyIdentity from "netlify-identity-widget";

export const useIdentityStore = defineStore("identity", () => {
  const user = ref<netlifyIdentity.User | null>(null);

  const initialized = ref(false);

  function init() {
    if (initialized.value) {
      return;
    }

    netlifyIdentity.on("init", onInit);
    netlifyIdentity.on("login", onLogin);
    netlifyIdentity.on("logout", onLogout);
    netlifyIdentity.on("error", onError);
    initialized.value = true;

    netlifyIdentity.init({
      // container: "#signInModal",
      locale: "en",
    });

    // netlifyIdentity.on("open", () => console.log("Widget opened"));
    // netlifyIdentity.on("close", () => console.log("Widget closed"));
  }

  function onInit(netlifyUser: netlifyIdentity.User) {
    user.value = netlifyUser || null;
    console.log("identity - init - user:", user.value);
  }

  function onLogin(netlifyUser: netlifyIdentity.User) {
    user.value = netlifyUser || null;
    console.log("identity - login - user:", user.value);
  }

  function onLogout() {
    user.value = null;
    console.log("identity - logout");
  }

  function onError(err: Error) {
    console.error("error", err);
    console.log("identity - error");
  }

  function signIn() {
    netlifyIdentity.open("login");
    console.log("identity - sign in");
  }

  function signOut() {
    netlifyIdentity.logout();
    console.log("identity - sign out");
  }

  init();

  return {
    init,
    user,
    initialized,
    signIn,
    signOut,
  };
});
