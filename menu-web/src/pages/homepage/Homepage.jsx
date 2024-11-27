import './homepage.scss';
import { useState } from 'react';
import { CategoryList, FilterList, Search, Nav, Footer } from 'components';
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
					<Search 
						filters={filters}
						onFiltersChange={setFilters}
					/>
				</div>
			</div>
			<div>

				<div>
					<CategoryList
						filters={filters}
					/>
				</div>
			</div>

			<div>
				<Footer
				/>
			</div>
		</div>
	);
};

export default Homepage;