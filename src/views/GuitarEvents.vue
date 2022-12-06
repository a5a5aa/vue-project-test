<template lang="pug">
h1 活動公告
input(type="button" value="社團介紹" @click="goto('home')")
input(type="button" value="吉他社史" @click="goto('guitar')")
input(type="button" value="教學內容" @click="goto('guitar-teach')")
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goto = (name) => {
  router.push({ name })
}
</script>