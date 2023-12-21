<template lang="">
    <main>
      <CardsWrapper/>


    </main>
        
    
</template>
<script>
import { store } from '../js/store';
import CardsWrapper from './CardsWrapper.vue';
export default {
    data() {
        return {
            store
        }
    },
    name:'AppMain',
    components:{
        CardsWrapper,
}
}
</script>
<style lang="scss" scoped>
    main{
        background-color: rgb(67, 67, 67);
    }
</style>