/* eslint-disable */
import menu from "assets/menu.json";

export const getMenuItemById = (id, categoryName = null) => {
    if (categoryName) {
        return menu.categories
            .find((category) => category.category === categoryName)
            .menu.find((item) => item.id === id);
    } else {
        return menu.categories
            .map((category) => category.menu)
            .flat()
            .find((item) => item.id === id);
    }
};
