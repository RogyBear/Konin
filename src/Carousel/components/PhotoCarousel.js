import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/PhotoCarousel.css';
import { Carousel } from 'react-responsive-carousel';
const PhotoCarousel = (props) => {
	return (
		<div className="pop-up-border">
			<div className="x-btn" />
			<div className="photo-display">
				<Carousel showThumbs={false} showStatus={false} width={500}>
					{props.content.map((el, i) => {
						return (
							<div className="photoSize">
								<img src={props.content[i]} />
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default PhotoCarousel;
