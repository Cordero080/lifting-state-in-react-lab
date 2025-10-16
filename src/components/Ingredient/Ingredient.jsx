// PSEUDO CODE STEP 1: Create a new file called Ingredient.jsx in src/components
// src/components/Ingredient.jsx

// PSEUDO CODE STEP 2: The component accepts props: ingredient, onClick, buttonText
import styles from '../IngredientList/ingredientItem.module.css';

const Ingredient = ({ ingredient, onCLick, buttonText}) => {
  return (
    // PSEUDO CODE STEP 3: Render a single <li> with ingredient name and color
    <li
      key={ingredient.name}
      style={{
        '--ingredient-color': ingredient.color,
        '--ingredient-glow': ingredient.glow || ingredient.color,
        '--stack-delay': '0s'
      }}
      className={styles.ingredientItem}
    >
      <span>{ingredient.name}</span>
      {/* PSEUDO CODE STEP 4: Render a button with the buttonText prop */}
      {/* PSEUDO CODE STEP 5: When button is clicked, call the onClick function */}
      <button onClick={onCLick}>{buttonText}</button>
    </li>
  );
};

export default Ingredient;