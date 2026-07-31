<template>
    <router-link :to="{ name: 'movie-detail', params: { id: props.movieCard.id } }" class="movie-card-link">
        <div class="movie-card">
            <div class="movie-card-image">
                <img :src="props.movieCard.poster_image" :alt="props.movieCard.title">
                <span class="movie-rating"><span class="star">★</span> {{ props.movieCard.rating.toFixed(1) }}</span>
                <h2 class="movie-title">{{ props.movieCard.title }}</h2>
            </div>
            <p class="movie-meta">{{ props.movieCard.year }} · {{ props.movieCard.era_tag }}</p>
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

</script>