import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from './routes'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
