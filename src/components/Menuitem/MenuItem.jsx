import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
	<div className='menu_item'>
		<div className='menu_item-head'>
			<div className='menu_item-name'>
				<p
					className='p__cormorant'
					style={{ color: '#DCCA87' }}
				>
					{title}
				</p>
			</div>

			<div className='menu_item-dash' />

			<div className='menu_item-price'>
				<p
					className='p__cormorant'
					style={{ color: '#29c6d1' }}
				>
					{price}
				</p>
			</div>
		</div>

		<div className='menu_item-sub'>
			<p className='p__opensans' style={{ color: '#AAA' }}>
				{tags}
			</p>
		</div>
	</div>
);

export default MenuItem;
