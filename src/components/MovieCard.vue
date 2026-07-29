<template>
    <router-link :to="{ name: 'movie-detail', params: { id: movieCard.id } }">
        <div class="movie-card" >
            <div class="movie-card-image">
                <img :src="movieCard.poster_image" :alt="movieCard.title">
                <span class="movie-rating">★ {{ movieCard.rating.toFixed(1) }}</span>
                <h2 class="movie-title">{{ movieCard.title }}</h2>
            </div>
            <p class="movie-meta">{{ movieCard.year }} · {{ movieCard.era_tag }}</p>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    movieCard: {
        type: Object,
        required: true
    }
})

console.log(props)
</script>