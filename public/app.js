var purpleTransition = document.querySelector('.color-change-purple');
var purpleBoxTransition = document.querySelector('.purple-box');
var whiteBox = document.querySelector('.white-box');
var whiteBoxTransition = document.querySelector('.white-box');
var slideLeft = document.querySelector('.center-layout__suit');
var slideRight = document.querySelector('.center-layout__casual');
var active = false;
var currentX;
var initialX;
var xOffset = 0;
var dragItem = document.querySelector('.divider__slider');
var container = document.querySelector('.wrapper');
var centerLayout = document.querySelector('.center-layout');
var order = document.querySelector('.white-box__info__order-call');
var form = document.querySelector('.white-box__info__order-call__form');

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

		xOffset = currentX;
		setTranslate(currentX, dragItem);
	}
}

function setTranslate(xPos, el) {
	if (screen.width > 1480) {
		if (xPos < 421 && xPos > -421) {
			slideLeft.style.width = xPos + centerLayout.clientWidth * 0.5 + 'px';
			el.style.transform = 'translateX(' + xPos + 'px)';
			whiteBoxTransition.style.width = xPos + container.clientWidth * 0.5 + 'px';
			purpleTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
			slideRight.style.width = -xPos + centerLayout.clientWidth * 0.5 + 'px';
			purpleBoxTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
		}
	} else if (1250 < screen.width && screen.width < 1480) {
		if (xPos < 327 && xPos > -327) {
			slideLeft.style.width = xPos + centerLayout.clientWidth * 0.5 + 'px';
			el.style.transform = 'translateX(' + xPos + 'px)';
			whiteBoxTransition.style.width = xPos + container.clientWidth * 0.5 + 'px';
			purpleTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
			slideRight.style.width = -xPos + centerLayout.clientWidth * 0.5 + 'px';
			purpleBoxTransition.style.width = -xPos + container.clientWidth * 0.5 + 'px';
		}
	} else if (1160 < screen.width && screen.width < 1250) {
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

order.addEventListener('click', function() {
	form.style.visibility = 'visible';
	form.classList.add('displayBlock');
});
