<template>
  <div class="tweet">
   <Image v-bind:imageSrcNieto = "imageSrcPadre"  
   v-bind:imageAltNieto="imageAltPadre" />

    <div class="body">
      <div class="top">
        <Usuario  v-bind:usuarioNombreNieto = "usuarioNombrePadre" v-bind:usuarioHandleNieto = "usuarioHandlePadre"/>
        <TimeStamp  v-bind:timestampNieto= "timestampPadre"/>
    </div>
      
      
      <Mensaje v-bind:mensajeNieto ="mensajePadre"/>
      <Iconos />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import Iconos from "./ComponentesTweets/Iconos.vue";
import Mensaje from "./ComponentesTweets/Mensaje.vue";
import Usuario from "./ComponentesTweets/Usuario.vue";
import TimeStamp from "./ComponentesTweets/TimeStamp.vue"
import Image from "./ComponentesTweets/Image.vue"



defineProps({
  mensajePadre:{
    type: String,
  }, 
  timestampPadre: {
    type: String,
  },
  usuarioHandlePadre: {
  type: String,
},
usuarioNombrePadre: {
  type: String,
},
imageSrcPadre:{
    type: String,
  },
  imageAltPadre:{
    type: String,
  },
});

</script>