// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {/* PSEUDO CODE STEP 4: Map through props.ingredients array (same pattern) */}
      {props.ingredients.map((ingredient, index) => (
        // PSEUDO CODE STEP 5: For each ingredient, render an <li> with the ingredient name
        // Using CSS custom property instead of inline backgroundColor
        <li
          key={index}
          style={{ '--ingredient-color': ingredient.color }}
          className="ingredient-item"
        >
          {ingredient.name}
          {/* PSEUDO CODE: Button that calls removeFromBurger function */}
          <button onClick={() => props.removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;