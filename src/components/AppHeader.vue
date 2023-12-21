<template >

  <header class="bg-black">
    <section class="d-flex  justify-content-between align-items-center container pt-3 pb-3 ">
    <div class="text-uppercase text-danger">boolflix</div>
    <div class="input-group w-25">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click="store.getCards(searchText)"
      >
        Button
      </button>
      <input
        type="text"
        class="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
       v-model="searchText"
       @keyup.enter="store.getCards(searchText)"
      />
    </div>
  </section>
  </header>
</template>

<script>
import { store } from '../js/store';
import axios from 'axios';

export default {
    name:'AppHeader',
    data() {
        return {
            store,
            searchText:'',
        }
    },
};
</script>




<style lang="scss" scoped>
 header{
    justify-content: space-between;
 }
</style>
