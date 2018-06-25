(function () {

	// next patch --> switch to js and change animation method for the robot

	$(".item_push-btn").on("click", function () {

		//--------------- nav ----------------------

		$('nav li').removeClass('hidden');

		//--------------- shutters -------------------

		$('.row-shutter--left').addClass("row-shutter--left--active");
		$('.row-shutter--right').addClass("row-shutter--right--active");

		$('.container_main-content').removeClass("hidden");

		function shuttersHide() {
			$('.container_shutters').addClass('hidden');
		}
		setTimeout(shuttersHide, 1500);

		//--------------- clock -------------------

		$('.circle_extern').addClass("circle_extern_rotate");
		$('.img_portrait').addClass("image_portrait_fade-in");

		$('.cercle_interne').addClass('active_cercle_interne');
		$('#item_circle-extern--small').addClass('smaller');
		$('.circle_1_clock').addClass('active_1');
		$('.circle_2_clock').addClass('active_2');
		$('.circle_3_clock').addClass('active_3');
		$('.circle_4_clock').addClass('active_4');
		$('.circle_5_clock').addClass('active_5');
		$('.circle_6_clock').addClass('active_6');
		$('.circle_7_clock').addClass('active_7');
		$('.circle_8_clock').addClass('active_8');
		$('.circle_9_clock').addClass('active_9');
		$('.circle_10_clock').addClass('active_10');

		//--------------- arms ------------------

		$('.container_arms').removeClass('hidden');
		$('.container-manche-g').addClass('container-manche-g-active');
		$('.container-manche-d').addClass('container-manche-d-active');
		$('.title_1').attr('id', 'title_1-active');
		$('.title_2').addClass('title_2-active');
		$('.manche-d-roll').addClass('manche-d-roll-down');
		$('#piston').addClass("piston_hidden");

		function pinceG() {
			$('.arm-left').attr('src', 'images/manche_g.svg');
		}
		setTimeout(pinceG, 7500);
		function pinceD() {
			$('.arm-right').attr('src', 'images/manche_d.svg');
		}
		setTimeout(pinceD, 7000);

		//---------------- robot -------------------------

		$('#canvas').addClass("robot_active");
		$('.machine_container').addClass("machine_container_fixed");


		$('footer').removeClass('hidden');

		//-------------------- btn ------------------

		$('.container_push-btn').addClass('push_btn_disable');
		function pushHidden() {
			$('.container_push-btn').addClass('hidden');
		}
		setTimeout(pushHidden, 2000);

		//-------------------- down arrow -------------------

		$('.slide-down-arrow_box').removeClass('hidden');
		function arrowShow() {
			$('.slide-down-arrow').attr('id','show-arrow');
		}
		setTimeout(arrowShow, 10);

		//-------------------- small robot --------------
		
		$('#yeux').removeClass("hidden");

		//------------------- background --------

		$('main').addClass('main-background--active');

	});

	//---------------------- info robot ----------------------------------------------------------------

	$(document).ready(function () {

		var info = $('.over_item_info');

		info.mouseover(function (event) {
			if ($('#canvas').hasClass("robot_active")) {
				event.stopPropagation();
				var select = $(this);
				var dataInfo = select.attr("data-info");

				$('.info_robot p').text(dataInfo);
				$('.info_robot').fadeTo(200, 1);
			}
		});
		info.mouseout(function (event) {
			event.stopPropagation();
			$('.info_robot').css('display', 'none');
		});
	});


	//--------------------- portrait swipe ------------------------------

	$('.img_portrait').mouseover(function (event) {
		event.stopPropagation();
		$(this).attr('src', 'images/alex_bright.jpg');
	});
	
	$('.img_portrait').mouseout(function (event) {
		event.stopPropagation();
		$(this).attr('src', 'images/alex.jpg');
	});

	//---------------------------------------- skills -------------------------------------

	var skillsWidth = $('.item_skills--small');

	skillsWidth.mouseover(function () {

		var select = $(this);
		var dataWidth = select.attr("data-width");

		select.find('.full').animate({
			width: dataWidth + 'rem'
		}, 400, function () { });

		var calcWidth = 5 - dataWidth;
		
		select.find('.empty').animate({
			width: calcWidth + 'rem'
		}, 400, function () { });

	});

	//---------------------------------------- nav animate -------------------------------------

	$('.nav_item').mouseover(function (event) {
		event.stopPropagation();
		$(this).siblings().addClass('nav-icon_item-animate');
	});
	$('.nav_item').mouseout(function (event) {
		event.stopPropagation();
		$(this).siblings().removeClass('nav-icon_item-animate');
	});

	//--------------------------- scroll --------------------------------------


	$('a[href^="#"]').click(function () {
		var the_id = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(the_id).offset().top
		}, 'slow');
		return false;
	});

		//Scroll-------------- js
			//timer du scroll

		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
		}

		if ( ! window.requestAnimationFrame ) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}

		if ( ! window.cancelAnimationFrame ) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}

		//fonction scrolled
				
		scrolled = function() {

			var compSectionScrollVal = document.querySelector('#comp').offsetTop-600;
			var linksSectionScrollVal = document.querySelector('#links').offsetTop-600;
			var diplomesSectionScrollVal = document.querySelector('#diplomes').offsetTop-600;
			var expSectionScrollVal = document.querySelector('#exp').offsetTop-600;

			var scrollDocument = window.pageYOffset || document.documentElement.scrollTop;

			if($('#comp').hasClass('unseen') && scrollDocument > compSectionScrollVal){
				$('#comp').removeClass('unseen').addClass('box_main-content--show');
			}
			else if($('#links').hasClass('unseen') && scrollDocument > linksSectionScrollVal){
				$('#links').removeClass('unseen').addClass('box_main-content--show');
			}
			else if($('#diplomes').hasClass('unseen') && scrollDocument > diplomesSectionScrollVal){
				$('#diplomes').removeClass('unseen').addClass('box_main-content--show');
			}
			else if($('#exp').hasClass('unseen') && scrollDocument > expSectionScrollVal){
				$('#exp').removeClass('unseen').addClass('box_main-content--show');
			}
		},

		onScrolling = function() {
			scrolled();
		};
			
		// quand on scroll

		window.addEventListener('scroll', function(){
			window.requestAnimationFrame( onScrolling );
		});

})()

//------------------------- canvas ---------------------------------

// to improve performances, it may change in the future

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("9BDF45BE59E99643A27C936EFB414600");
	var lib = comp.getLibrary();
	handleComplete({}, comp);
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	exportRoot = new lib.robot();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	var mediaQ = window.innerWidth;
	if(mediaQ>640){
		fnStartAnimation = function () {
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
	}
	
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w * pRatio * sRatio;
			canvas.height = h * pRatio * sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	makeResponsive(false, 'both', false, 1);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
