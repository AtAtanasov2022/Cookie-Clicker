<template>
  <section>
    <input type="text" placeholder="Username" v-model="username" />
    <br /><br />
    <input type="text" placeholder="Password" v-model="password" />
    <br /><br />
    <button @click="checkUserInfo">Login</button>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      username: "",
      password: "",
      userFinded: false,
    };
  },

  methods: {
    checkUserInfo() {
      for (
        let index = 0;
        index < this.users.length && this.userFinded === false;
        index++
      ) {
        if (
          this.username == this.users[index].username &&
          this.password === this.users[index].password
        ) {
          this.$emit("valid-user", this.username);
          this.userFinded = true;
        }
      }

      if (this.userFinded === false) {
        alert("Not correct info");
      }
    },
  },
};
</script>

<style scoped>
</style>