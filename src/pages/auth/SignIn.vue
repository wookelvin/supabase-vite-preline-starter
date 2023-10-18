<script setup lang="ts">
const data = ref({
  email: '',
  password: ''
})
async function onSubmit() {

}
</script>

<template>
  <div>
    <h1>Sign In</h1>
    <Form class="grid gap-2 mt-3" @submit="onSubmit">
      <FormInput label="Email" type="email" required v-model="data.email" />
      <FormInput label="Password" type="password" required v-model="data.password">
        <template #footer>
          <router-link to="/auth/password-reset" class="link link-underline">Forgot Password</router-link>
        </template>
      </FormInput>
      <Button variant="primary" type="submit">Submit</Button>
      <Button to="/auth/signup">Sign Up</Button>
    </Form>
  </div>
</template>

<style scoped lang="postcss"></style>
