<script setup lang="ts">
import { Icon } from '@iconify/vue';


const idStore = useIdentityStore();

</script>

<template >
  <div class="dropdown dropdown-right dropdown-end" v-if="idStore.user">
    <label class="btn" tabindex="0">
      <div class="btn-contents">
        <div class="avatar">
          <div class="avatar-inner">
            <img v-if="idStore.user.user_metadata?.avatar_url" :src="idStore.user.user_metadata?.avatar_url"
              alt="avatar" />
            <Icon icon="clarity:avatar-solid" class="h-5 w-5" />
          </div>
        </div>
        <div>
          <div class="profile-name">{{ idStore.user.user_metadata?.full_name }}</div>
          <div class="profile-email">{{ idStore.user.email }}</div>
        </div>
      </div>

    </label>
    <ul taindex="0" class="dropdown-content">
      <li><button type="button" class="dropdown-item">Profile</button></li>
      <li><button type="button" tabindex="-1" class="dropdown-item">Account</button></li>
      <li><button type="button" @click="idStore.signOut()" tabindex="-1" class="dropdown-item">Sign Out</button></li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
label.btn {
  @apply block p-2 h-auto;
}

.btn-contents {
  @apply flex w-full items-center flex-row text-left gap-2;
}

.profile-name {
  @apply leading-4 normal-case line-clamp-1;
}

.profile-email {
  @apply text-sm normal-case font-light leading-4 line-clamp-1;
}

.avatar-inner {
  @apply w-10 h-10 rounded-full flex items-center justify-center bg-base-100;
}

.dropdown {
  @apply w-full;
}

.field-name {
  @apply text-lg mb-1;
}

.field-email {

  @apply text-sm;
}

.dropdown-content {
  @apply menu p-2 z-[1] shadow bg-base-200 rounded-box right-auto;

}

.dropdown-item {
  @apply whitespace-nowrap;
}
</style>
