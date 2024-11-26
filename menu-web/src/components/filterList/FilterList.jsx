import  './FilterList.scss';
import Filter from '../filter/Filter';
import tags from 'assets/tags.js';
import menu from 'assets/menu.json';
const menuCategories = menu.menu.map((item) => item.category.toLowerCase());
const FilterList = ({filters, onFiltersChange}) => {
	const handleFilterChange = (filter) => {
		if (filters.includes(filter)) {
			onFiltersChange(filters.filter(f => f !== filter));
		} else {
			onFiltersChange([...filters, filter]);
		}
	};  
	const fullFilterList = [...new Set([...tags, ...filters, ...menuCategories])];
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