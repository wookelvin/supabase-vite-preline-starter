<script setup lang="ts">


async function helloWorld() {
  const { data, error } = await supabase.functions.invoke('hello-world', {
    body: { name: 'Functions' },
  })
  console.log('data', data, error);
}


async function proxy() {
  const url = encodeURIComponent('https://www.allrecipes.com/recipe/68461/buffalo-chicken-dip/');
  const { data, error } = await supabase.functions.invoke(`proxy?target_url=${url}`, {
    method: 'GET',
  })
  console.log('data', data, error);
}
</script>

<template >
  <h1>Api Test</h1>
  <Button @click="helloWorld">Hello World</Button>
  <Button @click="proxy">Proxy</Button>
</template>

<style scoped lang="postcss"></style>
