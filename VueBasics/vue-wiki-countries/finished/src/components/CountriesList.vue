<template>
<div>
<h1 class="text-center">Countries List</h1>
<div class="container" v-if="countries">
<div class="row">
    
<!--   lado izquerdo -->
    <div class="col-sm-4">
        <ul class="list-group py-4">
        <RouterLink :to="`/list/${country.alpha3Code}`" 
        v-for="(country, index) in countries" :key ="index">
<div class="">
        <li class="list-group-item d-flex flex-column justify-content-center align-items-center border border-primary">
          <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt=""
           class="mb-2 country-flag"/>
          <p>{{country.name.common}}</p>
        </li>
      </div>
        </RouterLink>
        </ul>
    </div>
<!-- lado derecho -->
<div class="col-sm-8"><RouterView/></div>
</div>
</div>
<div v-else class="col-12"><Spinner text="Loading Countries..." /></div>

</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted  } from "vue";
import { RouterLink } from "vue-router";

//var para guardar  info del json dentro de la funcion de fetchCountries los paises
let countries = ref(null);

//creamos funcion psara llamar al api JSON col los paises

const fetchCountries = async () => {
      //variable para llamar a la api 
let response = await fetch("https://ih-countries-api.herokuapp.com/countries");

  //variable  para guardar info de api y la limpiamos con el metodo json()
  let apiCleanup = await response.json();
//console.log(apiCleanup);

  // variable que recibe la info de los paises y podemos usaremos sort para poder organizar los paises segun su orden alfabetico
let sortedCountries = apiCleanup.sort((paisA, paisB)=>paisA.name.common.localeCompare(paisB.name.common));
console.log(sortedCountries);

//Apuntamos a la variable countries y mediante el .ref le inyectamos el valor

countries.value = sortedCountries;

};
fetchCountries();

//Dependemos de un ciclo de vida para aprovechar el control de flujo de datos por parte de mi app

//onMounted(()=>{fetchCountries});
onUnmounted(()=>{
console.log("El component se de-renderiza");

});
</script >

<style scoped>

.country-flag{
  width: 120px;
}

</style>