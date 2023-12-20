<template lang="">
    <article class="w-100">
        <h3>
            {{card.original_title}}
        </h3>
    </article>
</template>
<script>
export default {
    props:{
           card : {
            type: Object,
            required: true,
           }
    }
}
</script>
<style lang="scss" scoped>
    
</style>