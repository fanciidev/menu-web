import  './FilterList.scss';
import Filter from '../filter/Filter';
// import tags from 'assets/tags.js';
const FilterList = ({filters, onFiltersChange, tags, searchActive}) => {
	const handleFilterChange = (filter) => {
		if (filters.includes(filter)) {
			onFiltersChange(filters.filter(f => f !== filter));
		} else {
			onFiltersChange([...filters, filter]);
		}
	};  
	const fullFilterList = [...new Set([...tags, ...filters])];
	return (
		<div className={searchActive ? 'carrousel search-active' : 'carrousel'}>
			<div className="filter-list">
				{fullFilterList.map((item) => 
					<Filter 
						className='filter'
						key={item} 
						label={item}
						onClick={() => {
							handleFilterChange(item);
						}}
						active={filters.includes(item)}
					/>)}
			</div>
		</div>
	);
};

export default FilterList;