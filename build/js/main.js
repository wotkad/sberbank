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
    if($(window).width() > 880) {
    	selectorMenu.classList.remove('active-menu');
    	svgMenu.classList.remove('active');
    	popup.classList.remove('popup-active');
    	popupBg.classList.remove('popup-bg-active');
    }
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

//send callback
var callBack = function sendMail(selector) {
  return fetch('mail.php', {
	method: 'POST',
	body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
	alertify.error("Ошибка. Повторите отправку позже");
  });
};

// form for callback method with yandex counter
var callForm = function() {
	document.querySelector(".callbackblock__block-form-button"); // button selector
	document.querySelector(".callbackblock__block-form").onsubmit = function(n) { //menu selector
		n.preventDefault(), callBack(".callbackblock__block-form").then(function(e) { //menu selector
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
		document.body.style.overflowY = 'hidden';
	}
}

popupBg.onclick = function() {
	popup.classList.toggle('popup-active');
	popupBg.classList.toggle('popup-bg-active');
	document.body.style.overflowY = 'auto';
}

popupClose.onclick = function() {
	popup.classList.toggle('popup-active');
	popupBg.classList.toggle('popup-bg-active');
	document.body.style.overflowY = 'auto';
}

//close popup by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		popup.classList.remove('popup-active');
		popupBg.classList.remove('popup-bg-active');
		document.body.style.overflowY = 'auto';
	}
};

$('.home-bg').parallax({imageSrc: '/images/home-bg.jpg'});

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

    //Переменная для включения/отключения индикатора загрузки
	var spinner = $('.ymap-container').children('.loader');
	//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
	var check_if_load = false;
	//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
	var myMapTemp, myPlacemarkTemp;

	//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
	function init () {
	  var myMapTemp = new ymaps.Map("map-yandex", {
		center: [55.703980, 37.625758], // координаты центра на карте
		zoom: 15, // коэффициент приближения карты
		controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
	  });
	  var myPlacemarkTemp = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [55.703980, 37.625758] // координаты, где будет размещаться флажок на карте
		}
	  });
	  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

	  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
	  var layer = myMapTemp.layers.get(0).get(0);

	  // Решение по callback-у для определения полной загрузки карты
	  waitForTilesLoad(layer).then(function() {
		// Скрываем индикатор загрузки после полной загрузки карты
		spinner.removeClass('is-active');
	  });
	}

	// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
	function waitForTilesLoad(layer) {
	  return new ymaps.vow.Promise(function (resolve, reject) {
		var tc = getTileContainer(layer), readyAll = true;
		tc.tiles.each(function (tile, number) {
		  if (!tile.isReady()) {
			readyAll = false;
		  }
		});
		if (readyAll) {
		  resolve();
		} else {
		  tc.events.once("ready", function() {
			resolve();
		  });
		}
	  });
	}

	function getTileContainer(layer) {
	  for (var k in layer) {
		if (layer.hasOwnProperty(k)) {
		  if (
			layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
			|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer
		  ) {
			return layer[k];
		  }
		}
	  }
	  return null;
	}

	// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
	function loadScript(url, callback){
	  var script = document.createElement("script");

	  if (script.readyState){  // IE
		script.onreadystatechange = function(){
		  if (script.readyState == "loaded" ||
				  script.readyState == "complete"){
			script.onreadystatechange = null;
			callback();
		  }
		};
	  } else {  // Другие браузеры
		script.onload = function(){
		  callback();
		};
	  }

	  script.src = url;
	  document.getElementsByTagName("head")[0].appendChild(script);
	}

	// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
	var ymap = function() {
	  $('.ymap-container').mouseenter(function(){
		  if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

			  // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
			check_if_load = true;

			// Показываем индикатор загрузки до тех пор, пока карта не загрузится
			spinner.addClass('is-active');

			// Загружаем API Яндекс.Карт
			loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
			   // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
			   ymaps.load(init);
			});
		  }
		}
	  );
	}

	$(function() {

	  //Запускаем основную функцию
	  ymap();

	});

var faqShadow = document.querySelector('.faq__block-text-shadow');
var faqText = document.querySelector('.faq__block-text');
var moreButton = document.querySelector('.faq__block-button');
moreButton.onclick = function() {
	faqText.style.height = 'auto';
	faqText.style.boxShadow = '0 0 23px 3px rgba(0,0,0,0.1)';
	faqShadow.style.display = 'none';
	moreButton.style.display = 'none';
}
