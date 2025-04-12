import { useEffect } from "react";
import "./popupCard.scss";

const PopUpCard = ({ item, setPopUp }) => {
	const handleClickOutside = (event) => {
		// Verifica si el clic fue fuera del componente referenciado
		if (event.target.getAttribute("class") === "cardPopedUp") {
			setPopUp(null);
		}
	};

	useEffect(() => {
		// Bloquear el scroll en el body cuando el popup esté abierto
		document.body.style.overflow = "hidden";  // Bloqueo del scroll

		// Agrega el listener al documento cuando el componente está montado
		document.addEventListener('mousedown', handleClickOutside);

		// Limpia el listener y permite el scroll nuevamente cuando el popup se desmonta
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = "auto";  // Restaura el scroll
		};
	}, []); // Solo se ejecuta cuando el componente se monta

	const { img, title, currency, price, description, stock, tags, categoryName } = item;

	const onClose = () => {
		setPopUp(null);
	};

	return (
		<div className="cardPopedUp" onClick={handleClickOutside}>
			<div className="popupContainer">
				{/* Botón de cierre */}
				<div className="popupCard-close-button">
					<button className="close" onClick={onClose}>&times;</button>
				</div>
				<img src={img} className="popupCard-img" alt="" />
				<div className="popupCard-body">
					<h3 className="popupCard-title">{title}</h3>
					<p className="popupCard-price">{currency + price}</p>

					<div className="popupCard-tags">
						{tags.map((tag) => (
							<span className="popupCard-tag" key={tag}>{tag}</span>
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
		</div>
	);
};

export default PopUpCard;
