<template>
  <span class="timestamp" v-text="timestampNieto" />
</template>  

<script setup>
defineProps({
  timestampNieto: {
    type: String,
    default:
      "random date",
  },
}) ;
</script>



