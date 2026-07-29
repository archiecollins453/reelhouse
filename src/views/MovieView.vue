<template>
    <div class="movie-view" v-if="movie">

        <div class="movie-hero">
            <img :src="coverUrl" :alt="movie.title">
            <button class="back-button" @click="router.back()">←</button>
            <h1 class="movie-view-title">{{ movie.title }}</h1>
        </div>

        <div class="movie-meta-row">
            <span>{{ movie.year }}</span>
            <span>·</span>
            <span>{{ movie.runtime_minutes }} MIN</span>
            <span>·</span>
            <span class="movie-view-rating">★ {{ movie.rating.toFixed(1) }}</span>
        </div>

        <div class="movie-actions">
            <button class="btn-primary" @click="showAlert">🎟 Book Tickets</button>
            <button class="btn-secondary" @click="showAlert">▶ Watch Trailer</button>
            <button class="btn-icon" @click="showAlert">🔖</button>
        </div>

        <div class="movie-section">
            <h3 class="section-label">Classification</h3>
            <div class="tag-row">
                <span class="tag" v-for="tag in movie.classification" :key="tag">{{ tag }}</span>
            </div>
        </div>

        <div class="movie-section">
            <h3 class="section-label">Synopsis</h3>
            <p class="synopsis">{{ movie.synopsis }}</p>
        </div>

        <div class="movie-info-box">
            <div>
                <h4>Director</h4>
                <p>{{ movie.director }}</p>
            </div>
            <div>
                <h4>Studio</h4>
                <p>{{ movie.studio }}</p>
            </div>
        </div>

        <div class="movie-section">
            <h3 class="section-label">Ensemble Cast</h3>
            <div class="cast-row">
                <div class="cast-member" v-for="member in movie.cast" :key="member.name">
                    <div class="cast-avatar"></div>
                    <p class="cast-name">{{ member.name }}</p>
                    <p class="cast-character">{{ member.character }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'

const route = useRoute()
const router = useRouter()
const movieStore = useMovieStore()

const movie = computed(() => movieStore.titleData)

const coverUrl = computed(() => {
    if (!movie.value?.cover_image) return ''
    return `https://www.afrihost.com/assessments/2607-fe-mid/${movie.value.cover_image}`
})

onMounted(async () => {
    await movieStore.loadTitle(route.params.id)
})

const showAlert = () => {
    alert("Oops! You caught us! We are still in the process of making this! Please be patient!");
}
</script>