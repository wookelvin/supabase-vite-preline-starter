<script setup lang="ts">

</script>

<template>
  <div class="member-layout">
    <Sidebar>

      <template #header>
        <Logo />
      </template>
      <template #default>
        <Menu>
          <MenuItem to="/recipes">Recipes</MenuItem>
          <MenuItem to="/feeds">Feeds</MenuItem>
          <MenuItem to="/browser">Browser</MenuItem>
          <MenuItem to="/friends">Friends</MenuItem>
          <MenuItem to="/schedule">Schedule</MenuItem>
          <MenuItem to="/list">List</MenuItem>
          <MenuItem to="/api-test">Api Test</MenuItem>
        </Menu>

      </template>
      <template #footer>
        <ProfileMenu />
      </template>
    </Sidebar>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="postcss">
.member-layout {
  --sidebar-width: 225px;
}

:deep() {
  .sidebar {
    width: var(--sidebar-width);
    @apply fixed top-0 left-0 bottom-0;
  }

  h1 {
    @apply text-xl font-bold;
  }
}

main {
  @apply flex-1 p-5;
  margin-left: var(--sidebar-width);

}
</style>
