import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import {
  defineCustomElements,
  applyPolyfills
} from "@scaleds/components-telekom/loader";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import "@scaleds/components-telekom/dist/scale-components/scale-components.css";

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const router = new VueRouter({
  mode: "history",
  routes: [
    { component: About, name: "Mobilfunk Menu", path: "/" },
    { component: Home, name: "Tarife & Optionen", path: "/tarife-optionen" },
    { component: Home, name: "Smartphone-Tarife", path: "/smartphone-tarife" },
    { component: Home, name: "Prepaid-Tarife", path: "/prepaid-tarife" },
    { component: Home, name: "Young-Tarife", path: "/young-tarife" },
    { component: Home, name: "Daten-Tarife", path: "/daten-tarife" },
    { component: Home, name: "Zweitkarten", path: "/zweitkarten" },
    {
      component: Home,
      name: "Vertrag verlängern",
      path: "/vertrag-verlaengern"
    },
    { component: Home, name: "Zubuchoptionen", path: "/zubuchoptionen" },
    { component: Home, name: "Geräte", path: "/geraete" },
    { component: Home, name: "Smartphones", path: "/smartphones" },
    { component: Home, name: "Tablets", path: "/tablets" },
    { component: Home, name: "Smartwatches", path: "/smartwatches" },
    {
      component: Home,
      name: "Handys ohne Vertrag",
      path: "/handys-ohne-vertrag"
    },
    {
      component: Home,
      name: "Surfsticks & Router",
      path: "/surfsticks-router"
    },
    { component: Home, name: "Smart Connect", path: "/smart-connect" },
    { component: Home, name: "Alle Geräte", path: "/alle-geraete" },
    { component: Home, name: "Zubehör", path: "/zubehoer" },
    { component: Home, name: "Taschen & Hüllen", path: "/taschen-huellen" },
    { component: Home, name: "Kopfhörer", path: "/kopfhoerer" },
    { component: Home, name: "Autozubehör", path: "/autozubehoer" },
    { component: Home, name: "Virtual Reality", path: "/virtual-reality" },
    { component: Home, name: "Lautsprecher", path: "/lautsprecher" },
    {
      component: Home,
      name: "Lader, Kabel, Adapter",
      path: "/lader-kabel-adapter"
    },
    {
      component: Home,
      name: "Alle Zubehörartikel",
      path: "/alle-zubehoerartikel"
    },
    { component: Home, name: "Apps & Dienste", path: "/apps-dienste" },
    { component: Home, name: "MeinMagenta App", path: "/meinmagenta-app" },
    { component: Home, name: "Sicherheit & Cloud", path: "/sicherheit-cloud" },
    { component: Home, name: "Kommunikation", path: "/kommunikation" },
    { component: Home, name: "Konnektivität", path: "/konnektivitaet" },
    { component: Home, name: "Musik & Videos", path: "/musik-videos" },
    { component: Home, name: "StreamOn", path: "/stream-on" },
    { component: Home, name: "Was ist 5G", path: "/was-ist-5g" },
    { component: Home, name: "5G Mobilfunk", path: "/5g-mobilfunk" },
    {
      component: Home,
      name: "5G-fähige Mobilfunktarife",
      path: "/5g-faehige-mobilfunktarife"
    },
    { component: Home, name: "5G Cloud Gaming", path: "/5g-cloud-gaming" },
    {
      component: Home,
      name: "5G Augmented & Virtual Reality",
      path: "/5g-augmented-virtual-reality"
    },
    { component: Home, name: "5G Smart City", path: "/5g-smart-city" },
    {
      component: Home,
      name: "Festnetz & Internet",
      path: "/festnetz-internet"
    },
    { component: Home, name: "First", path: "/first" },
    { component: Home, name: "FirstOne", path: "/first-one" },
    { component: Home, name: "One", path: "/one" },
    { component: Home, name: "Second", path: "/second" },
    { component: Home, name: "SecondOne", path: "/second-one" },
    { component: Home, name: "TV", path: "/tv" },
    { component: Home, name: "MagentaEINS", path: "/magentaeins" },
    { component: Home, name: "Service", path: "/service" }
  ]
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/scale-\w*/];

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
