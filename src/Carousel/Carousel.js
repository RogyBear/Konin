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
						'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1567637903900-7a2f05e37e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1567117068494-1cb546a001ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1532996228489-082708ddbde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					]
				}
			],
			videoData: [
				{
					id: 1,
					data: [
						'https://images.unsplash.com/photo-1537118169787-d32386cdd0a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
						'https://images.unsplash.com/photo-1540776135613-1ce741484f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
						'https://images.unsplash.com/photo-1567117068494-1cb546a001ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
						'https://images.unsplash.com/photo-1532996228489-082708ddbde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					]
				}
			]
		};
		this.displayCarousel = this.displayCarousel.bind(this);
	}

	displayCarousel(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value === 'photo' ? !this.state.displayPhotoCarousel : !this.state.displayVideoCarousel
		});
	}

	render() {
		let carousel = null;
		if (this.state.displayPhotoCarousel) {
			carousel = (
				<div className="pop-up">
					{this.state.photoData.map((el) => {
						return <PhotoCarousel key={el.id} content={el.data} />;
					})}
				</div>
			);
		} else if (this.state.displayVideoCarousel) {
			carousel = (
				<div className="pop-up">
					{this.state.videoData.map((el) => {
						return <PhotoCarousel key={el.id} content={el.data} />;
					})}
				</div>
			);
		}
		return (
			<div className="Carousel">
				<button className="carousel-btn" name="displayPhotoCarousel" value="photo" onClick={this.displayCarousel}>
					Фото
				</button>
				<button className="carousel-btn" name="displayVideoCarousel" value="video" onClick={this.displayCarousel}>
					Видео
				</button>
				{carousel}
			</div>
		);
	}
}
export default Carousel;
