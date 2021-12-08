import { recipes } from '../data/recipes.js';
import { RecipeClass } from './class.js';
import { listOfRecipes } from './const.js';

const searchData = () => {
  for (const p of recipes) {
    listOfRecipes.push(
      new RecipeClass(
        p.id,
        p.name,
        p.servings,
        p.ingredients,
        p.time,
        p.description,
        p.appliance,
        p.ustensils
      )
    );
  }
  console.log(listOfRecipes);
  listOfRecipes.forEach(elt => {
    console.log(elt);
    document
      .getElementById('recettes')
      .insertAdjacentHTML('afterbegin', elt.name);
  });
};

export { searchData };
