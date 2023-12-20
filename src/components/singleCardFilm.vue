<template lang="">
    
    <article class="col-sm-12 col-md-6 col-lg-4 g-2 p-2">
       <!-- <h3>
            {{card.original_title}}
        </h3>-->
        <img class="w-100" :src="'https://image.tmdb.org/t/p/w500' + card.backdrop_path" alt="">
        <div class="info p-2 ">
        <h5>Titolo:{{card.title}}</h5>
        <h5>Titolo Originale:{{card.original_title}}</h5>
        <h5>Voto:{{card.vote_average}}</h5>
        <p>Overview: {{card.overview}}</p>
        </div>
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
           object-fit: cover;
        
        }
    }

  div.info{
    display: none;

  }
  article:hover div.info{
    display: inline-block;
    background-color: black;
    color: white;
    
  }

  article:hover img{
        display: none;
    }


</style>