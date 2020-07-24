<template>
    <scale-slider
    :custom-class="customClass"
    :custom-color="customColor"
    :disabled="disabled"
    :label="label"
    :max="max"
    :min="min"
    :show-value="showValue"
    :step="step"
    :track-height="trackHeight"
    :value="value"
    >
    </scale-slider>
</template>

<script>
export default {
    props: {
        customClass: String,
        customColor: String,
        disabled: {type: Boolean, default: false},
        label: String,
        max: {type: Number, default: 100},
        min: {type: Number, default: 0},
        showValue: {type: Boolean, default: true},
        step: {type: Number, default: 1},
        trackHeight: Number,
        value: Number
    }
}
</script>