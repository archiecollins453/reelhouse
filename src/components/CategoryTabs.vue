<template>
    <nav class="category-tabs">
        <button v-for="category in movieStore.categories" :key="category" class="category"
            :class="{ active: movieStore.selectedCategory === category }" @click="movieStore.setCategory(category)">
            {{ category }}
        </button>
    </nav>
</template>

<script setup>
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore();

</script>
