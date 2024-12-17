import "./card.scss";
import { PopUpCard } from "components";



const Card = ({menuId, categoryName, imgPath, title, currency, price, onPopUp}) => {
	return (
		<div onClick={() => onPopUp({menuId, categoryName, imgPath, title, currency, price})} className="card">
			<div className="container">
				<img src={imgPath} className="card-img" alt="" />
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
					<p className="card-price">{currency + price}</p>
				</div>
			</div>
		</div>
	);
};

    
export default Card;