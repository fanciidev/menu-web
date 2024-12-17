import { useState } from "react";
import "./popupCard.scss";

const PopUpCard = ({ imgPath, title, currency, price }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="cardPopedUp">
			<div className="popupContainer">
				<img src={imgPath} className="popupCard-img" alt="" />
				<div className="popupCard-body">
					<h3 className="popupCard-title">{title}</h3>
					<p className="popupCard-price">{currency + price}</p>
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