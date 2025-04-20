
<template>
  <header>
 
    <div class="container">
      <PokeList :CntPoke=151></PokeList>
      
    </div>
  </header>

</template>
<script >
import PokeList from './components/Poke-List.vue';

export default{
  components:{
    PokeList
  }
}
</script>

<style scoped>
</style>
