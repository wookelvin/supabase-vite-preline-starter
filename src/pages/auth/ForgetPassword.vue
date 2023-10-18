<script setup lang="ts">
const data = ref({
  email: '',
})

const submitted = ref(false);

async function onSubmit() {
  submitted.value = true;

}

function reset() {
  data.value.email = '';
  submitted.value = false;
}
</script>

<template>
  <div>
    <h1>Forget Password?</h1>
    <Form class="grid gap-2 mt-3" @submit="onSubmit" v-if="!submitted">
      <FormInput label="Email" type="email" required v-model="data.email" />
      <Button variant="primary" type="submit">Submit</Button>
      <Button to="/auth/signin" icon-before="ph:arrow-left-light">Back to Sign In</Button>
    </Form>
    <div v-else class="mt-3 grid gap-5">
      <p>Please check your email for the next steps.</p>
      <Button @click="reset" icon-before="ph:arrow-left-light" class="bg-backgroundPrimary">Go Back</Button>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
