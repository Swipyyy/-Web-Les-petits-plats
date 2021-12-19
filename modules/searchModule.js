import { searchData, baseData } from './baseData.js';
import { listOfRecipes } from './const.js';

const injectData = () => {
  document.getElementById('input').addEventListener('keyup', function () {
    const recherche = this.value.toLowerCase();
    if (recherche.length < 3) {
      return baseData();
    }
    const rechercheFin = [];
    for (const p of listOfRecipes) {
      const ingredientsArray = [];
      let send = false;
      for (const a of p.ingredients) {
        ingredientsArray.push(a.ingredient.toLowerCase());
      }
      if (
        p.name.toLowerCase().includes(recherche) ||
        p.appliance.toLowerCase().includes(recherche)
      ) {
        send = true;
      }
      for (const d of ingredientsArray) {
        if (d.includes(recherche)) {
          send = true;
        }
      }

      for (const d of p.ustensils) {
        if (d.includes(recherche)) {
          send = true;
        }
      }

      if (send === true) {
        rechercheFin.push(p);
      }
    }
    console.log(rechercheFin);
    document.getElementById('recettes').innerHTML = '';
    for (const p of rechercheFin) {
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
  });
};
export { baseData, injectData, searchData };
