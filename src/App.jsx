// src/App.jsx

import { useState } from 'react'

import './App.css'
// PSEUDO CODE STEP 1: Import IngredientList component from its file

import IngredientList from './components/IngredientList/IngredientList.jsx';
// PSEUDO CODE STEP 2: Import BurgerStack component from its file

import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import Title from './components/Title/Title.jsx';


import { availableIngredients as ingredientsData } from './data/ingredients.js';

const App = () => {
  const availableIngredients = ingredientsData;
// PSEUDO CODE STEP 4: Create a state variable called 'stack' initialized as empty array
const [stack, setStack] = useState([]);

const addToBurger = (ingredient) => {
  setStack([...stack, ingredient]);
}
const removeFromBurger = (index) => {
  console.log('Removing ingredient at index:', index);
  const newStack = stack.filter((ingredient, i) => i !== index);
  setStack(newStack);
}
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  
  return (
    <>
      <video 
        className={`background-video ${videoEnded ? 'fade-out' : ''}`}
        autoPlay 
        muted 
        onEnded={handleVideoEnd}
        onError={(e) => console.error('Video Error:', e)}
        playsInline
        key="burger-video"
        onCanPlay={(e) => {e.target.playbackRate = 1.5}}
      >
        <source src={`/burger.mp4?v=${Date.now()}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`background-image ${videoEnded ? 'fade-in' : ''}`} />
      <main>
        <Title />
        <section>
          <IngredientList 
            ingredients={availableIngredients} 
            addToBurger={addToBurger}
          />
          <BurgerStack 
            ingredients={stack}
            removeFromBurger={removeFromBurger}
          />
        </section>
      </main>
    </>
  );
};

export default App;
