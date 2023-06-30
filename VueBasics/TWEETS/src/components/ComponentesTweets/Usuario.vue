<template>
  <span class="user">
          <span class="name">{{usuarioNombreNieto}}</span>
          <span class="handle">{{usuarioHandleNieto}}</span>
        </span>
        
</template>

<script setup>
defineProps({
  usuarioNombreNieto: {
    type: String,
    default: "El perro guai",
  },
  usuarioHandleNieto: {
    type: String,
    default: "@perro",
  },
  });
      
</script>

