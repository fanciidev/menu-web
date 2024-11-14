import "./filter.scss";
const Filter = ({onClick, label, active}) => {
	return (
		<button
			className={`filter ${active ? "active" : ""}` }
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Filter;