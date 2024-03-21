import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Movies from './components/pages/Movies.jsx'
import Series from './components/pages/Series.jsx'
import Animes from './components/pages/Animes.jsx'
import Search from './components/pages/Search.jsx'
import ViewFilms from './components/pages/Viewfilm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Animes' element={<Animes />} />
          <Route path='/ViewFilms/:id' element={<ViewFilms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
