// src/components/IngredientList/IngredientList.jsx
import styles from './ingredientItem.module.css';

const IngredientList = (props) => {
  const ingredients = props.ingredients || [];

  return (
    <ul>
      {/* PSEUDO CODE STEP 1: Map through props.ingredients array */}
      {ingredients.map((ingredient, index) => {
        const total = ingredients.length;
        const reverseIndex = total - 1 - index; // bottom-to-top delay
        return (
        // PSEUDO CODE STEP 2: For each ingredient, render an <li> with the ingredient name
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
          className={styles.ingredientItem}
        >
          <span>{ingredient.name}</span>
          {/* PSEUDO CODE STEP 3: Button that calls addToBurger function */}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;