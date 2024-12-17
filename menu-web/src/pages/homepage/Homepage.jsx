import './homepage.scss';
import { useState } from 'react';
import { ProductList, FilterList, Search, Nav, Footer, PopUpCard, CategoryList } from 'components';
import { getTags } from 'utils/getTags';
const Homepage = () => {

	
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
						tags={tags} />
					<Search 
						filters={filters}
						onFiltersChange={setFilters}
					/>
				</div>
			</div>
			<div>
				{popUp && (
					<PopUpCard
						imgPath={popUp.imgPath}
						title={popUp.title}
						currency={popUp.currency}
						price={popUp.price}
					/>
				)}
				<ProductList 
					filters={filters}
					onPopUp={setPopUp}
				/>

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