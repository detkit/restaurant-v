import React from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
	<div className='newsletter'>
		<div className='newsletter-heading'>
			<SubHeading title='Newsletter' />
			<h1 className='headtext__cormorant'>
				Subscribe To Our Newsletter
			</h1>
			<p className='p__opensans'>And never miss latest Updates!</p>
		</div>
		<div className='newsletter-input flex__center'>
			<input type='email' placeholder='Your Address Email' />
			<button type='button' className='custom__button'>
				Subscribe
			</button>
		</div>
	</div>
);

export default Newsletter;
