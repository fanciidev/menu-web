import "./card.scss";
import { PopUpCard } from "components";
const Card = ({imgPath, title, currency, price}) => {
	return (
		<div className="card">
			<div className="container">
				<img src={imgPath} className="card-img" alt="" />
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
					<p className="card-price">{currency + price}</p>
					<button onClick={() => PopUpCard(imgPath, title, currency, price)}>Ver mas</button>
				</div>
			</div>
		</div>
	);
};

    
export default Card;