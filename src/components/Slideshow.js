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

  // click events go here
  const handleNext = () =>{
    setDogIndex(dogIndex + 1)
  }

  const handlePrev = () => {
    setDogIndex(dogIndex - 1)
  }


const dog = dogs[dogIndex];
return (
  <div className="container border-gray-800 border-opacity-50">
    <div className="bg-gray-400">
      {dog && <img className="object-contain h-64 w-auto rounded" src={dog.url} alt={dog.title}/>}
    </div>
    <div className="wrapper mt-5 flex flex-row justify-between">
      <button 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
        type='button' disabled={dogIndex === 0} 
        onClick={handlePrev}>
          {'Prev'}
       </button>
      <button 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" 
        type='button' 
        disabled={dogIndex === dogs.length - 1} 
        onClick={handleNext}> 
          {'Next'} 
        </button>
    </div>
    {dog && <p className="w-3/4 tracking-wide p-1 font-mono text-lg text-gray-800 text-center">{dog.title}</p>}
  </div>
)
}

export default Slideshow;