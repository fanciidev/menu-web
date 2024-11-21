import { useState } from 'react';
import { ProductList, FilterList, Search } from 'components';
const Homepage = () => {
	const [filters, setFilters] = useState([]);
	return (
		<div>
			<div>
				<div>
					<FilterList 
						filters={filters} 
						onFiltersChange={setFilters} />
					<Search />
				</div>
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