import "./categoryList.scss";
import Category from "../category/Category";
import menu from "assets/menu.json";
const categories = menu.categories;
let idCounter = 0;
const CategoryList = ({filters, onPopUp}) => {
	return (
		<div className="category-list">
			{categories.map((categoryItem) => 
				<Category 
					name={categoryItem.category} 
					filters={filters} 
					menu={categoryItem.menu} 
					key={++idCounter}/>)};
					onPopUp={onPopUp}    
		</div>
	);
};

export default CategoryList;