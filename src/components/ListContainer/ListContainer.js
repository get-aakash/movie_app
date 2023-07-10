import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ListContainer = () => {
  return (
    <div className='list-container mt-5 d-flex'>
        <ButtonGroup aria-label="Basic example">
      <Button variant="primary">All</Button>
      <Button variant="success">Awesome</Button>
      <Button variant="warning">Boring</Button>
    </ButtonGroup>
      
    </div>
  )
}

export default ListContainer
