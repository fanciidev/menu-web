import Card from '../card/Card';
const ProductList = ({filters, menu, onPopUp}) => {
	const filterProducts = () => {
		if (filters.length === 0) {
			return menu;
		}
		return menu.filter((item) => filters.every((filter) => item.tags.includes(filter)));
	};

	const filteredProducts = filterProducts(); 

	return (<div className="card-container">
		{filteredProducts.map((item) => 
			<Card 
				key={item.id} 
				imgPath={item.img} 
				title={item.title.toUpperCase()} 
				currency={item.currency}
				price={!item.price.includes(',') ? item.price + ",00" : item.price}
				onPopUp={onPopUp}
			/>)}
	</div>);
};

export default ProductList;