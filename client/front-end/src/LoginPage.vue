<template>
  <div>
    <v-container>
      <v-card class="elevation-12">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              label="Username"
              v-model="username"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
            ></v-text-field>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-form>
          <v-alert v-if="error" type="error">{{ error }}</v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        alert('Login successful!');
      } else {
        this.error = 'Incorrect username or password.';
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
