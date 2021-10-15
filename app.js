import { renderMe } from "./rend-food.js";
import { food } from "./food.js";

const foodList = document.getElementById('food-list')
for(let spec of food){
    const foodCard = renderMe(spec);
    foodList.append(foodCard);
}