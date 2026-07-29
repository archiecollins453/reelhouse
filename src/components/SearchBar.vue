<template>
    <div class="search-container">
        <input
            ref="inputRef"
            type="text"
            class="search-input"
            placeholder="Search for a movie..."
            :value="movieStore.searchQuery"
            @input="movieStore.setSearchQuery($event.target.value)"
        >
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore()
const inputRef = ref(null)

function focusInput() 
{
    inputRef.value?.focus()
    inputRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

defineExpose({ focusInput })
</script>