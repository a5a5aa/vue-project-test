<template lang="pug">
#left-menu
  h1 社團介紹
  table
    tr(
      v-for="(club, i) in clubs"
      :key="i"
    )
      td
        router-link(:to="club.path") {{ club.name }}
</template>
  
<script setup>
const clubs = [
  { path: '/guitar', name: '吉他社' },
  { path: '/dance', name: '熱舞社' },
  { path: '/baseball', name: '棒球社' },
  { path: '/badminton', name: '羽球社' },
  { path: '/soccer', name: '足球社' },
  { path: '/scout', name: '童軍社' }
]
</script>
  