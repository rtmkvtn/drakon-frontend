import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import Lang from "./Lang";

const Header = (props) => {
	const [menuOpened, setMenuOpened] = useState(false);
	const {videosVisible, mediaLinks} = props;
	const {t} = useTranslation();
	const location = useLocation();

	const handleLinkClick = (e, path) => {
		if (location.pathname === path) {
			e.preventDefault()
		}
		if (menuOpened) {
			setMenuOpened(false)
		}
	}

	const renderMedia = () => {
		if (mediaLinks && mediaLinks.length) {
			return mediaLinks.map((link) => (
				// eslint-disable-next-line jsx-a11y/anchor-has-content
				<a
					key={link._id}
					href={link.link}
					target='_blank'
					rel='noreferrer'
					className={`social-link ${link.type}-icon`}
				/>
			))
		}
	}

	return (
		<div className={`header ${menuOpened ? 'mobile-shown' : ''}`}>
			<Link to="/"
			      className={`logo animate__animated ${menuOpened && window.innerWidth < 810 ? 'animate__heartBeat' : ''}`}/>
			<ul className="nav">
				<li className="nav-item">
					<Link to="/" onClick={(e) => handleLinkClick(e, '/')}>{t('Главная')}</Link>
				</li>
				<li className="nav-item">
					<Link to="/news" onClick={(e) => handleLinkClick(e, '/news')}>{t('Новости')}</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>{t('О группе')}</Link>
				</li>
				<li className="nav-item">
					<Link to="/music" onClick={(e) => handleLinkClick(e, '/music')}>{t('Дискография')}</Link>
				</li>
				<li className="nav-item">
					<Link to="/photo" onClick={(e) => handleLinkClick(e, '/photo')}>{t('Фото')}</Link>
				</li>
				{
					videosVisible ?
						<li className="nav-item">
							<Link to="/video" onClick={(e) => handleLinkClick(e, '/video')}>{t('Видео')}</Link>
						</li>
						: null
				}
			</ul>
			<Lang />
			<ul className="header-social-links">
				{renderMedia()}
			</ul>
			<button
				className={`mobile-menu ${menuOpened && 'opened'}`}
				onClick={() => setMenuOpened(!menuOpened)}
			/>
		</div>
	)
}

export default Header;
