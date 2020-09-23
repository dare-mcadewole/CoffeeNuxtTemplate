<template>
    <transition
        :name="id"
        :enter-active-class="`animate__animated animate__${speed} animate__${enter}`"
        :leave-active-class="leave ? `animate__animated animate__${speed} animate__${leave}` : ''"
        :appear="appear">
        <slot></slot>
    </transition>
</template>

<script lang="coffee">
export default
    name: 'animated'
    props:
        id:
            type: String
            required: true

        appear:
            type: Boolean
            default: true
        
        speed:
            type: String
            default: 'faster'
        
        enter:
            type: String
            default: 'fadeInDown'
        
        leave:
            type: String
            default: 'fadeOutUp'
</script>

<style lang="scss" scoped>

</style>