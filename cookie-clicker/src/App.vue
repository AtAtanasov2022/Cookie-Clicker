<template>
  <div>
    <div v-if="loginPressed === false & registrationPressed === false">
      <button @click="pressLogin">Login</button>
      <br><br>
      <button @click="pressRegistration">Registration</button>
    </div>
    
    
    <login-component @valid-user="openClicker" v-if="loginPressed === true && activeUser === false"
      :users="this.userList"    
    ></login-component>
        
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
      ],
      neededUsername: '',
      activeUser: false
    };
  },

  methods: {
    pressLogin() {
      this.loginPressed = !this.loginPressed;
    },

    pressRegistration() {
      this.registrationPressed = !this.registrationPressed;
    },

    openClicker(username) {
      this.neededUsername = username;
      this.cookieClickerOn = true;
      this.activeUser = true;
    },

    addUser() {

    },
  }
  
}
</script>

<style>

</style>
