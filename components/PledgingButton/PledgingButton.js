import React from 'react';
import growDiv from './PledgingButton.css';


class PledgingButton extends React.Component{
	render() { 	
		function growDiv(props) {
	    	const growDiv = document.getElementById('grow');
	    	if (growDiv.clientHeight) { 
	    		growDiv.style.height = 0;
	    	} else {
	      		const wrapper = document.querySelector('.measuringWrapper');
	      		growDiv.style.height = wrapper.clientHeight + "px";
		}
		return (		
			<PledgingButton 
		);
	}
	ReactDOM
	document.getElementById("more-button").value=document.getElementById("more-button").value=='Read more'?'Read less':'Read more';	
}

export default PledgingButton;