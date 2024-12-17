import { Header, ProductList } from 'components';
import "./category.scss";
const Category = ({name, filters, menu, onPopUp}) => {
	return (
		<div className="category">
			<Header text={name} />
			<ProductList 
				categoryName={name}
				filters={filters}
				menu={menu} 
				onPopUp={onPopUp}/>
		</div>
	);
};

export default Category;