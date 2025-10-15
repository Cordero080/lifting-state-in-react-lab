// src/App.jsx

import { useState, useEffect } from 'react'

import './App.css'
// PSEUDO CODE STEP 1: Import IngredientList component from its file

import IngredientList from './components/IngredientList/IngredientList.jsx';
// PSEUDO CODE STEP 2: Import BurgerStack component from its file

import BurgerStack from './components/BurgerStack/BurgerStack.jsx';


import './App.css';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
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
        <h1>Burger St<span className="fade-bottom">a</span>cker</h1>
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
