// var caller = $("#emcee")

// function foo()
// {
//     var randX = Math.random() * (window.innerWidth - 200);
//     var randY = Math.random() * (window.innerHeight - 100);
//     console.log([window.innerWidth, window.innerHeight]);
//     caller.stop().animate({"left": randX + "px", "top": randY + "px"});

// }

// $(document).ready(function() {
    
//     caller.stop().animate({"left": 1800 + "px", "top": 50 + "px"});
//     caller.on('mouseenter', foo);
//     caller.on('click', function(){
//         alert('clicked!');
//     });
    
// });

jQuery(document).ready(function($){
	//cache some jQuery objects
	// var modalTrigger = $('.cd-modal-trigger'),
	var modalTrigger = $('.nav-icon'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = transitionLayer.data('frame'), //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		var modalId = $(event.target).attr('href');
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800;
		setTimeout(function(){
			modalWindow.filter(modalId).addClass('visible');
			transitionLayer.removeClass('opening');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
});

const translate = document.querySelectorAll(".translate");
const translateMoon = document.querySelectorAll(".translateMoon");

window.addEventListener('scroll', () => {
	let scroll = window.pageYOffset;
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;
	})
})

window.addEventListener('scroll', () => {
	let scroll = window.pageYOffset;
	translateMoon.forEach(element => {
		let speed = element.dataset.speed;
		// element.style.transform = `translateY(${-2 *scroll * speed}px)`;
		element.style.transform = `translateX(${-1.5 * scroll * speed}px) translateY(${1*scroll * speed}px)`;
		element.style.width = `${300 - (scroll/4)}px`;
		console.log(scroll);
	})
})