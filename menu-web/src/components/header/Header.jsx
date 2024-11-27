import "./header.scss";
function Header({text, subtitle = null}) {
	return (
		<div>
		    <div className="header">
		    	<h1 className="header-text">{text}</h1>
		    </div>
			{subtitle ? <h2 className="header-subtitle">{subtitle}</h2> : null}
		</div>
	);
}

export default Header;