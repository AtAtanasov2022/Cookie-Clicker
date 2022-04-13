<template>
  <div>
    <header v-if="loginPressed === false & registrationPressed === false">
      <h1>Welcome to the basic cookie clicker!!!</h1>
      <h8>Learning project</h8>
    </header>
    <br>
    <div v-if="loginPressed === false & registrationPressed === false">
      <button @click="pressLogin">Login</button>
      <br><br>
      <button @click="pressRegistration">Registration</button>
    </div>
    
    
    <login-component @valid-user="openClicker" v-if="loginPressed === true && activeUser === false"
      :users="this.userList"    
    ></login-component>
        
    <registration-component v-if="registrationPressed === true"></registration-component>
    
    <cookie-clicker @update-cookies="updateUserCookies" v-if="cookieClickerOn === true"
      :username="neededUsername"
      :cookies="activeUserCookies"
    ></cookie-clicker>
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
      activeUser: false,
      activeUserCookies: 0
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

    updateUserCookies(cookies) {
      for (let index = 0; index < this.userList.length; index++) {
        if (this.neededUsername == this.userList[index].username) {
          this.userList[index].cookies = cookies;
          this.activeUserCookies = cookies;
        }
      }
    },

    //addUser() {

    //},
  }
  
}
</script>

<style>

</style>
