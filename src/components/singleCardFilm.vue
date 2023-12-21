<template lang="">
    
    <article class="col-sm-12 col-md-6 col-lg-4 g-2 p-2">
       <!-- <h3>
            {{card.original_title}}
        </h3>-->
        <img class="w-100" :src="'https://image.tmdb.org/t/p/w500' + store.backdrop_path" alt="">
        <div class="info p-2 ">
        <h5>Titolo:{{store.title}}</h5>
        <h5>Titolo Originale:{{store.original_title}}</h5>
        <h5>Voto:{{store.vote_average}}</h5>
        <p>Overview: {{store.overview}}</p>
        </div>
    </article>
</template>
<script>
import { store } from '../js/store';
export default {
    data() {
        return {
            store,
        }
    },
   /* props:{
           card : {
            type: Object,
            required: true,
           }
    }*/
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