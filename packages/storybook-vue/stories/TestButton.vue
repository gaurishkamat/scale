<template>
  <button>
    <slot name="icon">🤟</slot>
    <span>{{ label }}</span>
  </button>
</template>

<style scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1ch 2rem;
  border: none;
  border-radius: 0.25em;
  background-color: cyan;
  font-size: 125%;
}

span {
  margin-inline-start: 1ch;
}
</style>

<script>
export default {
  props: {
    label: String
  }
}
</script>