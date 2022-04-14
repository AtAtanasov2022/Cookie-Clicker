<template>
  <section>
    <input type="text" placeholder="Email:" v-model="userEmail" />
    <br /><br />
    <input type="text" placeholder="Username:" v-model="username" />
    <br /><br />
    <input type="text" placeholder="Password" v-model="userPass" />
    <br /><br />
    <input
      type="text"
      placeholder="Confirm password"
      v-model="userConfirmPass"
    />
    <br /><br />
    <button @click="pressRegistration">Registration</button>
    <br /><br />
    <button @click="backToMain">Back to main</button>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      Type: Array,
      required: true,
    },
  },

  data() {
    return {
      userEmail: "",
      username: "",
      userPass: "",
      userConfirmPass: "",
      matchingUsername: false,
      matchingEmail: false,
    };
  },

  methods: {
    pressRegistration() {
      this.matchingEmail = false;
      this.matchingUsername = false;

      if (this.userPass === this.userConfirmPass && this.userPass != "") {
        for (let index = 0; index < this.users.length; index++) {
          if (this.userEmail === this.users[index].email) {
            this.matchingEmail = true;
          }
        }

        if (this.matchingEmail === true) {
          alert("The email is already used!");
        } else {
          if (
            this.userEmail.endsWith("@gmail.com") ||
            this.userEmail.endsWith("@abv.bg")
          ) {
            for (
              let index = 0;
              index < this.users.length && this.matchingUsername === false;
              index++
            ) {
              if (this.username === this.users[index].username) {
                this.matchingUsername = true;
              }
            }

            if (this.matchingUsername === true) {
              alert("That username is taken. Enter different username.");
            } else {
              this.$emit(
                "user-registration",
                this.userEmail,
                this.username,
                this.userPass
              );
            }
          } else {
            alert("Invalid email");
          }
        }
      } else {
        alert("No password entered/Passwords do not match");
      }
    },

    backToMain() {
      this.$emit("back-to-main");
    },
  },
};
</script>

<style scoped>
</style>