import  './FilterList.scss';
import Filter from '../filter/Filter';
import tags from 'assets/tags.js';
const FilterList = ({filters, onFiltersChange}) => {
	const handleFilterChange = (filter) => {
		if (filters.includes(filter)) {
			onFiltersChange(filters.filter(f => f !== filter));
		} else {
			onFiltersChange([...filters, filter]);
		}
	};  
	const fullFilterList = [...new Set([...tags, ...filters])];
	return (
		<div className="filter-list">
			{fullFilterList.map((item) => 
				<Filter 
					key={item} 
					label={item}
					onClick={() => {
						handleFilterChange(item);
					}}
					active={filters.includes(item)}
				/>)}
		</div>
	);
};

export default FilterList;