import { useState } from "react";
import "./popupCard.scss";

const PopUpCard = ({ imgPath, title, price, currency, tags, description, stock }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	console.log(imgPath, title, price, currency, tags, description, stock);

	return (
		<div className="cardPopedUp">
			<div className="popupContainer">
				<img src={imgPath} className="popupCard-img" alt="" />
				<div className="popupCard-body">
					<h3 className="popupCard-title">{title}</h3>
					<p className="popupCard-price">{currency + price}</p>

					<div className="popupCard-tags">
						{tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>

					<div className="popupCard-description">
						<p>{description}</p>
					</div>

					<div className="popupCard-stock">
						{stock ? (
							<p>Stock disponible</p>
						) : (
							<p>Stock agotado</p>
						)}
					</div>
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