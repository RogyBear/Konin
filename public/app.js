var btn = document.querySelectorAll('.btn');
var purpleTransition = document.querySelector('.color-change-purple');
var purpleBoxTransition = document.querySelector('.purple-box');
var whiteBoxTransition = document.querySelector('.white-box');
var slideLeft = document.querySelector('.center-layout__suit');
var slideRight = document.querySelector('.center-layout__casual');
var vedushy = document.querySelector('.purple-box__info__vedushy__blue-box');
var conferanceyo = document.querySelector('.white-box__info__conferanceyo__blue-box');
var active = false;
var currentX;
var initialX;
var xOffset = 0;
var dragItem = document.querySelector('.divider__slider');
var container = document.querySelector('.wrapper');
var centerLayout = document.querySelector('.center-layout');

//Mobile event listener
var expandButton = document.querySelector('.purple-box__btn');
var purpleBox = document.querySelector('.purple-box');
var purpleText = document.querySelector('.purple-box__info__text');
var purpleBtn = document.querySelector('.purple-box__btn');
var pos = container.clientWidth * 0.5;

// btn[0].addEventListener('click', function() {
// 	var pos = container.clientWidth * 0.5;
// 	console.log(pos);
// 	if (purpleBoxTransition.clientWidth === container.clientWidth * 0.5) {
// 		active = true;
// 		// initialX = e.clientX - xOffset;
// 		var interval = setInterval(function() {
// 			// console.log('dscasdc');
// 			var falseMouse = {
// 				preventDefault: function() {},
// 				clientX: whiteBoxTransition.clientWidth - 100
// 			};
// 			// console.log(falseMouse.clientX);

// 			drag(falseMouse);
// 			if (whiteBoxTransition.clientWidth <= container.clientWidth * 0.22) {
// 				clearInterval(interval);
// 				active = false;
// 			}
// 		}, 500);
// 		// purpleTransition.classList.remove('leftToCenter', 'rightToCenter');
// 		// purpleTransition.classList.add('centerToLeft');
// 		// whiteBoxTransition.classList.add('centerToRight');
// 		// slideRight.classList.remove('disappearReverse', 'appearReverse');
// 		// slideLeft.classList.remove('appearReverse', 'disappearReverse');
// 		// slideRight.classList.add('appear');
// 		// slideLeft.classList.add('disappear');
// 		// vedushy.classList.remove('hideBlock');
// 		// vedushy.classList.add('displayBlock');
// 	} else if (purpleBoxTransition.clientWidth < container.clientWidth * 0.5) {
// 		purpleTransition.classList.remove('centerToRight');
// 		purpleBoxTransition.classList.remove('centerToRight');
// 		purpleBoxTransition.classList.add('rightToCenter');
// 		purpleTransition.classList.add('rightToCenter');
// 		slideLeft.classList.remove('appear');
// 		slideRight.classList.remove('disappear');
// 		slideRight.classList.add('disappearReverse');
// 		slideLeft.classList.add('appearReverse');
// 		conferanceyo.classList.remove('displayBlock');
// 		conferanceyo.classList.add('hideBlock');

// 	}
// });

// btn[1].addEventListener('click', function() {
// 	var pos = container.clientWidth * 0.5;
// 	console.log(pos);
// 	if (whiteBoxTransition.clientWidth === container.clientWidth * 0.5) {
// 		purpleTransition.classList.remove('leftToCenter', 'rightToCenter');
// 		purpleTransition.classList.add('centerToRight');
// 		purpleBoxTransition.classList.add('centerToRight');
// 		slideRight.classList.remove('disappearReverse', 'appearReverse');
// 		slideLeft.classList.remove('appearReverse', 'disappearReverse');
// 		slideLeft.classList.add('appear');
// 		slideRight.classList.add('disappear');
// 		conferanceyo.classList.remove('hideBlock');
// 		conferanceyo.classList.add('displayBlock');
// 	} else if (whiteBoxTransition.clientWidth < container.clientWidth * 0.5) {
// 		purpleTransition.classList.remove('centerToLeft');
// 		purpleTransition.classList.add('leftToCenter');
// 		whiteBoxTransition.classList.remove('centerToRight');
// 		whiteBoxTransition.classList.add('rightToCenter');
// 		slideRight.classList.remove('appear');
// 		slideLeft.classList.remove('disappear');
// 		slideLeft.classList.add('disappearReverse');
// 		slideRight.classList.add('appearReverse');
// 		vedushy.classList.remove('displayBlock');
// 		vedushy.classList.add('hideBlock');
// 	}
// });

expandButton.addEventListener('click', function() {
	purpleBox.classList.add('expandPurple');
	purpleText.style.display = 'block';
});

// HOUSE OF THE MOUSE

container.addEventListener('touchstart', dragStart, false);
container.addEventListener('touchend', dragEnd, false);
container.addEventListener('touchmove', drag, false);

container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);

function dragStart(e) {
	if (e.type === 'touchstart') {
		initialX = e.touches[0].clientX - xOffset;
	} else {
		initialX = e.clientX - xOffset;
	}

	if (e.target === dragItem) {
		active = true;
	}
}

function dragEnd(e) {
	initialX = currentX;
	active = false;
}

function drag(e) {
	if (active) {
		e.preventDefault();

		if (e.type === 'touchmove') {
			currentX = e.touches[0].clientX - initialX;
		} else {
			currentX = e.clientX - initialX;
		}
		console.log(currentX);
		xOffset = currentX;
		setTranslate(currentX, dragItem);
	}
}

function setTranslate(xPos, el) {
	console.log(xPos);
	if (screen.width > 1480) {
		if (xPos < 421 && xPos > -421) {
			console.log('triggered 1');
			slideLeft.style.width = xPos + centerLayout.clientWidth * 0.5 + 'px';
			el.style.transform = 'translateX(' + xPos + 'px)';
			whiteBoxTransition.style.width = xPos + container.clientWidth * 0.5 + 'px';
			purpleTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
			slideRight.style.width = -xPos + centerLayout.clientWidth * 0.5 + 'px';
			purpleBoxTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
		}
	} else if (1250 < screen.width && screen.width < 1480) {
		if (xPos < 327 && xPos > -327) {
			console.log('triggered 2');
			slideLeft.style.width = xPos + centerLayout.clientWidth * 0.5 + 'px';
			el.style.transform = 'translateX(' + xPos + 'px)';
			whiteBoxTransition.style.width = xPos + container.clientWidth * 0.5 + 'px';
			purpleTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
			slideRight.style.width = -xPos + centerLayout.clientWidth * 0.5 + 'px';
			purpleBoxTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
		}
	} else if (1160 < screen.width && screen.width < 1250) {
		console.log('triggered 3');
		if (xPos < 285 && xPos > -285) {
			slideLeft.style.width = xPos + centerLayout.clientWidth * 0.5 + 'px';
			el.style.transform = 'translateX(' + xPos + 'px)';
			whiteBoxTransition.style.width = xPos + container.clientWidth * 0.5 + 'px';
			purpleTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
			slideRight.style.width = -xPos + centerLayout.clientWidth * 0.5 + 'px';
			purpleBoxTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
		}
	}
}

// Display Form BLock
var order = document.querySelector('.white-box__info__order-call');
var form = document.querySelector('.white-box__info__order-call__form');
order.addEventListener('click', function() {
	form.style.visibility = 'visible';
	form.classList.add('displayBlock');
});
