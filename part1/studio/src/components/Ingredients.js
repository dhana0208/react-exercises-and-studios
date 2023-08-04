import styles from './Ingredients.module.css';
const ingredients=["1 cup salted butter softened" ,"1 cup white (granulated) sugar","1 cup light brown sugar packed", "2 tsp pure vanilla extract",
    "2 large eggs"];
export default function RecipeIngredients(){
   return( <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>);

}