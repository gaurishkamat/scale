<template>
  <ScaleAppShell
    :mainNavigation="mainNavigation"
    :active-route-id="$route.name"
  >
    <router-view class="view"></router-view>
  </ScaleAppShell>
</template>

<script>
import Vue from "vue";
import { ScaleAppShell } from "@scaleds/components-vue-telekom";
// @ts-ignore
export default Vue.extend({
  name: "app",
  components: { ScaleAppShell },
  data: function() {
    return {
      mainNavigation: [
        {
          name: "Mobilfunk Menu",
          id: "Mobilfunk Menu",
          href: "/",
          onClick: event => {
            event.preventDefault();
            this.$router.push("/");
          },
          children: [
            {
              name: "Tarife & Optionen",
              id: "Tarife & Optionen",
              href: "/tarife-optionen",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/tarife-optionen");
              },
              children: [
                {
                  name: "Smartphone-Tarife",
                  id: "Smartphone-Tarife",
                  href: "/smartphone-tarife",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/smartphone-tarife");
                  }
                },
                {
                  name: "Prepaid-Tarife",
                  id: "Prepaid-Tarife",
                  href: "/prepaid-tarife",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/prepaid-tarife");
                  }
                },
                {
                  name: "Young-Tarife",
                  id: "Young-Tarife",
                  href: "/young-tarife",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/young-tarife");
                  }
                },
                {
                  name: "Daten-Tarife",
                  id: "Daten-Tarife",
                  href: "/daten-tarife",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/daten-tarife");
                  }
                },
                {
                  name: "Zweitkarten",
                  id: "Zweitkarten",
                  href: "/zweitkarten",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/zweitkarten");
                  }
                },
                {
                  name: "Vertrag verlängern",
                  id: "Vertrag verlängern",
                  href: "/vertrag-verlaengern",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/vertrag-verlaengern");
                  }
                },
                {
                  name: "Zubuchoptionen",
                  id: "Zubuchoptionen",
                  href: "/zubuchoptionen",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/zubuchoptionen");
                  }
                }
              ]
            },
            {
              name: "Geräte",
              id: "Geräte",
              href: "/geraete",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/geraete");
              },
              children: [
                {
                  name: "Smartphones",
                  id: "Smartphones",
                  href: "/smartphones",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/smartphones");
                  }
                },
                {
                  name: "Tablets",
                  id: "Tablets",
                  href: "/tablets",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/tablets");
                  }
                },
                {
                  name: "Smartwatches",
                  id: "Smartwatches",
                  href: "/smartwatches",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/smartwatches");
                  }
                },
                {
                  name: "Handys ohne Vertrag",
                  id: "Handys ohne Vertrag",
                  href: "/handys-ohne-vertrag",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/handys-ohne-vertrag");
                  }
                },
                {
                  name: "Surfsticks & Router",
                  id: "Surfsticks & Router",
                  href: "/surfsticks-router",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/surfsticks-router");
                  }
                },
                {
                  name: "Smart Connect",
                  id: "Smart Connect",
                  href: "/smart-connect",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/smart-connect");
                  }
                },
                {
                  name: "Alle Geräte",
                  id: "Alle Geräte",
                  href: "/alle-geraete",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/alle-geraete");
                  }
                }
              ]
            },
            {
              name: "Zubehör",
              id: "Zubehör",
              href: "/zubehoer",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/zubehoer");
              },
              children: [
                {
                  name: "Taschen & Hüllen",
                  id: "Taschen & Hüllen",
                  href: "/taschen-huellen",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/taschen-huellen");
                  }
                },
                {
                  name: "Kopfhörer",
                  id: "Kopfhörer",
                  href: "/kopfhoerer",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/kopfhoerer");
                  }
                },
                {
                  name: "Autozubehör",
                  id: "Autozubehör",
                  href: "/autozubehoer",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/autozubehoer");
                  }
                },
                {
                  name: "Virtual Reality",
                  id: "Virtual Reality",
                  href: "/virtual-reality",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/virtual-reality");
                  }
                },
                {
                  name: "Lautsprecher",
                  id: "Lautsprecher",
                  href: "/lautsprecher",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/lautsprecher");
                  }
                },
                {
                  name: "Lader, Kabel, Adapter",
                  id: "Lader, Kabel, Adapter",
                  href: "/lader-kabel-adapter",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/lader-kabel-adapter");
                  }
                },
                {
                  name: "Alle Zubehörartikel",
                  id: "Alle Zubehörartikel",
                  href: "/alle-zubehoerartikel",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/alle-zubehoerartikel");
                  }
                }
              ]
            },
            {
              name: "Apps & Dienste",
              id: "Apps & Dienste",
              href: "/apps-dienste",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/apps-dienste");
              },
              children: [
                {
                  name: "MeinMagenta App",
                  id: "MeinMagenta App",
                  href: "/meinmagenta-app",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/meinmagenta-app");
                  }
                },
                {
                  name: "Sicherheit & Cloud",
                  id: "Sicherheit & Cloud",
                  href: "/sicherheit-cloud",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/sicherheit-cloud");
                  }
                },
                {
                  name: "Kommunikation",
                  id: "Kommunikation",
                  href: "/kommunikation",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/kommunikation");
                  }
                },
                {
                  name: "Konnektivität",
                  id: "Konnektivität",
                  href: "/konnektivitaet",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/konnektivitaet");
                  }
                },
                {
                  name: "Musik & Videos",
                  id: "Musik & Videos",
                  href: "/musik-videos",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/musik-videos");
                  }
                },
                {
                  name: "StreamOn",
                  id: "StreamOn",
                  href: "/stream-on",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/stream-on");
                  }
                }
              ]
            },
            {
              name: "Was ist 5G",
              id: "Was ist 5G",
              href: "/was-ist-5g",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/was-ist-5g");
              },
              children: [
                {
                  name: "5G Mobilfunk",
                  id: "5G Mobilfunk",
                  href: "/5g-mobilfunk",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/5g-mobilfunk");
                  }
                },
                {
                  name: "5G-fähige Mobilfunktarife",
                  id: "5G-fähige Mobilfunktarife",
                  href: "/5g-faehige-mobilfunktarife",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/5g-faehige-mobilfunktarife");
                  }
                },
                {
                  name: "5G Cloud Gaming",
                  id: "5G Cloud Gaming",
                  href: "/5g-cloud-gaming",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/5g-cloud-gaming");
                  }
                },
                {
                  name: "5G Augmented & Virtual Reality",
                  id: "5G Augmented & Virtual Reality",
                  href: "/5g-augmented-virtual-reality",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/5g-augmented-virtual-reality");
                  }
                },
                {
                  name: "5G Smart City",
                  id: "5G Smart City",
                  href: "/5g-smart-city",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/5g-smart-city");
                  }
                }
              ]
            }
          ]
        },
        {
          name: "Festnetz & Internet",
          id: "Festnetz & Internet",
          href: "/festnetz-internet",
          onClick: event => {
            event.preventDefault();
            this.$router.push("/festnetz-internet");
          },
          children: [
            {
              name: "First",
              id: "First",
              href: "/first",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/first");
              },
              children: [
                {
                  name: "One",
                  id: "FirstOne",
                  href: "/first-one",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/first-one");
                  }
                },
                {
                  name: "One",
                  id: "One",
                  href: "/one",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/one");
                  }
                }
              ]
            },
            {
              name: "Second",
              id: "Second",
              href: "/second",
              onClick: event => {
                event.preventDefault();
                this.$router.push("/second");
              },
              children: [
                {
                  name: "One",
                  id: "SecondOne",
                  href: "/second-one",
                  onClick: event => {
                    event.preventDefault();
                    this.$router.push("/second-one");
                  }
                }
              ]
            }
          ]
        },
        {
          name: "TV",
          id: "TV",
          href: "/tv",
          onClick: event => {
            event.preventDefault();
            this.$router.push("/tv");
          }
        },
        {
          name: "MagentaEINS",
          id: "MagentaEINS",
          href: "/magentaeins",
          onClick: event => {
            event.preventDefault();
            this.$router.push("/magentaeins");
          }
        },
        {
          name: "Service",
          id: "Service",
          href: "/service",
          onClick: event => {
            event.preventDefault();
            this.$router.push("/service");
          }
        }
      ]
    };
  }
});
</script>

<style>
html {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

hr {
  margin: 3rem 0;
}
</style>
