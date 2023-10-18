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
            <MenuItem>Recipes</MenuItem>
            <MenuItem>RSS Feed</MenuItem>
            <MenuItem>Browser</MenuItem>
            <MenuItem>Friends</MenuItem>
            <MenuItem>Schedule</MenuItem>
            <MenuItem>List</MenuItem>
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
    width: 300px;
    @apply flex-shrink-0;
  }
}

main {
  @apply flex-1 p-10;
}
</style>
