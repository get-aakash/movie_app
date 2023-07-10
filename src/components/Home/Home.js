import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { Col, Container, Row } from 'react-bootstrap'
import CustomCard from './CustomCard'
import SearchForm from './SearchForm'
import ListContainer from '../ListContainer/ListContainer'

const Home = () => {
  return (
    <DefaultLayout>
      <div className='wrapper pt-5'>
      <Container>
        <h3>My Movie Collection</h3>
        <hr />
        <div className=' w-60 bg-dark p-5 rounded'>
        <SearchForm />
        <CustomCard />
        

        </div>
        <div >
        <ListContainer />
        </div>
        <div>
        <p3 className="d-flex mt-2 ">0 Movies found!</p3>
        </div>
        <hr />
        
        
      </Container>
      </div>
    </DefaultLayout>
  )
}

export default Home
