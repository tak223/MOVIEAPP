import MovieList from "./components/MovieList";
import {mvl} from './components/Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "./components/Filter";
import AddMovies from "./AddMovies";
import {useState} from 'react';
import   './App.css'

function App() {
  const [input,setInput] = useState('')
  const [mvls,setVml] = useState(mvl)
  const [rate,setRate] = useState(0) 
 
const handelAdd = (newm) => {
  setVml([...mvls,newm])
}

const handleRating = (rate) => {
  setRate(rate)

  // other logic
}

const filterstars =(rating)=>{
setVml(mvls.filter((el)=>el.rating === rating));
  }

  return (
    <div className="App">

   <Filter handleRating ={handleRating  } rating={rate}   setInput={setInput} />
 
   
  <MovieList mvl={mvls}  rating={rate} setRate = {setRate} input={input} setInput={setInput} filterstars={filterstars}  />
  <AddMovies handelAdd={handelAdd} />
    </div>
   );
} 


export default App ;
