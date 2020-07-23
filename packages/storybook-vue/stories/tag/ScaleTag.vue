<template>
    <scale-tag
    :custom-class="customClass"
    :disabled="disabled"
    :dismissable="dismissable"
    :href="href"
    :size="size"
    :target="target"
    :variant="variant"
    >
    <slot></slot>
    </scale-tag>
</template>

<script>
export default {
    props: {
        customClass: String,
        disabled: {type: Boolean, default: false},
        dismissable: {type: Boolean, default: false},
        href: String,
        size: String,
        target: {type: String, default: '_self'},
        variant: String
    }
}
</script>