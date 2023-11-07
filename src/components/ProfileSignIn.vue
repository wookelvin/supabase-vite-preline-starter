<script setup lang="ts">

const identityStore = useIdentityStore();


function showSignIn() {
  identityStore.signIn();

}
</script>

<template >
  <Menu>
    <MenuItem @click="showSignIn">Sign In</MenuItem>
  </Menu>
</template>

<style scoped lang="postcss"></style>
