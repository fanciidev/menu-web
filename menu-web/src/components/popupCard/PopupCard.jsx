import { useState } from "react";

const PopUpCard = ({ imgPath, title, currency, price }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="card">
			<div className="container">
				<img src={imgPath} className="card-img" alt="" />
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
					<p className="card-price">{currency + price}</p>
				</div>
			</div>
			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={togglePopup}>&times;</span>
						<img src={imgPath} alt="" />
						<h3>{title}</h3>
						<p>{currency + price}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PopUpCard;