import { useState } from "react";
import Movie from './Movie';
export const Content = ({changePage})=>{

    const [movieList,updateList] = useState([]);

    function getMovies(){
        fetch("https://api.tvmaze.com/search/shows?q=all").
        then(response => response.json()).then(data => updateList(data));
    }
    getMovies();
    return(
        <div className="cont">
           {movieList.map(movie => <Movie id={movie} changePage={changePage}/>)}
        </div>
    );
}