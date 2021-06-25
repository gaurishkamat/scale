<template>
  <div>
    <top-bar></top-bar>
    <scale-button>Click!</scale-button>
    <scale-footer></scale-footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ScaleButton } from '@telekom/scale-components-vue';
  import TopBar  from './components/TopBar/TopBar.vue';
  import ScaleFooter  from './components/Footer/Footer.vue';

  export default Vue.extend({
    name: 'app',
    components: { ScaleFooter, ScaleButton, TopBar },
  });
</script>
