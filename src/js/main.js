$(document).ready(function() {
	var body = document.body;
    setTimeout(() => body.classList.add('render'), 500);
	setTimeout(() => body.style.overflowY = 'auto', 500);
})

//mobile menu
var selectorMenu = document.querySelector('.mob__menu'); // menu selector
var svgMenu = document.querySelector('.mob__header-item-phone'); // button selector
svgMenu.onclick = function() {
	if (selectorMenu.classList.contains('active-menu') && (svgMenu.classList.contains('active'))) {
		selectorMenu.classList.remove('active-menu');
		svgMenu.classList.remove('active');
	} else {
		selectorMenu.classList.add('active-menu');
		svgMenu.classList.add('active');
	}
}

//close menu by window resize
window.onresize = function() {
	selectorMenu.classList.remove('active-menu');
	svgMenu.classList.remove('active');
	popup.classList.remove('popup-active');
	popupBg.classList.remove('popup-bg-active');
}

// slider how
var swiperHow = new Swiper('.slider2', {
	slidesPerView: 5,
	speed: 500,
	allowTouchMove: false,
	pagination: {
		el: '.how__slider .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		900: {
			slidesPerView: 3,
			allowTouchMove: true,
		},
		600: {
			slidesPerView: 1,
			allowTouchMove: true,
		}
	}
});

// slider examples
var swiperExamples = new Swiper('.slider3', {
	spaceBetween: 10,
	allowTouchMove: false,
	nested: true,
	navigation: {
		nextEl: '.examples__slider .swiper-button-next',
		prevEl: '.examples__slider .swiper-button-prev',
	},
	pagination: {
		el: '.examples__slider .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

// slider rates
var swiperExamples = new Swiper('.slider5', {
	spaceBetween: 20,
	slidesPerView: 3,
	grabCursor: false,
	allowTouchMove: false,
	autoHeight: true,
	navigation: {
		nextEl: '.rates__slider .swiper-button-next',
		prevEl: '.rates__slider .swiper-button-prev',
	},
	pagination: {
		el: '.rates__slider .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		991: {
			grabCursor: true,
			slidesPerView: 1,
			allowTouchMove: true,
		},
	}
});

//send mail
var sendMail = function sendMail(selector) {
  return fetch('mail.php', {
	method: 'POST',
	body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
	alertify.error("Ошибка. Повторите отправку позже");
  });
};

// form for callback method with yandex counter
var callForm = function() {
	document.querySelector(".callbackblock__form-button"); // button selector
	document.querySelector(".callbackblock__form").onsubmit = function(n) { //menu selector
		n.preventDefault(), callBack(".callbackblock__form").then(function(e) { //menu selector
			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
		})
	};
}
callForm();

//send popup
var popupSend = function sendMail(selector) {
	return fetch('popup.php', {
	  method: 'POST',
	  body: new FormData(document.querySelector(selector))
	}).catch(function (error) {
	  alertify.error("Ошибка. Повторите отправку позже");
	});
};

// form for popup method with yandex counter
var popupForm = function() {
	document.querySelector(".popup__form-button"); // button selector
	document.querySelector(".popup__form").onsubmit = function(n) { //menu selector
		n.preventDefault(), popupSend(".popup__form").then(function(e) { //menu selector
			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
		})
	};
}
popupForm();

//pretty fixed nav
fixedNavigationMenu = function() {
	var e = document.querySelector(".header"); //menu selector
	var m = document.querySelector('.menu');
	window.onscroll = function() {
		window.pageYOffset > 0 ? (e.style.backgroundColor = "rgba(0,0,0,.8)", m.style.border = "none") : (e.style.backgroundColor = "", m.style.border = "")
	}
}
fixedNavigationMenu();

//smoothscroll
new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    after: function() {
        document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "0px"
    }
});

// mask for "tel" input
var input = document.querySelectorAll('input[type="tel"]')
var mask = new Inputmask("+7 (999) 999-99-99");
for (i = 0; i < input.length; i++){
var input = document.querySelectorAll('input[type="tel"]')
	mask.mask(input[i]);
}

var popupButton = document.querySelectorAll('.callback');
var popup = document.querySelector('.popup');
var popupBg = document.querySelector('.popup-bg');
var popupClose = document.querySelector('.popup__form-close');

for (i = 0; i < popupButton.length; i++) {
	popupButton[i].onclick = function() {
		popup.classList.toggle('popup-active');
		popupBg.classList.toggle('popup-bg-active');
	}
}

popupBg.onclick = function() {
	popup.classList.toggle('popup-active');
	popupBg.classList.toggle('popup-bg-active');
}

popupClose.onclick = function() {
	popup.classList.toggle('popup-active');
	popupBg.classList.toggle('popup-bg-active');
}

//close popup by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		popup.classList.remove('popup-active');
		popupBg.classList.remove('popup-bg-active');
	}
};

$('.home-bg', '.examples-bg').parallax({imageSrc: '/images/home-bg.jpg'});
$('.footer-overlay').parallax({imageSrc: '/images/footer-bg.jpg'});
$('.faq2-bg').parallax({imageSrc: '/images/faq2-bg.jpg'});

var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null,    // optional scroll container selector, otherwise use window,
	  resetAnimation: true,     // reset animation on end (default is true)
	}
  );
  wow.init();

var call = document.getElementById('calllnow');
var calllater = document.getElementById('calllater');
var textarea = document.querySelector('.popup__form-textarea');
calllater.onclick = function() {
	textarea.classList.toggle('hide');
}
callnow.onclick = function() {
	textarea.classList.add('hide');
}

var win = $(window);
var counter = $('.form__block-price');
var id = 0;
win.scroll(function() {
	if(id == 0 && win.scrollTop() + win.height() > counter.offset().top) {
		var ccc = 0;
		id = setInterval( function() {
			ccc += 10000;
			counter.html(ccc + " руб.");
			if (ccc == 280000) {
				clearInterval(id);
			}
		}, 50)
	}
});

