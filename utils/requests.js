const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: '趨勢',
    url: `/trending/all/week?api_key=${API_KEY}&language=zh-TW`,
  },
  fetchTopRated: {
    title: '最高評分',
    url: `/movie/top_rated?api_key=${API_KEY}&language=zh-TW`,
  },
  fetchActionMovies: {
    title: '動作',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=28`,
  },
  fetchComedyMovies: {
    title: '喜劇',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: '恐怖',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: '浪漫',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: '懸疑',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: '科幻',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=878`,
  },
  fetchWesternMovies: {
    title: '西部',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=37`,
  },
  fetchAnimation: {
    title: '動畫',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=16`,
  },
  fetchTV: {
    title: '電視電影',
    url: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=10770`,
  },
};
