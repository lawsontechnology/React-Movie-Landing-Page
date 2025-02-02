
const Movies = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
     return (
          <div className="movie" key={imdbID}>
               <div>
                    <p>{Year}</p>
               </div>

               <div>
                    <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
               </div>

               <div>
                    <span>{Type}</span>
                    <h2>{Title}</h2>
               </div>
          </div>
     );
}

export default Movies;