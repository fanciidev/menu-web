/* eslint-disable */
import menu from "assets/menu.json";

export const getTags = () => {
    const tags = [];
    menu.categories.forEach((category) =>
        category.menu.forEach((menuItem) =>
            menuItem.tags.forEach((tag) => tags.push(tag))
        )
    );
    return [...new Set(tags)];
};
