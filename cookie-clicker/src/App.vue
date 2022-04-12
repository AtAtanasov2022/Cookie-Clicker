<template>
  <div>
    <div v-if="loginPressed === false & registrationPressed === false">
      <button @click="pressLogin">Login</button>
      <button @click="pressRegistration">Registration</button>
    </div>
    
    <login-component v-if="loginPressed === true"></login-component>
    
    <registration-component v-if="registrationPressed === true"></registration-component>
    
    <cookie-clicker v-if="cookieClickerOn === true"></cookie-clicker>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginPressed: false,
      registrationPressed: false,
      cookieClickerOn: false,
      userList: [
        {
          username: 'John',
          password: '1234',
          email: 'john@gmail.com',
          cookies: 0
        }
      ]
    };
  },

  methods: {
    pressLogin() {
      this.loginPressed = !this.loginPressed;
    },

    pressRegistration() {
      this.registrationPressed = !this.registrationPressed;
    },
  }
  
}
</script>

<style>

</style>
