<template>
    <section>
        <p> {{username}}'s cookies: {{ tempUserCookies + cookies }}</p>
        <button @click="addCookie">Cookie</button>
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
      userCookies() {
          if (this.tempUserCookies === 100) {
              this.$emit('update-cookies', this.tempUserCookies);
          }
      }  
    },

    methods: {
        addCookie() {
            this.tempUserCookies++;
        }
    }
}
</script>

<style scoped>

</style>