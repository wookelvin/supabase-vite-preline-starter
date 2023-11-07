<script setup lang="ts">
const idStore = useIdentityStore();


</script>

<template >
  <ProfileSignIn v-if="!idStore.user" />
  <ProfileSignedIn v-else />
</template>

<style scoped lang="postcss"></style>
