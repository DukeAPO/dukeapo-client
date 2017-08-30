import React from 'react';
import font from '../CSS/Font.css';
import w from './Welcome.css';
import banner from '../Assets/DukeApoBanner.png';
import FlatButton from 'material-ui/FlatButton';

class Welcome extends React.Component{
	render(){
		const listServeButtonStyle = {
			borderRadius: '16px',
			border: '1px solid',
			textAlign: 'center'
		}
		const text = {
		description: 'The Lambda Nu Chapter of Alpha Phi Omega, Duke’s only co-ed service fraternity, was \
			founded in 1955. We consist of both Pratt and Trinity students alike and contain members of \
			Greek life, Quidditch, student government, and more. Despite our differences, we’re one big \
			family that serves together, and we invite you to learn more about our fraternity!',
    };
	return(
      <div className = {w.container}>
        <h1 className={w.title}>
          Welcome to Duke Alpha Phi Omega!
        </h1>
		<div class="bodyText">
			<p className={w.welcome}>
				{text.description}
			</p>
		</div>
        <FlatButton style={listServeButtonStyle} fullWidth={true} href={'eepurl.com/cwEmij'}>
			<h4 className={'${font.h4} ${w.buttonText}'}>
				Join our list serv
			</h4>
		</FlatButton>
      </div>
	);
	}
}

export default Welcome;