import React from 'react';
import PhotoCarousel from './components/PhotoCarousel';
import VideoCarousel from './components/VideoCarousel';
import './css/Carousel.css';

function Carousel() {
	return (
		<div className="Carousel">
			<PhotoCarousel />
			<VideoCarousel />
		</div>
	);
}

export default Carousel;
