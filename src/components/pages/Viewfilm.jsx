import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../styles/Download.css"
import "../../styles/ViewFilm.css"

export default function Vierfilm(){
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [download, setDownload]=useState(true);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: 'acca921b855e1e755fbc297539c63ad0'
          }
        });
        setMovie(response.data);
        setGenres(response.data.genres);
        setDownload(false)

      } catch (erro) {
        console.log('ERRO!!!!!!!!!!!!!', erro);
        setDownload(false)
      }
    };

    fetchMovieDetail();
    
    
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  


  console.log(movie)

  return (
    <div className='containerViewFilm'>
        { download ? (
            <div class="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        ) : (
              <div className='containerInfos'>            
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='imgPoster'/>

                <div className='caixaInfos'>
                  <h1>{movie.title} ({movie.original_language.toUpperCase()})</h1>
                  <div className='caixaInfosBasic'>
                    <p>{movie.release_date}</p>
                      •<ul className='listGens'>
                        {genres.map(genre => (
                          <li key={genre.id}> {genre.name}</li>
                        ))}
                      </ul>
                      •<p>{movie.runtime} minuts</p>
                  </div>
                  <div className='caixaInfoVots'>
                    <p>{movie.vote_average}/10</p>
                    <p>{movie.popularity} Popularidade</p>
                  </div>
                  <div className='caixaSinopse'>
                    <h3>{movie.tagline}</h3>
                    <h2>Sinopse</h2>
                    <p>{movie.overview}</p>
                  </div>
                  <a href={movie.homepage} target='_blanck' className='btn'>Mais Informações</a>
                </div>
              </div>   
        )}
    </div>
  );
};