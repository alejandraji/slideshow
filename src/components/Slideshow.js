import { useState, useEffect } from "react";
import { getDogs } from "../dogapi";

const Slideshow = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogData = getDogs();
    getDogData.then((data) => {
      setDogs(data);
    });
    return () => {};
  })

  //click events go here
  const handleNext = () =>{
    console.log('next')
  }
  const handlePrev = () => {
    console.log('prev')
  }



return (
  <div className="container">
    <img src={dogs[0].url}/>
    <div className="wrapper">
      <button onClick={handleNext}> {'>'} </button>
      <p></p>
      <button onClick={handlePrev}> {'<'} </button>
    </div>
  </div>
)
}

export default Slideshow;