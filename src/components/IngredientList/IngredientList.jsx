// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  const ingredients = props.ingredients || [];

  return (
    <ul>
      {/* PSEUDO CODE STEP 1: Map through props.ingredients array */}
      {ingredients.map((ingredient, index) => (
        // PSEUDO CODE STEP 2: For each ingredient, render an <li> with the ingredient name
        // Using CSS custom property instead of inline backgroundColor
        <li 
          key={index} 
          style={{ '--ingredient-color': ingredient.color }}
          className="ingredient-item"
        >
          {ingredient.name}
          {/* PSEUDO CODE STEP 3: Button that calls addToBurger function */}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;