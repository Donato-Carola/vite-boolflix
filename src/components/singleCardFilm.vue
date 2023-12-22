<template lang="">
  <article class="col-sm-12 col-md-6 col-lg-4 g-2 p-2">
    <!-- <h3>
            {{card.original_title}}
        </h3>-->
    <img
      class="w-100"
      :src="
        card.backdrop_path
          ? 'https://image.tmdb.org/t/p/w500' + card.backdrop_path
          : '/img/imagenotfound.jpg'
      "
      alt=""
    />
    <div class="info p-2">
      <h5>TIPO: {{ card.media_type }}</h5>
      <h5 v-if="card.media_type === 'movie'">Titolo: {{ card.title }}</h5>
      <h5 v-else="card.media_type === 'tv'">Titolo: {{ card.name }}</h5>
      <h5 v-if="card.media_type === 'movie'">Titolo Originale: {{ card.original_title }}</h5>
      <h5 v-else="card.media_type === 'tv'">Titolo Originale: {{ card.original_name }}</h5>
      <h5>Voto: {{ card.vote_average }}</h5>
      <p>Overview: {{ card.overview }}</p>
      <div class="star-rating">
        voto:
        {{ getStarRating(card.vote_average) }}
      </div>
    </div>
  </article>
</template>
<script>
import { store } from "../js/store";
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getStarRating(rating) {
      /*funzione che prende il valore da card.vote_average (valore del voto nel nostro API ) lo traforma da 1 a 5 intero*/
      const roundedRating = Math.ceil(rating / 2); // Trasforma da 1-10 a 1-5
      return Array.from({ length: 5 }, (_, index) =>
        index < roundedRating ? "★" : "☆"
      ).join(
        ""
      ); /*Crea un array con una lunghezza di 5 elementi. con una funzione di callback formata dalvalore _ e il parametro che è index  */
    } /*a questo punto nella funzione di callback facciamo la nostra espressione ternaria*/,
  } /*join ci da la possibilità di unire i singoli elementi dell'array in una singola stringa*/,
};
</script>
<style lang="scss" scoped>
article {
  img {
    height: 400px;
    object-fit: cover;
  }
}

div.info {
  display: none;
}
article:hover div.info {
  display: inline-block;
  background-color: black;
  color: white;

}

article:hover img {
  display: none;
}
</style>
