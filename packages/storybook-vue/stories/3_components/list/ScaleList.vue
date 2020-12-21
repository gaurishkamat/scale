<script>
export default {
  props: {
    ordered: { type: Boolean },
    styles: { type: Object }
  },
  render() {
    return this.$slots.default
  }
}
</script>