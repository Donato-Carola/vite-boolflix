<template >
    <section class="container p-5">
      <div class="row ">
        <singleCardFilm v-for="card in cardList" :key="card.id" :card="card"/>

      </div>
        
    </section>
</template>
<script>
import singleCardFilm from './singleCardFilm.vue';
import axios from 'axios';
export default {

    data() {
        return {
            cardList:[],
            apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=03577983b6885d7b8f4dfcc7600081db&query=ritorno+al+futuro'
        }
    },

    name:'CardsWrapper',
    components:{
       singleCardFilm
    },

    methods:{
        getCards(){
          axios.get(this.apiUrl)
          .then((response)=>{
            console.log(response);
            this.cardList = response.data.results

          })
          .catch(function(error){
            console.log(error);
          })
        }
    },
    created(){
        this.getCards();
    },
}
</script>
<style lang="scss" scoped>
    
</style>