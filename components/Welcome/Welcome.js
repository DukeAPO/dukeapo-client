import React from 'react';
import w from './Welcome.css';
import banner from '../Assets/DukeApoBanner.png';

export const Welcome = () => (
      <div className = {w.container} class="container">
        <h1 class="title">
          Welcome to Duke Alpha Phi Omega!
        </h1>
		<div class="bodyText">
			<p class="welcome">
			The Lambda Nu Chapter of Alpha Phi Omega, Duke’s only co-ed service fraternity, was founded in 1955. 
			We consist of both Pratt and Trinity students alike and contain members of Greek life, Quidditch, 
			student government, and more. Despite our differences, we’re one big family that serves together, 
			and we invite you to learn more about our fraternity!
			</p>
		</div>
        <button type="button" className = {w.welcomeButton} class="welcome-button" href="eepurl.com/cwEmij">Join our ListServ</button>
      </div>
);

export default Welcome;