import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomCard from '../Home/CustomCard';

const ListContainer = ({movieList}) => {
  return (
    <div className='list-container mt-5 py-3 rounded'>
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="success">Awesome</Button>
            <Button variant="warning">Boring</Button>
          </ButtonGroup>
          <p className='mt-3'>{movieList.length} Movie(s) found!!</p>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-wrap justify-content-around gap-3'>
          {
            movieList?.map((movie)=>(
              <CustomCard key={movie.imdbID} movie={movie} />
            ))
          }
          

        </Col>
      </Row>


    </div>
  )
}

export default ListContainer
