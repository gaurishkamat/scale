import Vue from 'vue'
import App from "./App.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import {
  defineCustomElements,
  applyPolyfills
} from "@scaleds/components-telekom/loader";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About }
  ]
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/scale-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
