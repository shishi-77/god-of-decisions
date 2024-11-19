<script setup>
import decisions from '@/constants/decisions'
import DecisionCard from './DecisionCard.vue'

// random decision
const randomIndex = Math.floor(Math.random() * decisions.length)
const decision = decisions[randomIndex]
</script>

<template>
  <DecisionCard :data="decision" />
</template>