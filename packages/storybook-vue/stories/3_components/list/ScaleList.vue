<template>
    <scale-list
    :variant="variant">
        <scale-list-item
        :icon="icon"
        :icon-size="iconSize"
        :type="type">
            <slot></slot>
        </scale-list-item>
    </scale-list>
</template>

<script>
export default {
    props: {
        variant: {type: String, default: 'unordered'},
        icon: String,
        iconSize: {type: Number, default: 16},
        type: String
    }
}
</script>
