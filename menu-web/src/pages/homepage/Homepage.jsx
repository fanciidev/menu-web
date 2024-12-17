import './homepage.scss';
import { useState } from 'react';
import { ProductList, FilterList, Search, Nav, Footer, PopUpCard } from 'components';
const Homepage = () => {

	
	const [filters, setFilters] = useState([]);
	const [popUp, setPopUp] = useState(null);


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
			</div>
			<div>
				<Footer
				/>
			</div>
		</div>
	);
};

export default Homepage;