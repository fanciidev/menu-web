import "./categoryList.scss";
import Category from "../category/Category";

let idCounter = 0;
const CategoryList = ({filters, onPopUp, menu}) => {
	const categories = menu.categories;
	return (
		<div className="category-list">
			{categories.map((categoryItem) => 
				<Category 
					name={categoryItem.category} 
					filters={filters} 
					menu={categoryItem.menu} 
					key={++idCounter}
					onPopUp={onPopUp}/>)};
		</div>
	);
};

export default CategoryList;