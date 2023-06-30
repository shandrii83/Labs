<template>
   <img :src = "imageSrcNieto" class="profile" alt="Imagen del perro"/>

</template>

<script setup>
defineProps({
  imageSrcNieto: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidNUiHzwO2AC1FV6Rdi5c4X-oVN3j-9KlMg&usqp=CAU",
  },
  imageAltNieto: {
   tipe: String,
   defaul: "Imagen de dog, que usuario estba tweeteando"
  }
}) ;
</script>

