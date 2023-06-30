<template>
        <p class="message">
        {{mensajeNieto}}
      </p>
</template>

<script setup>
defineProps({
  mensajeNieto: {
    type: String,
    default:
      "El prop no recibe ningun informacion",
  },
}) ;
</script>

