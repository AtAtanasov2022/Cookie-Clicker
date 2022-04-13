<template>
    <section>
        <input type="text" placeholder="Username" v-model="username">
        <input type="text" placeholder="Password" v-model="password">
        <button @click="checkUserInfo">Login</button>
    </section>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            username: '',
            password: ''
        };
    },

    methods: {
        checkUserInfo() {
            for (let index = 0; index < this.users.length; index++) {
                if (this.username === this.users[index].username && this.password === this.users[index].password) {
                    this.$emit('valid-user', this.username);
                }
            }
        }
    }
}
</script>

<style scoped>

</style>