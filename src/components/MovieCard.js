import React from 'react'
import { Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({el}) => {
  return (


        <Card className='cd' >
  <Card.Img variant="top" src={el.url} />
  <Card.Body >
    <Card.Title style={{backgroundColor :'white' }}>{el.title} </Card.Title>
    <Card.Text   style={{backgroundColor :'white' } } >
  {el.description}
    </Card.Text>
    <Rating  ratingValue={el.rating} readonly= {true}   style= {{ position:'absolute', bottom:'20px'  }} />
  </Card.Body>
</Card>
 
  )
}

export default MovieCard