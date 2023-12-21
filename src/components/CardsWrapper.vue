<template >
    <section class="container pt-5">
      <h1 class=" text-center pt-5 pb-5">Scegli il tuo Film preferito</h1>
      <div class="row ">

        <singleCardFilm v-for="card in store.cardList" :key="card.id" :card="card"/>

      </div>
        
    </section>
</template>
<script>
import { store } from '../js/store';
import singleCardFilm from './singleCardFilm.vue';
import axios from 'axios';
export default {

    data() {
        return {
           // cardList:[],
           store,
           
        }
    },

    name:'CardsWrapper',
    components:{
       singleCardFilm
    },

    methods:{
       
    },
   /* created(){
        this.getCards();
    },*/
}
</script>
<style lang="scss" scoped>

section{
  height: 100vh;
  overflow-y: auto;
}
    
</style>