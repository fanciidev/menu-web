import "./footer.scss";
import logo from "../../assets/img/logo.png";
import gmail from "../../assets/img/gmail.png";
import linkedin from "../../assets/img/linkedin.png";
import ig from "../../assets/img/instagram.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="logoFooter">
				<img src={logo} alt="" />
			</div>
			<div className="socialmedia">
				<ul>
					<li>
						<img src={gmail} alt="" />
					</li>
					<li>
						<img src={linkedin} alt="" />
					</li>
					<li>
						<img src={ig} alt="" />
					</li>
				</ul>
			</div>
			<div className="bottomText">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit tempora sed consequuntur provident aperiam corrupti, facilis neque voluptatibus ab laudantium nostrum blanditiis reprehenderit praesentium dicta animi ducimus optio nulla?</p>
			</div>
		</div>
	);
};

    
export default Footer;