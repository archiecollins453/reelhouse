<template>
    <nav class="nav-bar">
        <router-link to="/" class="nav-item">
            <img :src="cinemaIcon" alt="Cinema">
            <span>Cinema</span>
        </router-link>
        <router-link to="/coming-soon-discover" class="nav-item">
            <img :src="discoverIcon" alt="Discover">
            <span>Discover</span>
        </router-link>
        <router-link to="/coming-soon-tickets" class="nav-item">
            <img :src="ticketsIcon" alt="Tickets">
            <span>Tickets</span>
        </router-link>
        <router-link to="/coming-soon-library" class="nav-item">
            <img :src="libraryIcon" alt="Library">
            <span>Library</span>
        </router-link>
    </nav>
</template>

<script setup>
import cinemaIcon from '@/assets/cinemaIcon.svg'
import discoverIcon from '@/assets/discoverIcon.svg'
import ticketsIcon from '@/assets/ticketsIcon.svg'
import libraryIcon from '@/assets/libraryIcon.svg'
</script>