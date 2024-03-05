import { useState, useEffect } from "react";
import getDogs from "../getDogs";
import "./Slideshow.css"

const Slideshow = () => {
  const [dogs, setDogs] = useState([]);
  const [dogIndex, setDogIndex] = useState(0);


  useEffect(() => {
    getDogs()
      .then((dogs) => {
        setDogs(dogs);
      });
    return () => {};
  })
  console.log("slideshow",dogs)

  // click events go here
  const handleNext = () =>{
    setDogIndex(dogIndex + 1)
    console.log('next')
  }
  const handlePrev = () => {
    setDogIndex(dogIndex - 1)
    console.log('prev')
  }


const dog = dogs[dogIndex];
return (
  <div className="container">
   {dog && <img src={dog.url} alt={dog.title}/>}
    <div className="wrapper">
      <button type='button' disabled={dogIndex === 0} onClick={handlePrev}> {'<'} </button>
      {dog && <p>{dog.title}</p>}
      <button type='button' disabled={dogIndex === dogs.length - 1} onClick={handleNext}> {'>'} </button>
    </div>
  </div>
)
}

export default Slideshow;