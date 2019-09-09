import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/PhotoCarousel.css';
import { Carousel } from 'react-responsive-carousel';
class PhotoCarousel extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Carousel showThumbs={false} showStatus={false} width={500}>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1567637903900-7a2f05e37e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1567117068494-1cb546a001ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div className="photoSize">
					<img src="https://images.unsplash.com/photo-1532996228489-082708ddbde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
				</div>
			</Carousel>
		);
	}
}

export default PhotoCarousel;
