<template lang="">
    <article class="col-sm-12 col-md-6 col-lg-4 border border-light p-0">
       <!-- <h3>
            {{card.original_title}}
        </h3>-->
        <img class="w-100" :src="'https://image.tmdb.org/t/p/w500' + card.backdrop_path" alt="">
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
    article{
        img{
            height: 400px;
           object-fit: cover
        }
    }
</style>