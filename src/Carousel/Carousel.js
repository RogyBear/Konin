import React, { Component } from 'react';
import PhotoCarousel from './components/PhotoCarousel';

import './css/Carousel.css';

class Carousel extends Component {
	constructor() {
		super();
		this.state = {
			displayVideoCarousel: false,
			displayPhotoCarousel: false,
			photoData: [
				{
					id: 1,
					data: [
						{ id: 1, src: require('../img/pic1.jpg') },
						{ id: 2, src: require('../img/pic2.jpg') },
						{ id: 3, src: require('../img/pic3.jpg') },
						{ id: 4, src: require('../img/pic4.jpg') },
						{ id: 5, src: require('../img/pic5.jpg') },
						{ id: 9, src: require('../img/pic9.jpg') }
					]
				}
			],
			videoData: [
				{
					id: 2,
					data: [ 
						{ id: 10, src:'https://www.youtube.com/embed/_RxTA6UYL34'},
						{ id: 11, src:"https://www.youtube.com/embed/ieKTMeai8wQ"},
						{ id: 12, src:"https://www.youtube.com/embed/qPmvk3viQtA"} 
					]
				}
			]
		};
		this.displayCarousel = this.displayCarousel.bind(this);
		this.destroy = this.destroy.bind(this);
	}

	displayCarousel(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value === 'photo' ? !this.state.displayPhotoCarousel : !this.state.displayVideoCarousel
		});
	}

	destroy() {
		this.setState({
			displayVideoCarousel: false,
			displayPhotoCarousel: false
		});
	}

	render() {
		let carousel = null;
		if (this.state.displayPhotoCarousel) {
			carousel = (
				<div className="pop-up">
					{this.state.photoData.map((el) => {
						return <PhotoCarousel key={el.id} id={el.id} content={el.data} destroy={this.destroy} />;
					})}
				</div>
			);
		} else if (this.state.displayVideoCarousel) {
			carousel = (
				<div className="pop-up">
					{this.state.videoData.map((el) => {
						return <PhotoCarousel key={el.id} id={el.id} content={el.data} destroy={this.destroy} />;
					})}
				</div>
			);
		} else if (!this.state.displayVideoCarousel || !this.state.displayPhotoCarousel) {
			carousel = null;
		}
		return (
			<div className="Carousel">
				<button
					className="carousel-btn"
					name="displayPhotoCarousel"
					value="photo"
					onClick={this.displayCarousel}
				>
					Фото
				</button>
				<button
					className="carousel-btn"
					name="displayVideoCarousel"
					value="video"
					onClick={this.displayCarousel}
				>
					Видео
				</button>
				{carousel}
			</div>
		);
	}
}
export default Carousel;
