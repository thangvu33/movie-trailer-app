const API_KEY = "da18bcc962a30b615ed38969455bbbcb"

const requests = {
    fetchTrendingAll : `/trending/all/week?api_key=${API_KEY}&language=vi-VN`,
    fetchTrendingMovie : `/trending/movie/week?api_key=${API_KEY}&language=vi-VN`,
    fetchTrendingTv : `/trending/tv/week?api_key=${API_KEY}&language=vi-VN`,
    fetchPopularMovies : `/movie/popular?api_key=${API_KEY}&language=vi-VN&page=1`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=vi-VN`,
    fetchPopularTVs: `/tv/popular?api_key=${API_KEY}&language=vi-VN&page=1`,
    fetchTopRatedTVs: `/tv/top_rated?api_key=${API_KEY}&language=vi-VN&page=1`,
}

export default requests;