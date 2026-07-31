<template>
    <div class="movie-view" v-if="movie">

        <div class="movie-hero">
            <img :src="coverUrl" :alt="movie.title">
            <button class="back-button" @click="router.back()">
                <img :src="backArrowIcon" alt="Back">
            </button>
            <h1 class="movie-view-title">{{ movie.title }}</h1>
            <div class="movie-meta-row">
                <span class="meta-item">
                    <img :src="calendarIcon" alt="">
                    {{ movie.year }}
                </span>
                <span class="meta-dot">•</span>
                <span class="meta-item">
                    <img :src="clockIcon" alt="">
                    {{ movie.runtime_minutes }} MIN
                </span>
                <span class="meta-dot">•</span>
                <span class="meta-item movie-view-rating">
                    <img :src="starIcon" alt="">
                    {{ movie.rating.toFixed(1) }}
                </span>
            </div>
        </div>


        <div class="movie-actions">
            <div class="primary-row">
                <button class="btn-primary" @click="showAlert">
                    <img :src="ticketIcon" alt="">
                    Book Tickets
                </button>
                <div class="btn-spacer"></div>
            </div>
            <div class="secondary-row">
                <button class="btn-secondary" @click="showAlert">
                    <img :src="playIcon" alt="">
                    Watch Trailer
                </button>
                <button class="btn-save-icon" @click="showAlert">
                    <img :src="saveIcon" alt="">
                </button>
            </div>
        </div>

        <div class="movie-section">
            <h3 class="section-label"><span class="dot"></span>Classification</h3>
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
            <hr class="info-divider">
            <div>
                <h4>Studio</h4>
                <p>{{ movie.studio }}</p>
            </div>
        </div>

        <div class="movie-section">
            <div class="cast-header">
                <h3 class="section-label">Ensemble Cast</h3>
                <div class="cast-nav">
                    <button @click="scrollCast(-1)">‹</button>
                    <button @click="scrollCast(1)">›</button>
                </div>
            </div>
            <div class="cast-box">
                <div class="cast-row" ref="castRowRef">
                    <div class="cast-member" v-for="member in movie.cast" :key="member.name">
                        <div class="cast-avatar"
                            :style="{ backgroundImage: `url(${member.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                        </div>
                        <p class="cast-name">{{ member.name }}</p>
                        <p class="cast-character">{{ member.character }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import backArrowIcon from '@/assets/backArrowIcon.svg'
import calendarIcon from '@/assets/calendarIcon.svg'
import clockIcon from '@/assets/clockIcon.svg'
import starIcon from '@/assets/starIcon.svg'
import ticketIcon from '@/assets/ticketIcon.svg'
import playIcon from '@/assets/playIcon.svg'
import saveIcon from '@/assets/saveIcon.svg'

import brianDonLevy from '@/assets/actors/brian_donlevy.jpg'
import cornelWilde from '@/assets/actors/cornel_wilde.jpg'
import jeanWallace from '@/assets/actors/jean_wallace.jpg'
import richardConte from '@/assets/actors/richard_conte.jpg'

import annaKarina from '@/assets/actors/anna_karina.jpg'
import sadyRebot from '@/assets/actors/sady_rebot.jpg'

import willemDafoe from '@/assets/actors/willem_dafoe.jpg'
import robertPattinson from '@/assets/actors/robert_pattinson.jpg'

import theBand from '@/assets/actors/the_band.jpg'
import bobDylan from '@/assets/actors/bob_dylan.jpg'
import ericClapton from '@/assets/actors/eric_clapton.jpg'

import ryanGosling from '@/assets/actors/ryan_gosling.jpg'
import harrisonFord from '@/assets/actors/harrison_ford.jpg'
import anaDeArmas from '@/assets/actors/ana_de_armas.jpg'



const route = useRoute()
const router = useRouter()
const movieStore = useMovieStore()
const castRowRef = ref(null)

const movie = computed(() => movieStore.titleData)

const coverUrl = computed(() => {
    if (!movie.value?.cover_image) return ''
    return `https://www.afrihost.com/assessments/2607-fe-mid/${movie.value.cover_image}`
})

function scrollCast(direction) {
    castRowRef.value?.scrollBy({ left: direction * 160, behavior: 'smooth' })
}

function showAlert() {
    alert('Oops. You caught us... We are still in the process of developing this...');
}

function sortCastingImages() {
    if (movie.value) {
        if (movie.value.title) {
            // This is hardcoded. Just for extra features.
            var title = movie.value.title;
            if (title === "The Big Combo") {
                movie.value.cast[0].img = cornelWilde;
                movie.value.cast[1].img = richardConte;
                movie.value.cast[2].img = jeanWallace;
                movie.value.cast[3].img = brianDonLevy;
            }
            else if (title === "Vivre sa Vie") {
                movie.value.cast[0].img = annaKarina;
                movie.value.cast[1].img = sadyRebot;
            }
            else if (title === "The Lighthouse") {
                movie.value.cast[0].img = willemDafoe;
                movie.value.cast[1].img = robertPattinson;
            }
            else if (title === "The Last Waltz") {
                movie.value.cast[0].img = theBand;
                movie.value.cast[1].img = bobDylan;
                movie.value.cast[2].img = ericClapton;
            }
            else if (title === "Blade Runner 2049") {
                movie.value.cast[0].img = ryanGosling;
                movie.value.cast[1].img = harrisonFord;
                movie.value.cast[2].img = anaDeArmas;
            }
        }
    }
}

onMounted(async () => {
    await movieStore.loadTitle(route.params.id)
    sortCastingImages();
})
</script>