import { useState } from 'react';
import { ProductList, FilterList } from 'components';
const Homepage = () => {
	const [filters, setFilters] = useState([]);
	return (
		<div>
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
		</div>
	);
};

export default Homepage;