import { useState, useEffect } from "react";
import { getDogs } from "../dogapi";

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

  //click events go here
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
   {dog && <img src={dog.url}/>}
    <div className="wrapper">
      <button disabled={dogIndex === dogs.length - 1} onClick={handleNext}> {'>'} </button>
      {dog && <p>{dog.title}</p>}
      <button disabled={dogIndex === 0} onClick={handlePrev}> {'<'} </button>
    </div>
  </div>
)
}

export default Slideshow;