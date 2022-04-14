<template>
  <div>
    <header v-if="loginPressed === false && registrationPressed === false">
      <h1>Welcome to the basic cookie clicker!!!</h1>
      <h8>Learning project</h8>
    </header>
    <br />
    <div v-if="(loginPressed === false) & (registrationPressed === false)">
      <button @click="pressLogin">Login</button>
      <br /><br />
      <button @click="pressRegistration">Registration</button>
    </div>

    <login-component
      @valid-user="openClicker"
      v-if="loginPressed === true && activeUser === false"
      :users="this.userList"
    ></login-component>

    <registration-component
      @user-registration="addUser"
      @back-to-main="logout"
      v-if="registrationPressed === true && registrationPressed2 === false"
      :users="userList"
    ></registration-component>

    <cookie-clicker
      @update-cookies="updateUserCookies"
      @logout-emit="logout"
      v-if="cookieClickerOn === true"
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
      registrationPressed2: false,
      cookieClickerOn: false,
      userList: [
        {
          username: "John",
          password: "1234",
          email: "john@gmail.com",
          cookies: 0,
        },
      ],
      neededUsername: "",
      activeUser: false,
      activeUserCookies: 0,
    };
  },

  methods: {
    pressLogin() {
      this.loginPressed = !this.loginPressed;
    },

    pressRegistration() {
      this.registrationPressed = !this.registrationPressed;
      this.registrationPressed2 = false;
    },

    openClicker(username) {
      this.neededUsername = username;
      this.cookieClickerOn = true;
      this.activeUser = true;
      for (let index = 0; index < this.userList.length; index++) {
        if (this.neededUsername == this.userList[index].username) {
          this.activeUserCookies = this.userList[index].cookies;
        }
      }
    },

    updateUserCookies(cookies) {
      for (let index = 0; index < this.userList.length; index++) {
        if (this.neededUsername == this.userList[index].username) {
          this.userList[index].cookies = cookies;
          this.activeUserCookies = cookies;
        }
      }
    },

    logout(cookies2) {
      for (let index = 0; index < this.userList.length; index++) {
        if (this.neededUsername == this.userList[index].username) {
          this.userList[index].cookies += cookies2;
        }
      }

      this.neededUsername = "";
      this.activeUser = false;
      this.activeUserCookies = 0;
      this.loginPressed = false;
      this.registrationPressed = false;
      this.cookieClickerOn = false;
    },

    addUser(email, username, password) {
      let newUser = {
        username: username,
        password: password,
        email: email,
        cookies: 0,
      };

      this.userList.push(newUser);

      this.openClicker(newUser.username);
      this.registrationPressed2 = true;
    },
  },
};
</script>

<style>
</style>
