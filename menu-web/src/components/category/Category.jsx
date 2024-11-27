import { menu } from 'assets/menu.json';
import { Header, ProductList } from 'components';
import "./category.scss";
const Category = ({name, filters, menu}) => {
	return (
		<div className="category">
			<Header text={name} />
			<ProductList 
				filters={filters}
				menu={menu} />
		</div>
	);
};

export default Category;