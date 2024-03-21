import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import "../../styles/pages.css"

export default function Movies(){

    const [caixaApi, setCaixaApi]=useState([])
    const [download, setDownload]=useState(true)
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(()=>{
        const FuncChamarApi = async () => {
            try{
                const chamandoApi = await axios.get(
                    'https://api.themoviedb.org/3/trending/movie/week', 
                    {
                      params: {
                        api_key: 'acca921b855e1e755fbc297539c63ad0',
                        sort_by: 'popularity.desc'
                      }
                    }
                  );
                setCaixaApi(chamandoApi.data.results)
                setDownload(false)
            } catch(erro){
                console.log("ERRO!!!!!!!!!", erro)
                setDownload(false)
            }
        }

        FuncChamarApi()

    }, [])

    return(
        <div>
            { download ? (
                <div class="loadingspinner">
                  <div id="square1"></div>
                  <div id="square2"></div>
                  <div id="square3"></div>
                  <div id="square4"></div>
                  <div id="square5"></div>
                </div>
            ) : (
                <div className="containerResults">
                    {caixaApi.map(result => (
                        <div key={result.id} className="caixaResult">
                            <Link to={`/ViewFilms/${result.id}`}>
                                <img src={`${posterBaseUrl}${result.poster_path}`} alt={result.title} className="imgFilm"/>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}