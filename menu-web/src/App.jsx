import { Card } from './components';
import { menu } from './assets/menu.json';
import './App.css';

const currencyMap = {
	"EUR": "€",
	"USD": "$"
};

function App() {
	return (
	//Render filters
    
	//Render menu
		<div className="card-container">
			{menu.map((item) => 
				<Card 
					key={item.id} 
					imgPath={item.img} 
					title={item.title.toUpperCase()} 
					currency={currencyMap[item.currency]}
					price={!item.price.includes(',') ? item.price + ",00" : item.price} 
				/>)}
		</div>
    

	);
}

export default App;
