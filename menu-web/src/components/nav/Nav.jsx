import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import "./nav.scss";

const Nav = () => {
	const [open, setOpen] = useState(false);

	const handleLanguageChange = (lang) => {
		console.log("Idioma seleccionado:", lang);
		setOpen(false);
		// Aquí podrías integrar i18n.changeLanguage(lang)
	};

	return (
		<div>
			<div className="nav">
				<div className="items-nav">
					<div className="logo"></div>

					<div>
						<h1>GrowBarato</h1>
					</div>

					<div className="language-selector-wrapper">
						<div className="language-selector" onClick={() => setOpen(!open)}>
							<FaGlobe />
						</div>
						{open && (
							<div className="language-menu">
								<div onClick={() => handleLanguageChange("es")}>🇪🇸 Español</div>
								<div onClick={() => handleLanguageChange("en")}>🇺🇸 English</div>
								<div onClick={() => handleLanguageChange("fr")}>🇫🇷 Français</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
