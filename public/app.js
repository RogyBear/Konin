var btn = document.querySelectorAll('.btn');
var purpleTransition = document.querySelector('.color-change-purple');
var purpleBoxTransition = document.querySelector('.purple-box');
var whiteBoxTransition = document.querySelector('.white-box');
var slideLeft = document.querySelector('.center-layout__suit');
var slideRight = document.querySelector('.center-layout__casual');
var vedushy = document.querySelector('.purple-box__info__vedushy__blue-box');
var conferanceyo = document.querySelector('.white-box__info__conferanceyo__blue-box');
var expandButton = document.querySelector('.purple-box__btn');
var purpleBox = document.querySelector('.purple-box');
var purpleText = document.querySelector('.purple-box__info__text');


var pos = 50;

btn[0].addEventListener('click', function() {
	if (pos == 50) {
		
		purpleTransition.classList.remove('leftToCenter', 'rightToCenter');
		purpleTransition.classList.add('centerToLeft');
		whiteBoxTransition.classList.add('centerToRight');
		slideRight.classList.remove('disappearReverse', 'appearReverse');
		slideLeft.classList.remove('appearReverse', 'disappearReverse');
		slideRight.classList.add('appear');
		slideLeft.classList.add('disappear');
		vedushy.classList.remove('hideBlock');
		vedushy.classList.add('displayBlock');
	

		pos = 72;
	} else if (pos == 28) {
		purpleTransition.classList.remove('centerToRight');
		purpleBoxTransition.classList.remove('centerToRight');
		purpleBoxTransition.classList.add('rightToCenter');
		purpleTransition.classList.add('rightToCenter');
		slideLeft.classList.remove('appear');
		slideRight.classList.remove('disappear');
		slideRight.classList.add('disappearReverse');
		slideLeft.classList.add('appearReverse');
		conferanceyo.classList.remove('displayBlock');
		conferanceyo.classList.add('hideBlock');

		pos = 50;
	}
});

btn[1].addEventListener('click', function() {
	if (pos == 50) {
		purpleTransition.classList.remove('leftToCenter', 'rightToCenter');
		purpleTransition.classList.add('centerToRight');
		purpleBoxTransition.classList.add('centerToRight');
		slideRight.classList.remove('disappearReverse', 'appearReverse');
		slideLeft.classList.remove('appearReverse', 'disappearReverse');
		slideLeft.classList.add('appear');
		slideRight.classList.add('disappear');
		conferanceyo.classList.remove('hideBlock');
		conferanceyo.classList.add('displayBlock');

		pos = 28;
	} else if (pos == 72) {
		purpleTransition.classList.remove('centerToLeft');
		purpleTransition.classList.add('leftToCenter');
		whiteBoxTransition.classList.remove('centerToRight');
		whiteBoxTransition.classList.add('rightToCenter');
		slideRight.classList.remove('appear');
		slideLeft.classList.remove('disappear');
		slideLeft.classList.add('disappearReverse');
		slideRight.classList.add('appearReverse');
		vedushy.classList.remove('displayBlock');
		vedushy.classList.add('hideBlock');
		pos = 50;
	}
});

expandButton.addEventListener('click', function(){
	purpleBox.classList.add('expandPurple');
	purpleText.style.overflow = 'visible';
})