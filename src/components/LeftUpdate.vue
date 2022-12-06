<template lang="pug">
#left-update 最近更新日期： {{ date }}
</template>
  
<script setup>
const date = new Date().toLocaleDateString()
</script>
  