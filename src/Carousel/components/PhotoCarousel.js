import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/PhotoCarousel.css';
import { Carousel } from 'react-responsive-carousel';
class PhotoCarousel extends Component {
	constructor(props) {
		super(props);
		this.handleCloseClick = this.handleCloseClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener('click', this.handleCloseClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleCloseClick, false);
	}

	handleCloseClick(event) {
		if (this.node.contains(event.target) || (!this.node.contains(event.target) && !this.x.contains(event.target))) {
			this.props.destroy();
		}
	}
	render() {
		return (
			<div className="photo-display" ref={(x) => (this.x = x)}>
				<button className="x-btn" ref={(node) => (this.node = node)} />
				<Carousel className="carousel-custom" showThumbs={false} showStatus={false} width={1000} height={800}>
					{this.props.content.map((el, i) => {
						return (
							<div className="photoSize">
								<img className="img-popup" src={this.props.content[i]} />
							</div>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default PhotoCarousel;
