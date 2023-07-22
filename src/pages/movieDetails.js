import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const params = useParams;
    console.log('MovieDetails >>> params >>> ',params);

    return(<div> <h2> Movie Details</h2>
        
        </div >
        )
}

export default MovieDetails;
