import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
       // searchText:'',
        loading:true,
        cardList:[],

       
               /* getCards(searchContent = ''){
                        console.log(searchContent);
                  axios.get('https://api.themoviedb.org/3/search/movie?api_key=03577983b6885d7b8f4dfcc7600081db&query='
                  + searchContent)
                  .then((response)=>{
                    console.log(response);
                    this.cardList = response.data.results
        
                  })
                  .catch(function(error){
                    console.log(error);
                  })
                }*/

                getCards(searchContent = '', type = 'all') {    // Aggiungi un parametro per il tipo
                        let endpoint = type === 'all' ? 'multi' : type;
                    
                        axios.get(`https://api.themoviedb.org/3/search/${endpoint}?api_key=03577983b6885d7b8f4dfcc7600081db&query=${searchContent}`)
                        .then((response) => {
                            console.log(response);
                            this.cardList = response.data.results;
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                    }
           

});