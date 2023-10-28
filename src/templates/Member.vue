<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <Sidebar>

      <template #header>
        <Logo />
      </template>
      <template #default>
        <Menu>
          <MenuSection>
            <MenuItem to="/recipes">Recipes</MenuItem>
            <MenuItem to="/feeds">Feeds</MenuItem>
            <MenuItem to="/browser">Browser</MenuItem>
            <MenuItem to="/friends">Friends</MenuItem>
            <MenuItem to="/schedule">Schedule</MenuItem>
            <MenuItem to="/list">List</MenuItem>
            <MenuItem to="/api-test">Api Test</MenuItem>
          </MenuSection>
        </Menu>

      </template>
      <template #footer>
        <div class="divider divider-horizontal mb-0" />
        <ProfileNavItem />
      </template>
    </Sidebar>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="postcss">
:deep() {
  .sidebar {
    width: 200px;
    @apply flex-shrink-0;
  }

  h1 {
    @apply text-xl font-bold;
  }
}

main {
  @apply flex-1 p-5;
}
</style>
