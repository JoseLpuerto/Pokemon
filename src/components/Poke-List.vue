<template>
    <div>
        <div>
            <form class="d-flex mt-5">
                <input id="Pokename" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button   @click="serchPokemon" class="btn btn-outline-success m" type="button">Buscar</button>
                <button  @click="volver" class="btn btn-outline-danger " type="button" style="margin-left: 10px;">Volver</button>
            </form>

            <div id="divTotal" class="row row-gap-3 mt-4">
                <div  style="display: '';" class="col-sm-6 col-md-4 col-lg-3" v-for="pokemon in pokemons" :key="pokemon">
                 <PokeCard  :pokename="pokemon.name"
                  :PokeImg="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonId(pokemon.url)}.svg`"
                 ></PokeCard>
                </div>
            </div>

            <div id="divSearch" class="row row-gap-3 mt-4" style="display: none;">
                <div class="col" >
                 <PokeCard  :pokename="name"
                  :PokeImg="url"
                 ></PokeCard>
                </div>
            </div>
        </div>

    </div>

   

</template>

<script>


import PokeCard from './Poke-Card.vue';
const getPokemons= async(CntPoke)=>{
    
    const  resp= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${CntPoke}`)

    if(resp.ok === false){
        throw new Error("No se ha podido obtener la data")

    }

    const data = await resp.json()

    return data.results;

}

export default{
    
    props:{
        CntPoke:{
            required:true,
            type:Number,
            default:0
        },
    },
    components:{
        PokeCard
    },
    data(){
        return{
            pokemons: [],
            name:'',
            url:''
        }
    },
    async mounted(){
        try {
            this. pokemons= await getPokemons(this.CntPoke);

        } catch (error) {
            console.log(error)
            
        }
    },
    methods:{
         getPokemonId: (url)=>{

         const list= url.split('/');
         const id= list.at(-2);

    return id
    },
     async serchPokemon(){

        if(Pokename.value===""){
            this.$swal.fire("Opss","No ha ingresado un nombre para realizar la busqueda","info");
            return;

        }
            const resp= await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokename.value}`)

            
            if(resp.ok === false){
                
                if(resp.status===404){
                    this.$swal.fire("Oops",`No hemos encontrado un pokemon con este nombre ${Pokename.value}, por favor verifica la informacion.`,"error");
                    Pokename.value=""
                    return

                }

                throw new Error("No se ha podido obtener la data")

            }

            const data = await resp.json()
            document.getElementById("divTotal").style.display = 'none';//ocultar el div
            document.getElementById("divSearch").style.display = '';//mostrar el div de filtro
            Pokename.value=""

            this.name=data.forms[0].name
            this.url=data.sprites.other.dream_world.front_default;
    
            return data;  
    },
    volver(){
        document.getElementById("divSearch").style.display = 'none';//ocultar el div de filtro
        document.getElementById("divTotal").style.display = '';//mostrar el div general

    }   
    }
}

</script>