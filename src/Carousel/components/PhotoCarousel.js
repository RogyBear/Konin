import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/PhotoCarousel.css';
import { Carousel } from 'react-responsive-carousel';
class PhotoCarousel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pop-up-border">
				<div className="x-btn" />
				<div className="photo-display">
					<Carousel showThumbs={false} showStatus={false} width={500}>
						{this.props.content.map((el, i) => {
							return (
								<div className="photoSize">
									<img src={this.props.content[i]} />
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
		);
	}
}

export default PhotoCarousel;
