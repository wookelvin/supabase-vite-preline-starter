<script setup lang="ts">
const data = ref({
  password: '',
})

const submitted = ref(false);

async function onSubmit() {
  submitted.value = true;

}

</script>

<template>
  <div>
    <h1>Reset Password</h1>

    <Form class="grid gap-2 mt-3" @submit="onSubmit" v-if="!submitted">
      <p>Please enter a new password.</p>
      <FormInput label="New Password" type="password" required v-model="data.password" />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    <div v-else class="mt-3 grid gap-5">
      <p>Your password has been reset.</p>
      <Button to="/" variant="primary">Continue</Button>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
