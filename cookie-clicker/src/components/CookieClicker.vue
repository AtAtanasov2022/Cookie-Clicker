<template>
    <section>
        <p> {{username}}'s cookies: {{ tempUserCookies + cookies }}</p>
        <button @click="addCookie">Cookie</button>
        <br><br>
        <button @click="logout">Logout</button>
    </section>
</template>

<script>
export default {
    props: {
        username: {
            Type: String,
            required: true
        },

        cookies: {
            Type: Number,
            required: true
        }
    },

    data() {
        return {
            tempUserCookies: 0      
        };
    },

    watch: {
      tempUserCookies() {
          if (this.tempUserCookies === 100) {
              this.$emit('update-cookies', this.tempUserCookies);
              this.tempUserCookies = 0;
          }
      }  
    },

    methods: {
        addCookie() {
            this.tempUserCookies++;
        },

        logout() {
            this.$emit('logout-emit', this.tempUserCookies);
        }
    }
}
</script>

<style scoped>

</style>