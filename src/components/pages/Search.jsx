import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../styles/pages.css"
import "../../styles/Download.css"

export default function Search(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [download, setDownload]=useState(true)
  const API_KEY = 'acca921b855e1e755fbc297539c63ad0';

  useEffect(() => {
    const search = async () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        return;
      }
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/multi', {
          params: {
            api_key: API_KEY,
            query: searchTerm
          }
        });
        setSearchResults(response.data.results);
        setDownload(false)
      } catch (error) {
        console.error('Erro ao buscar resultados de pesquisa:', error);
        setDownload(false)
      }
    };

    search();
  }, [searchTerm, API_KEY]);

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      
      <div className='searchTxt'>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Pesquisar"
        />
      </div>
      
      
      <div className="containerResults">
        {searchResults.map(item => (
            <div className="caixaResult">
              <Link to={`/ViewFilms/${item.id}`}>
                  <img
                      key={item.id}
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title || item.name}
                      className="imgFilm"
                  />
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
};