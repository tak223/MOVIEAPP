import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({mvl,filterstar,rate,setRate, input,setInput , filterstars }) => {

  return (
    <div className='div'>
        {    mvl.filter(
        (el) => {

          if( input ==='' &&  rate === 0){
           
            return el
          }
          
          else if( el.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ){
           
            return el
          } else if (el.rating === rate && input ==='' ){ return el}
        }).map((el,i)=> <MovieCard el={el} key={i} />
            )
        }
    </div>
  )
}

export default MovieList