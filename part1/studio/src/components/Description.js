import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component{
    render(){
       return  (<div> 
      <div>
         <h1>The Best Chocolate Chip Cookie Recipe Ever</h1>
         <p>This is the best chocolate chip cookie recipe ever. No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time! </p>
      </div>
      <RecipeAuthor />
     </div>);

    }
}


function RecipeAuthor() {
      const authorLink="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies";
      const authorPhoto="https://joyfoodsunshine.com/wp-content/uploads/2023/04/cropped-author-avatar-64x64.jpg";
      const authorName="Laura";
 return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a> 
       </div>
    </div>
 );

}

export default RecipeDescription;