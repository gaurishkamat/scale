<script>
export default {
  props: {
    ariaLabel: { type: String },
    collapsible: { type: Boolean, default: false },
    collapsibleMediaQuery: { type: String, default: '' },
    collapsibleLabel: { type: String, default: 'Menu' },
    styles: { type: String }
  }
}
</script>