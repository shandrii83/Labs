<template>
    <div class="row">
  <div class="col-md-6">
  <div class="d-flex flex-column align-items-center"> 
    <img :src="`https://flagcdn.com/w320/${infoPais.alpha2Code.toLowerCase()}.png`" alt="" class="mb-2 "> 

    <h2>{{ infoPais.name.common }}</h2>
</div>
  </div>
  <div class="col-md-6">
<ul class="list-group list-group-flush" >
    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
        <p class="fw-bold">Capital</p>
    <p>{{ infoPais.capital[0] }}</p>
    </li>
    <li  class="list-group-item d-flex justify-content-between align-items-center mb-4">
        <p class="fw-bold">Area</p>
        <p>{{ infoPais.area }}km <sup>2</sup></p>
    </li>
 <li  class="list-group-item d-flex justify-content-between align-items-start">
    <p class="fw-bold ">Borders:</p>
    <ul class="list-unstyled mb-0">
    <li v-if="infoPais.borders.length === 0">Disculpa, este pais es una isla. </li>

    <div v-else>
    <li v-for="(frontera, index) in infoPais.borders" :key="index">
                <RouterLink :to="`/list/${frontera}`">{{ frontera }}</RouterLink>
              </li>
              </div>
</ul>

 </li>
</ul>

</div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

/* definimos var reactiva para usar con vue */
let infoPais = ref(null);

/* variable para poder usar la ruta por parte del metodo de una manera facil */
let route = useRoute();

/* funcion que engarga de hacer fetch al api y comparando el alpha3Code que recibimos por parte del url y compara para hacer un display correcto del detalle de pais */
let recibirAlphaTresCode = async () => {
let codigoAlphaTres = route.params.alpha3Code;
/* console.log(codigoAlphaTres); */

/* las llamadas a la api */
let respuesta = await fetch(`https://ih-countries-api.herokuapp.com/countries/${codigoAlphaTres}`

);
console.log(respuesta);
/* limpiamos la info del json */
let respuestaLimpia = await respuesta.json();
console.log(respuestaLimpia);


/* apuntamos a var reactiva y guardamos info */
infoPais.value = respuestaLimpia;

/* retornamo destructuradamente para poder en el futuro retornar mas de 1 cosa */
return{ infoPais };
};
recibirAlphaTresCode();

onMounted(() => recibirAlphaTresCode())
/* funcion computada */

let codigoPais = computed(() => route.params.alpha3Code);
console.log(codigoPais);

/*  watchers, es como un vigilante, esta pendiente de algun cambio o monitorea tu componente.  Wacher sige siendo un metodo nativo de vue.
1 regla - siendo un metodo recibe dentro de los () un func anonima.
2 regla - antes de la funcion anonima, tenemos que especificarle al metodo watch() que monitorear en teoria
*/
watch(codigoPais, (nuevoCodigoAlpha3) =>{
    /* console.log(nuevoCodigoAlpha3); */
    recibirAlphaTresCode();
});
</script>

