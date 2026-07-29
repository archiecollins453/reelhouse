<template>
    <div>
        <AppHeader @search-click="focusSearch"/>
        <SearchBar ref="searchBarRef"/>
        <CategoryTabs />
        <section class="movie grid">
            <div 
            v-for="movie in movieStore.filteredMovies" 
            :key="movie.id"><MovieCard :movieCard="movie"/></div>
        </section>
    </div>

</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
import MovieCard from '@/components/MovieCard.vue'
import {onMounted,ref} from 'vue'
import {useMovieStore} from '@/stores/movieStore'

const movieStore = useMovieStore();
const searchBarRef = ref(null)

onMounted(async() => {
    await movieStore.loadMovies()
    console.log(movieStore)
    console.log(movieStore.categories)
})

function focusSearch() {
    searchBarRef.value?.focusInput()
}

</script>
