<template>
    <a @click="go" class="text-blue-500 font-medium flex justify-start items-center mb-5">
        <i class="ion-ios-arrow-back mr-2"></i>
        Back
    </a>
</template>

<script lang="coffee">
export default
    name: 'back'
    props:
        url:
            type: String

    methods:
        go: ->
            if @url
                @$router.push @url
            else
                @$router.back()
</script>

<style lang="scss" scoped>

</style>