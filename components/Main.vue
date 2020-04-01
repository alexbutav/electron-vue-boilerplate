<template>
    <span class="title">{{ title }}</span>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Test'
            }
        }
    }
</script>

<style lang="scss">
    $main-color: blue;

    .title { 
        font-weight: bold; 
        font-size: 20pt; 
        color: $main-color;
    }
</style>