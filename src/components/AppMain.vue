<template lang="">
    <main>
      <CardsWrapper/>


    </main>
        
    
</template>
<script>
import CardsWrapper from './CardsWrapper.vue';
export default {
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