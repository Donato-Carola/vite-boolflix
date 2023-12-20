<template>
  <AppHeader/>
  <AppMain/>
 
</template>


<script > 
/*import { store } from "./js/store.js";
import axios from "axios";*/
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      
    }
  },
}
</script>



<style lang="scss" >
@use "./styles/general.scss" as *;
</style>
