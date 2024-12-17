import './homepage.scss';
import { useState } from 'react';
import { FilterList, Search, Nav, Footer, PopUpCard, CategoryList } from 'components';
import { getTags, getMenuItemById } from 'utils';
import menu from "assets/menu.json";
const Homepage = () => {

	
	const [searchActive, setSearchActive] = useState(false);
	const [filters, setFilters] = useState([]);
	const [popUp, setPopUp] = useState(null);
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
						item={getMenuItemById(popUp.menuId)}
						setPopUp={setPopUp}
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