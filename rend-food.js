

export function renderMe(food){

    const place = document.createElement('li');
    place.classList.add('food-card'); 
    
    const name = document.createElement('span');
    name.textContent = food.name;
    
    const img = document.createElement('img');
    img.src = food.img;

    place.append(name, img);
    return place;
}