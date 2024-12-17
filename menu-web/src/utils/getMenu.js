/* eslint-disable */
let json = {
    categories: []
};
let menu = json.categories;
let idCounter = 0;
const catalogo = document.getElementById('catalogoProductos');

for (const child of catalogo.children) {
    //Conseguir la info
    const infoDiv = child.getElementsByClassName('info')[0];
    const name = infoDiv.getElementsByTagName('h2')[0].textContent;
    const infoFromName = name.split(' - ');

    //Filtrar categories y crear categories segun no existan
    const categoryName = infoFromName[0];
    if (menu.length === 0) {
        menu.push({ category: categoryName, menu: [] });
    }
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].category === categoryName) {
            break;
        }
        if (i === menu.length - 1) {
            menu.push({ category: categoryName, menu: [] });
        }
    }

    //Crear el item
    let item = {
        id: ++idCounter,
        img: child.getElementsByTagName('img')[0].src,
        title: infoFromName[1],
        price: child.getElementsByClassName('monto')[0].textContent,
        currency: child.getElementsByClassName('sim')[0].textContent,
        tags: infoFromName,
        description: child.getElementsByClassName('desc')[0].textContent,
        stock: true
    };

    menu.forEach((category) => {
        console.log(category);
        if (category.category === categoryName) {
            console.log('entered');
            category.menu.push(item);
        }
    });
}

json.categories = menu;


// {
//     "id": 11,
//     "img": "https://example.com/images/product11.jpg",
//     "title": "AK-47 - Pack 5",
//     "price": "1,150",
//     "currency": "UYU",
//     "tags": [
//         "semillas",
//         "híbrido",
//         "versátil"
//     ],
//     "description": "AK-47 es una variedad versátil, con un balance perfecto entre relajación y energía.",
//     "stock": true,
//     "url": "https://example.com/products/ak-47-pack5",
//     "brand": "Genetics Pro"
// },