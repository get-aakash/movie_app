import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const SearchForm = () => {
  return (
    <div className='search-form' >
      <Form>
        <Row>
          <Col xs={10}>
          <Form.Control placeholder='Movie Name'/>
          </Col>
          
          <Col>
          <Button  type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>
     
    </div>
  )
}

export default SearchForm
