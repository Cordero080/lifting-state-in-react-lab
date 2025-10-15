// src/components/BurgerStack/BurgerStack.jsx
import styles from '../IngredientList/ingredientItem.module.css';

const BurgerStack = (props) => {
  return (
    <ul>
      {/* PSEUDO CODE STEP 4: Map through props.ingredients array (same pattern) */}
      {props.ingredients.map((ingredient, index) => {
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
          className={styles.ingredientItem}
        >
          <span>{ingredient.name}</span>
          {/* PSEUDO CODE: Button that calls removeFromBurger function */}
          <button onClick={() => props.removeFromBurger(index)}>X</button>
        </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;