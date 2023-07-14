import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { fetchData } from '../../common/apis/movieApi';
import CustomCard from "./CustomCard"
import { Alert } from 'react-bootstrap';

const SearchForm = ({ addMovie }) => {
  const [movieName, setMovieName] = useState("")
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(false)

  const handleOnChange = (e) => {
    const { value } = e.target
    setMovieName(value)
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setMovie({})
    setError(false)
    const result = await fetchData(movieName)
    if (result.Response === "True") {
      setMovie(result)
      setError("")
    } else {
      setError(true)
    }
  }
  const handleAddToList = (movie)=>{
    addMovie(movie)
    setMovie({})
    setMovieName("")
  }
  return (
    <div className='search-form' >
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col xs={10}>
            <Form.Control value={movieName} placeholder='Movie Name' onChange={handleOnChange} />
          </Col>

          <Col>
            <Button type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>
      <div className='mt-5 d-flex justify-content-center'>
        {movie.imdbID && <CustomCard movie={movie} handleAddToList={handleAddToList} />}

      </div>
      {error && (
        <Alert variant='danger'>
          No movie found. Try searching for some other movie!!
        </Alert>
      )}

    </div>
  )
}

export default SearchForm
