<script setup lang="ts">

</script>

<template >
  <div class="dropdown w-full">
    <label class="hover:bg-backgroundPrimary block w-full" tabindex="0">
      <div class="flex p-5 gap-3 items-center">
        <div class="avatar">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
        </div>
        <div>
          <div class="field-name">John Doe</div>
          <div class="field-email">john.doe@gmail.com</div>
        </div>
      </div>
    </label>
    <div class="dropdown-menu dropdown-menu-right-top">
      <a class="dropdown-item text-sm">Profile</a>
      <a tabindex="-1" class="dropdown-item text-sm">Account settings</a>
      <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.field-name {
  @apply text-lg leading-none mb-1;
}

.field-email {

  @apply text-sm text-content2 leading-none;
}
</style>
