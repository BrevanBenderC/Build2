

export function renderMe(food){

    const place = document.createElement('li');
           
    const name = document.createElement('span');
    name.textContent = food.name;
    name.classList.add('food-name');
    
    const img = document.createElement('img');
    img.src = food.img;

    place.append(name, img);
    return place;
}