import React from 'react';
import style from './PledgingButton.css';
import FlatButton from 'material-ui/FlatButton';
import button from '../CSS/Button.css';
import font from '../CSS/Font.css';

class PledgingButton extends React.Component{
	growDivFunc() {
		const growDiv = document.getElementsByClassName(style.grow);
		if (growDiv.length !== 0) {
		    if (growDiv[0].clientHeight) { 
		    	growDiv[0].style.height = 0;
		    } else {
		      	const wrapper = document.querySelector('.measuringWrapper');
		      	growDiv[0].style.height = wrapper.clientHeight + "px";
			}
			document.getElementsByClassName("more-button").value=document.getElementsByClassName("more-button").value=='Read more'?'Read less':'Read more';	
		}
	}
	render() { 	
		return (	
				<div>
				<input type="button" onClick={this.growDivFunc} value={'Pledging Requirements'} className={`${style.more_button} `}></input>
				<div className={`${style.grow}`} >
	          		<div className="measuringWrapper">
	            		<div className="text">
	            			<h4 className={`${font.h4}`}>
	            				SERVICE REQUIREMENTS
	            			</h4>
	            		</div>
	          		</div>
	        	</div>
	        	</div>
	        // </FlatButton>
		);
	}
}

export default PledgingButton;
