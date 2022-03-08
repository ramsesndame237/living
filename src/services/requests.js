const API_KEY = "851db2d5f7e2b14fea8f0cae833a110e"


const requests =  {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fethActionsMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fethComdedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fethHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fethRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fethDocumentariesMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests