import React, { useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { Col, Container, Row } from 'react-bootstrap'
import CustomCard from './CustomCard'
import SearchForm from './SearchForm'
import ListContainer from '../ListContainer/ListContainer'

const Home = () => {
  const [movieList, setMovieList] = useState([])
  const addMovie = (movie) => {
    const filteredMovies = movieList.filter((item) => item.imdbID !== movie.imdbID)
    setMovieList([...filteredMovies, movie])
    console.log(movieList)

  }
console.log(movieList)
const deldisplay = (id) =>{
  if(!window.confirm("Are you sure you want to delete this movie?")){
    return;
  }
  const filteredMovies = movieList.filter((item) => item.imdbID !== id)
  setMovieList(filteredMovies)
  

}
  return (
    <DefaultLayout>
      <div className='wrapper pt-5'>
        <Container>
          <h3>My Movie Collection</h3>
          <hr />
          <div className=' w-60 bg-dark p-5 rounded'>
            <SearchForm addMovie={addMovie} />
          </div>
          <div >
            <ListContainer deldisplay={deldisplay} movieList={movieList} />
          </div>
          
          <hr />
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default Home
