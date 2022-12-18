import React, { useRef } from 'react';
import './Gallery.css';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from 'react-icons/bs';

const Galleryimages = [
	images.gallery01,
	images.gallery02,
	images.gallery03,
	images.gallery04,
];

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className='gallery flex__center'>
			<div className='gallery-content'>
				<SubHeading title='Instagram' />
				<h1 className='headtext__cormorant'>Photo Gallery</h1>
				<p
					className='p__opensans'
					style={{ color: '#AAA', marginTop: '2rem' }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Volutpat mattis ipsum turpis elit elit
					scelerisque egestas mu.
				</p>
				<button className='custom__button' type='button'>
					View More
				</button>
			</div>

			<div className='gallery-images'>
				<div
					className='gallery-images_container'
					ref={scrollRef}
				>
					{Galleryimages.map((image, index) => (
						<div
							className='gallery-images_card flex__center'
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt='gallery' />
							<BsInstagram className='gallery__image-icon' />
						</div>
					))}
				</div>
				<div className='gallery-images_arrows'>
					<BsArrowLeftShort
						className='gallery__arrow-icon'
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className='gallery__arrow-icon'
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
};
export default Gallery;
