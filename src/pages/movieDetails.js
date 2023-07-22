import { useEffect } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const {movieId} = useParams();
    console.log('MovieDetails >>> params >>> ', movieId);
    useEffect(() => {
        
        // HTTP
    },[])

    return (<div> <h2> Movie Details   {movieId}</h2>
        
        </div >
        )
}

export default MovieDetails;
