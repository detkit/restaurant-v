import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import image from '../../constants/images';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<img src={image.gericht} alt='app logo' />
			</div>
			<ul className='navbar-links'>
				<li className='p__opensans'>
					<a href='#home'>Home</a>
				</li>
				<li className='p__opensans'>
					<a href='#about'>About</a>
				</li>
				<li className='p__opensans'>
					<a href='#menu'>Menu</a>
				</li>
				<li className='p__opensans'>
					<a href='#awards'>Awards</a>
				</li>
				<li className='p__opensans'>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='navbar-login'>
				<a href='#login' className='p__opensans'>
					Log In / Register
				</a>
				<div />
				<a href='/' className='p__opensans'>
					Book Table
				</a>
			</div>
			<div className='navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>

				{toggleMenu && (
					<div className='navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu
							fontSize={27}
							className='overlay_close'
							onClick={() => setToggleMenu(false)}
						/>
						<ul className='navbar-smallscreen_links'>
							<li
								className='p__opensans'
								onClick={() =>
									setToggleMenu(false)
								}
							>
								<a href='#home'>Home</a>
							</li>
							<li
								className='p__opensans'
								onClick={() =>
									setToggleMenu(false)
								}
							>
								<a href='#about'>About</a>
							</li>
							<li
								className='p__opensans'
								onClick={() =>
									setToggleMenu(false)
								}
							>
								<a href='#menu'>Menu</a>
							</li>
							<li
								className='p__opensans'
								onClick={() =>
									setToggleMenu(false)
								}
							>
								<a href='#awards'>Awards</a>
							</li>
							<li
								className='p__opensans'
								onClick={() =>
									setToggleMenu(false)
								}
							>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
