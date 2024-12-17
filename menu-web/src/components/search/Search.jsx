import { useState } from 'react';
import './search.scss';
function Search({filters, onFiltersChange}) {  
	const [isActive, setActive] = useState(false);
	const handleFilterChange = (filter) => {
		if (filters.includes(filter)) {
			onFiltersChange(filters.filter(f => f !== filter));
		} else {
			onFiltersChange([...filters, filter]);
		}
	};  
	const searchFunction = () => {
		if (isActive) {
			const searchInput = document.getElementsByClassName('search-input-active form-input');
			if (searchInput[0] && searchInput[0].value) {
				handleFilterChange(searchInput[0].value.toLowerCase());
				searchInput[0].value = '';
			}	
		} else {
			setActive(true);
		}
	};
    
	return (
		<div className="search">
			<svg className="search-icon" 
				onClick={searchFunction} 
				viewBox="0 0 50 50">
				<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
			</svg>
			<input 
				onKeyUp={e => e.key === 'Enter' ? searchFunction() : null} 
				className={isActive ? 'search-input-active form-input': 'search-input-inactive'} 
				type="text"
				placeholder="Search" />
		</div>
	);
}

export default Search;