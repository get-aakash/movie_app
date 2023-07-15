import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomCard from '../Home/CustomCard';

const ListContainer = ({movieList}) => {
  const [displayMovie, setDisplayMovie] = useState([])

  useEffect(()=>{
    setDisplayMovie(movieList)
  },[movieList])

  const selectCategory = (cat)=>{
    cat === "all" && setDisplayMovie(movieList)
    cat === "awesome" && setDisplayMovie(movieList.filter((movie)=>movie.type=== 'awesome'))

    cat === "boring" && setDisplayMovie(movieList.filter((movie)=> movie.type==='boring'))

  }
  return (
    <div className='list-container mt-5 py-3 rounded'>
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={()=>selectCategory('all')}>All</Button>
            <Button variant="success" onClick={()=>selectCategory('awesome')}>Awesome</Button>
            <Button variant="warning"onClick={()=>selectCategory('boring')}>Boring</Button>
          </ButtonGroup>
          <p className='mt-3'>{displayMovie.length} Movie(s) found!!</p>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-wrap justify-content-around gap-3'>
          {
            displayMovie?.map((movie)=>(
              <CustomCard key={movie.imdbID} movie={movie} isDelete={true} />
            ))
          }
          

        </Col>
      </Row>


    </div>
  )
}

export default ListContainer
