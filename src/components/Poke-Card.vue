<template>
    <div class="container mt-2" ref="pokecardref">
        <div class="card card-block">
            <img :src="PokeImg" :alt="`Pokemon Image - ${pokename}`" width="100%" height="300px">
            <h5 class="card-title mt-3 mb-3">{{ pokename }}</h5>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        pokename:{
            required: true,
            type:String,
            default:"Pokemon name"
        },
        PokeImg:{
            required:true,
            type:String,
            default:"https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg"
        }
    }
}
</script>