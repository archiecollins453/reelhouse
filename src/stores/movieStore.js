import {defineStore} from 'pinia'

const moviesUrl = 'https://www.afrihost.com/assessments/2607-fe-mid/movies.json'


export const useMovieStore = defineStore('movies', {
    state: () => ({
        movies:[],
        selectedMovie:null,
        searchQuery:'',
        selectedCategory:'Discover',
        titleData:null
    }),
     getters:{
    categories: (state) => {
        const tags = state.movies.map(movie => movie.era_tag)
        return ['Discover', ...new Set(tags)]
        },
    filteredMovies: (state) => {
        return state.movies.filter(movie => {
            const matchesCategory = state.selectedCategory === 'Discover' || movie.era_tag === state.selectedCategory
            const matchesSearch = movie.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }
    },
    actions:{ 
        setSearchQuery(query) {
        this.searchQuery = query
        },
        setCategory(category){
            this.selectedCategory = category
        },async loadMovies() {
        try {
            const response = await fetch(moviesUrl)

            if (!response.ok) {
                throw new Error('Failed to fetch movies')
            }
            const data = await response.json()
            this.movies = data
            } catch (error) {
                console.error(error)
            }
        }, async loadTitle(id){
            try {
                const titleUrl = `https://www.afrihost.com/assessments/2607-fe-mid/movies/${id}.json`
                const response = await fetch(titleUrl)
                if(!response.ok)
                {
                    throw new Error('Failed to fetch title')
                }
                const data = await response.json()
                this.titleData = data;
            } catch (error) {
                console.error(error)
            }
        }
    }
   
})