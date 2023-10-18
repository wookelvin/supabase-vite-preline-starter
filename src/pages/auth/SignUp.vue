<script setup lang="ts">
const data = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})
async function onSubmit() {

}
</script>

<template>
  <div>
    <h1>Sign Up</h1>
    <Form class="grid gap-2 mt-3" @submit="onSubmit">
      <div class="grid gap-2 grid-cols-2">
        <FormInput label="First Name" type="text" required v-model="data.firstName" />
        <FormInput label="Last Name" type="text" required v-model="data.lastName" />
      </div>
      <FormInput label="Email" type="email" required v-model="data.email" />
      <FormInput label="Password" type="password" required v-model="data.password" />
      <Button variant="primary" type="submit">Submit</Button>
      <Button to="/auth/signin" icon-before="ph:arrow-left-light">Back to Sign In</Button>
    </Form>
  </div>
</template>

<style scoped lang="postcss"></style>
