import './homepage.scss';
import { useState } from 'react';
import { ProductList, FilterList, Search, Nav, Footer, PopUpCard, CategoryList } from 'components';
import { getTags } from 'utils/getTags';
import menu from "assets/menu.json";
const Homepage = () => {

	
	const [filters, setFilters] = useState([]);
	const [popUp, setPopUp] = useState(null);
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
				{popUp && (
					<PopUpCard
						menu={menu}
						onClose={() => setPopUp(null)}
					/>
				)}
				<div>
					<CategoryList
						filters={filters}
						onPopUp={setPopUp}
						menu={menu}
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