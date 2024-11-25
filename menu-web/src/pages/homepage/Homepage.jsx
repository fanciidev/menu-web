import './homepage.scss';
import { useState } from 'react';
import { ProductList, FilterList, Search, Nav, Footer } from 'components';
const Homepage = () => {
	const [filters, setFilters] = useState([]);
	return (
		<div>
			<div>
				<Nav
				/>
			</div>
			<div>
				<div className='filters'>
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
			<div>
				<Footer
				/>
			</div>
		</div>
	);
};

export default Homepage;