<template>
  <header class="app-header">

    <div class="header-dots">
      <span v-for="dot in 7" :key="dot"></span>
    </div>

    <div class="header-content">

      <div class="logo">
        <h1>REELHOUSE</h1>
        <p>NOW SHOWING</p>
      </div>

      <button class="search-button" @click="$emit('search-click')">
        <img :src="searchIcon" alt="Search">
      </button>

    </div>

    <hr class="header-divider">

  </header>
</template>

<script setup>
import searchIcon from '@/assets/searchIcon.svg'

defineEmits(['search-click'])
</script>
