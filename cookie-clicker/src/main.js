import { createApp } from 'vue'
import App from './App.vue'

import Login from "./components/Login.vue"
import Registration from "./components/Registration.vue"
import CookieClicker from "./components/CookieClicker.vue"

const app = createApp(App);

app.component('login-component', Login);
app.component('registration-component', Registration);
app.component('cookie-clicker', CookieClicker);

app.mount('#app');

