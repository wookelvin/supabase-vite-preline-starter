<script setup lang="ts">
import { Icon } from '@iconify/vue';

const url = ref('');
const iframe = ref<HTMLIFrameElement>();
const iframeUrl = ref('');



function onSubmit() {
  console.log('submitting');
  const r = Math.random() * 1000;
  iframeUrl.value = '/.netlify/functions/proxy?target_url=' + encodeURIComponent(url.value);
}
</script>

<template>
  <div class="flex items-center gap-2 my-5">
    <h1>Browser</h1>
    <Button>
      <Icon icon="iconoir:arrow-left" />
    </Button>
    <Button>
      <Icon icon="iconoir:refresh" />
    </Button>
    <form @submit.stop.prevent="onSubmit" class="block w-full">
      <FormInput v-model="url" placeholder="https://" class="w-full" />
    </form>
  </div>

  <div class="grid grid-cols-3 gap-3">
    <div class="col-span-2">
      <iframe :src="iframeUrl" ref="iframe" />
    </div>
    <div class="flex items-center justify-center bg-gray-800 rounded-lg">
      <div>
        <div>No Recipe Found</div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="postcss">
iframe {
  @apply w-full rounded-lg;
  height: calc(100vh - 130px);
  background: #555;
}
</style>
