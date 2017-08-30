import React from 'react';
import font from '../CSS/Font.css';
import w from './Welcome.css';
import JoinListServeButton from '../JoinListServeButton';
import SocialButton from '../SocialButton';
import facebookImage from '../Assets/Facebook.png';
import instagramImage from '../Assets/Instagram.png';

class Welcome extends React.Component{
	render(){
		const text = {
		description: 'The Lambda Nu Chapter of Alpha Phi Omega, Duke’s only co-ed service fraternity, was \
			founded in 1955. We consist of both Pratt and Trinity students alike and contain members of \
			Greek life, Quidditch, student government, and more. Despite our differences, we’re one big \
			family that serves together, and we invite you to learn more about our fraternity!',
    };
		const buttons = [
			<SocialButton src={facebookImage} href={'https://www.facebook.com/DukeAlphaPhiOmega/'} />,
			<JoinListServeButton fullWidth={true}/>,
			<SocialButton src={instagramImage} href={'https://www.instagram.com/dukeapo/'} />
		];
		const buttonLi = [];
		buttons.forEach(function(buttonElement) {
			buttonLi.push(
				<li className={w.li}>
					{buttonElement}
				</li>
			);
		});
		const buttonOrder = <ul className={w.ul}>{buttonLi}</ul>;
	return(
      <div>
				<div className = {w.titleContainer}>
	        <h1 className={`${font.h1} ${w.title}`}>
	          Welcome to Duke Alpha Phi Omega!
	        </h1>
				</div>
				<div className={`${w.welcomeContainer}`}>
					<p className={`${font.p} ${w.welcome}`}>
						{text.description}
					</p>
				</div>
				<div className={`${w.buttonContainer}`}>
					{buttonOrder}
				</div>
      </div>
	);
	}
}

export default Welcome;
