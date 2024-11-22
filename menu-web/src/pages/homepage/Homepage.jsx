import { useState } from 'react';
import { ProductList, FilterList, Nav, Footer } from 'components';
const Homepage = () => {
	const [filters, setFilters] = useState([]);
	return (
		<div>
			<div>
				<Nav
				/>
			</div>
			<div>
				<FilterList 
					filters={filters} 
					onFiltersChange={setFilters} />
			</div>
			<div>
				<ProductList 
					filters={filters}
				/>
			</div>
			<div>
				<Footer
				/>
			</div>
		</div>
	);
};

export default Homepage;