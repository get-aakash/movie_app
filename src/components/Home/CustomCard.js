import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CustomCard = ({ movie = {}, handleAddToList, deldisplay, isDelete }) => {
    return (
        <div className='movie-cards mt-5 d-flex justify-content-center '>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        Rating: {movie.imdbRating} <br /> Year: {movie.Year}
                    </Card.Text>
                    {isDelete ? (
                        <Button onClick={() => deldisplay(movie.imdbID)} variant='danger' className='mt-3 w-100'>Discard</Button>
                    )
                        :
                        <>
                        
                            <div className='d-flex justify-content-between'>
                                <Button variant="success" onClick={() => handleAddToList({ ...movie, type: "awesome" })}>Awesome</Button>
                                <Button variant='warning' onClick={() => handleAddToList({ ...movie, type: "boring" })}>Boring</Button>

                            </div>
                            <Button onClick={()=>deldisplay(movie.imdbID)} variant='danger' className='mt-3 w-100'>Discard</Button>
                            </>
                            }


                </Card.Body>
            </Card>

        </div>



    )
}

export default CustomCard
