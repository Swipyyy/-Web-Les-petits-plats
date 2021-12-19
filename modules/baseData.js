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
  });
};

const baseData = () => {
  for (const p of listOfRecipes) {
    document.getElementById('recettes').insertAdjacentHTML(
      'afterbegin',
      `<div class="recipe" id="recipe${p.id}">
  <div class="recipeImg">
    <img src="./medias/menu-logo.png" class="imgMin" />
  </div>
  <div class="recipeContent">
    <div class="recipeHeader">
      <div class="title">${p.name}</div>
      <i class="far fa-clock"> ${p.time} min</i>
    </div>
    <div class="recipeDetails">
      <div class="list" id="list${p.id}">
        <ul class="detailList" id="detailList${p.id}">
        </ul>
      </div>
      <div class="todo">
        ${p.description}
      </div>
    </div>
  </div>
</div>
`
    );
    for (const d of p.ingredients) {
      if (typeof d.unit === 'undefined') {
        const myList = document.getElementById('list' + p.id);
        const createList = document.createElement('li');
        const listContent = document.createTextNode(
          d.ingredient + ':' + ' ' + d.quantity
        );
        myList.appendChild(createList);
        createList.appendChild(listContent);
      } else {
        switch (d.unit) {
          case 'grammes': {
            const myList = document.getElementById('list' + p.id);
            const createList = document.createElement('li');
            const listContent = document.createTextNode(
              d.ingredient + ':' + ' ' + d.quantity + ' g'
            );
            myList.appendChild(createList);
            createList.appendChild(listContent);
            break;
          }
          default: {
            const myList = document.getElementById('list' + p.id);
            const createList = document.createElement('li');
            const listContent = document.createTextNode(
              d.ingredient + ':' + ' ' + d.quantity + ' ' + d.unit
            );
            myList.appendChild(createList);
            createList.appendChild(listContent);
          }
        }
      }
    }
  }
};

export { searchData, baseData };
