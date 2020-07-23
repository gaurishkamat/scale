<template>
    <scale-link
        :block="block"
        :custom-lass="customClass"
        :disabled="JSON.stringify(disabled)"
        :href="href"
        :icon="icon"
        :icon-size="iconSize"
        :target="target"
        :underline="JSON.stringify(underline)"
        :variant="variant"
    >
        <slot></slot>
    </scale-link>
</template>

<script>
export default {
    props: {
        block: {type: Boolean, default: false },
        customClass: String,
        disabled: {type: Boolean, default: false},
        href: String,
        icon: String,
        iconSize: {type: Number, default: 16},
        target: {type: String, default: '_self'},
        underline: Boolean,
        variant: String
    }

}
</script>
