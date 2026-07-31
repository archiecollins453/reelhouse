<template>
    <div class="search-container">
        <img :src="searchIcon2" class="search-icon" alt="Search">
        <input ref="inputRef" type="text" class="search-input" placeholder="Search for films, directors, or eras.."
            :value="movieStore.searchQuery" @input="movieStore.setSearchQuery($event.target.value)">
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import searchIcon2 from '@/assets/searchIcon2.svg';

const movieStore = useMovieStore()
const inputRef = ref(null)

function focusInput() {
    inputRef.value?.focus()
    inputRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

defineExpose({ focusInput })
</script>