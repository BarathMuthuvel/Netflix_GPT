import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";


const useTrendingMovies = () => {
    const dispatch = useDispatch()

    const trending_movies = useSelector((store) => store.movies.trendingMovies)

    const getTrendingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS)
      const json = await data.json();
      dispatch(addTrendingMovies(json.results))
    }
  
    useEffect(() => {
       !trending_movies && getTrendingMovies()
    },[])
}

export default useTrendingMovies;