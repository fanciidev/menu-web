import "./categoryList.scss";
import Category from "../category/Category";
import menu from "assets/menu.json";
const categories = menu.categories;
const CategoryList = ({filters}) => {
	return (
		<div className="category-list">
			{categories.map((categoryItem) => 
				<Category 
					name={categoryItem.category} 
					filters={filters} 
					menu={categoryItem.menu} 
					key={categoryItem.id}/>)};    
		</div>
	);
};

export default CategoryList;