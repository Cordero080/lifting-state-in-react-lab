// src/components/BurgerStack/BurgerStack.jsx

import { memo } from 'react';
import styles from '../IngredientList/ingredientItem.module.css';

const BurgerStack = (props) => {
  return (
    <>
      {props.ingredients.length > 0 && (
        <div className={styles.burgerHeader}>
          <h3>Your Stack</h3>
          <button 
            className={styles.clearAllBtn}
            onClick={props.clearAll}
            title="Remove all ingredients"
          >
            Clear All
          </button>
        </div>
      )}
      <ul>
      {/* PSEUDO CODE STEP 1: Check if props.ingredients array is empty */}
      {props.ingredients.length === 0 ? (
        /* PSEUDO CODE STEP 2: If empty, display a message "No Ingredients" */
        <li className={styles.emptyState}>
          No Ingredients yet 
        </li>
      ) : (
        /* PSEUDO CODE STEP 3: If not empty, display the list of ingredients as normal */
        /* PSEUDO CODE STEP 4: Map through props.ingredients array (same pattern) */
        props.ingredients.map((ingredient, index) => {
          const total = props.ingredients.length;
          const reverseIndex = total - 1 - index;
          return (
            // PSEUDO CODE STEP 5: For each ingredient, render an <li> with the ingredient name
            // Using CSS custom property instead of inline backgroundColor
            <li
              key={index}
              style={{
                '--ingredient-color': ingredient.color,
                '--ingredient-glow': (ingredient.name === 'Black Bean Patty'
                  ? '#f7b797ff' /* match Soy Patty glow */
                  : (ingredient.glow || ingredient.color)),
                '--stack-delay': `${reverseIndex * 0.05}s`
              }}
              className={`${styles.ingredientItem} ${styles.stackItem}`}
            >
              <span>{ingredient.name}</span>
              {/* PSEUDO CODE: Button that calls removeFromBurger function */}
              <button onClick={() => props.removeFromBurger(index)}>X</button>
            </li>
          );
        })
      )}
    </ul>
    </>
  );
};

export default memo(BurgerStack);