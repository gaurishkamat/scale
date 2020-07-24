<template>
    <scale-switch
    :active="active"
    :custom-class="customClass"
    :disabled="disabled"
    :icon-off="iconOff"
    :icon-on="iconOn"
    :icon-size="iconSize"
    :text-off="textOff"
    :text-on="textOn"
    >
    </scale-switch>
</template>

<script>
export default {
    props: {
        active: {type: Boolean, default: false},
        customClass: String,
        disabled: {type: Boolean, default: false},
        iconOff: String,
        iconOn: String,
        iconSize: {type: Number, default: 16},
        textOff: String,
        textOn: String
    }
}
</script>