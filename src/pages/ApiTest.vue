<script setup lang="ts">
async function helloWorld() {
  const rand = Math.random() * 1000000;
  const response = await (await fetch(`/.netlify/functions/hello`, { method: 'GET' })).json();
  console.log('body', response);
  // const { data, error } = await supabase.functions.invoke('hello-world', {
  //   body: { name: 'Functions' },
  // })
  // console.log('data', data, error);
}
</script>

<template >
  <h1>Api Test</h1>
  <Button @click="helloWorld()">Hello World</Button>
</template>

<style scoped lang="postcss"></style>
