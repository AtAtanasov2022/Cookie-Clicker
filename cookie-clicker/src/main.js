import { createApp } from 'vue'
import App from './App.vue'

import LoginComponent from "./components/TheLogin.vue"
import RegistrationComponent from "./components/TheRegistration.vue"
import CookieClicker from "./components/CookieClicker.vue"

const app = createApp(App);

app.component('login-component', LoginComponent);
app.component('registration-component', RegistrationComponent);
app.component('cookie-clicker', CookieClicker);

app.mount('#app');