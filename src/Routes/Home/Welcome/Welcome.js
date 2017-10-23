// React and Util
import React, { Component } from 'react';
import JoinListServeButton from '../JoinListServeButton';
import SocialButton from '../SocialButton';
import { PickImageByProportion } from '../../../Util/PickImage.js';

// Style
import './Welcome.css';

const facebookImageHref = 'https://www.facebook.com/DukeAlphaPhiOmega/';
const instagramImageHref = 'https://www.instagram.com/dukeapo/';
const text = `The Lambda Nu Chapter of Alpha Phi Omega, Duke’s only co-ed
	service fraternity, was founded in 1955. We consist of both Pratt and Trinity
	students alike and contain members of Greek life, Quidditch, student
	government, and more. Despite our differences, we’re one big family that
	serves together, and we invite you to learn more about our fraternity!`;

class Welcome extends Component{
	render(){
		const facebookImage = PickImageByProportion('Facebook.png', 0.2, 0.1);
		const instagramImage = PickImageByProportion('Instagram.png', 0.2, 0.1);
		const buttons = [
			<SocialButton src={facebookImage} href={facebookImageHref}/>,
			<JoinListServeButton fullWidth={true}/>,
			<SocialButton src={instagramImage} href={instagramImageHref}/>
		];
		const buttonLi = [];
		buttons.forEach(function(buttonElement) {
			buttonLi.push(
				<li className={'routes-home-welcome-button-li '}>
					{buttonElement}
				</li>
			);
		});
		const buttonOrder = <ul className={`routes-home-welcome-button-ul`}>{buttonLi}</ul>;
	return(
      <div>
				<div className = {`routes-home-welcome-title-container`}>
	        <h1 className={`routes-home-welcome-title`}>
						Welcome to Duke Alpha Phi Omega!
	        </h1>
				</div>
				<div className={`routes-home-welcome-text-container`}>
					<p className={`routes-home-welcome-text`}>
						{text}
					</p>
				</div>
				<div className={`routes-home-welcome-button-container`}>
					{buttonOrder}
				</div>
      </div>
	);
	}
}

export default Welcome;
