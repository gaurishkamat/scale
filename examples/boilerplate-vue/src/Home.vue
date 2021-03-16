<template>
  <div>
    <h1>Vue App - Home</h1>
    <h3>Alert</h3>
    <scale-link variant="success">Success</scale-link>
    <h3>Button</h3>
    <scale-button>Click!</scale-button>
    <h3>Card</h3>
    <scale-card>A tile</scale-card>

    <span>The message is:</span>
    <p>{{ message }}</p>
    <br />
    <scale-text-field
      @scaleChange="handleChange"
      placeholder="add multiple lines"
      label="text field"
    ></scale-text-field>
    <scale-link underline="false">Textttt</scale-link>
  </div>
</template>

<script>
import Vue from 'vue'
import { ScaleButton } from "@scaleds/components-vue-telekom";

export default Vue.extend({
  name: "home",
  components: { ScaleButton },
  data: () => ({
    message: ""
  }),
  methods: {
    // @ts-ignore
    handleChange: function(event) {
      this.message = event.target.value;
    }
  }
});
</script>
