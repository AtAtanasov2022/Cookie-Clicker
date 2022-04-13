<template>
    <section>
        <p> {{username}}'s cookies: {{ userCookies }}</p>
        <button @click="addCookie">Cookie</button>
    </section>
</template>

<script>
export default {
    props: {
        username: {
            Type: String,
            required: true
        }
    },

    data() {
        return {
            userCookies: 0      
        };
    },

    methods: {
        addCookie() {
            this.userCookies++;
        }
    }
}
</script>

<style scoped>

</style>