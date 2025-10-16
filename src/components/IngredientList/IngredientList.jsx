// src/components/IngredientList/IngredientList.jsx


import { memo } from 'react';
import Ingredient from '../Ingredient/Ingredient';
import styles from './ingredientItem.module.css';

const IngredientList = (props) => {
  const ingredients = props.ingredients || [];

  return (
    <ul>
      {/* PSEUDO CODE STEP 1: Map through props.ingredients array */}
      {ingredients.map((ingredient, index) => {
        return (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onCLick={() => props.addToBurger(ingredient)}
            buttonText="+"
          />
        );
      })}
    </ul>
  );
};

export default memo(IngredientList);