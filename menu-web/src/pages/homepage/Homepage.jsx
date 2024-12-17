import './homepage.scss';
import { useState } from 'react';
import { CategoryList, FilterList, Search, Nav, Footer } from 'components';
import { getTags } from 'utils/getTags';
const Homepage = () => {
	const [filters, setFilters] = useState([]);
	const [searchActive, setSearchActive] = useState(false);

	const tags = getTags();
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
						onFiltersChange={setFilters}
						tags={tags}
						searchActive={searchActive} />
					<Search 
						filters={filters}
						isActive={searchActive}
						setActive={setSearchActive}
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