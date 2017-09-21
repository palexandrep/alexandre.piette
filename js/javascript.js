(function(){
	$(".push_btn").on("click", function(){

		$('nav section').removeClass('hidden');
		$('.sous-container-global-cache-left').addClass("sous-container-global-cache-left-active");
		$('.sous-container-global-cache-right').addClass("sous-container-global-cache-right-active");

		$('main').removeClass("main-cache");
		$('.presentation').removeClass("hidden");
		$('#yeux').removeClass("hidden");
		$('html').css('overflow-y', 'visible');

		$('#piston').addClass("piston_dis");
		$('.circle_1').addClass("circle_1_fade-in");
		$('.circle_2').addClass("circle_2_fade-in");
		$('.circle_3').addClass("circle_3_fade-in");
		$('.circle_4').addClass("circle_4_fade-in");

		$('.circle_6').addClass("circle_6_fade-in");
		$('.circle_5').addClass("circle_5_fade-in");
		$('.circle_8').addClass("circle_8_fade-in");
		$('.circle_9').addClass("circle_9_fade-in");
		$('.circle_10').addClass("circle_10_fade-in");
		$('.circle_extern').addClass("circle_extern_rotate");
		$('.img_portrait').addClass("image_portrait_fade-in");

		$('.cercle_interne').addClass('active_cercle_interne');
		$('#circleexternsmall').addClass('smaller');
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
		$('.title_1').addClass('title_1_active');
		$('.title_2').addClass('title_2_active');
		

		$('.container-manche-g').addClass('container-manche-g-active');
		$('.container-manche-d').addClass('container-manche-d-active');
		$('.title_1').attr('id','title_1-active');
		$('.title_2').addClass('title_2-active');


		$('.manche-d-roll').addClass('manche-d-roll-down');

		$('nav').addClass('nav_shadow');
		$('.push_btn').addClass('push_btn_disable');
		//$('.info_robot').addClass('info_robot-fade-in');

		$('#canvas').addClass("robot_active");
		$('.machine_container').addClass("machine_container_fixed");
		function pinceG (){
			$('.tige-left').attr('src','images/manche_g.svg');
			
		}
		setTimeout(pinceG, 7500);
		function pinceD (){
			$('.tige-right').attr('src','images/manche_d.svg');
		}
		setTimeout(pinceD, 7000);

		function cacheHide (){
			$('.container-global-cache').addClass('hidden');
		}
		setTimeout(cacheHide, 7800);

		function pushHidden (){
			$('.push_btn').addClass('hidden');
		}
		setTimeout(pushHidden, 2000);

	});

	/*function timeoutCircle(){
		$('.cercle_interne').addClass('rotate_cercle_interne');
	}
	$(".push_btn").on("click", function(){
		 setTimeout(timeoutCircle, 8000);
	});*/

	$(document).ready(function(){


			var info = $('.over_item_info');

			info.mouseover(function(event){
				if($('#canvas').hasClass("robot_active")){
					event.stopPropagation();
				var select = $(this);
				var dataInfo = select.attr("data-info");
													
				$('.info_robot p').text(dataInfo);
				$('.info_robot').fadeTo(200, 1);
				}
			});
			info.mouseout(function(event){
				event.stopPropagation();
				$('.info_robot').css('opacity', '0');
			});
	});

	$('.img_portrait').mouseover(function(event){
		event.stopPropagation();
		$(this).attr('src','images/alex_bright.jpg');
	});
	$('.img_portrait').mouseout(function(event){
		event.stopPropagation();
		$(this).attr('src','images/alex.jpg');
	});



	var skillsWidth = $('.skills li');
	

			skillsWidth.mouseover(function(){
				
				var select = $(this);
				var dataWidth = select.attr("data-width");
				
				console.log(dataWidth);
													
				select.find('.full').animate({
				    width: dataWidth+'rem'
				  }, 400,  function() {});
				var calcWidth = 5-dataWidth;
				console.log('empty = '+calcWidth);
				select.find('.empty').animate({
				    width: calcWidth+'rem'
				  }, 400,  function() {});
				
			});
			/* skillsWidth.mouseout(function(){

				var select = $(this);

				select.find('.full').animate({
				    width: '0'
				  }, 250,  function() {});
				select.find('.empty').animate({
				    width: '0'
				  }, 400,  function() {});
			});*/

	$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});

	function calcHeight (){
			var heightMain = $('main').innerHeight();
			console.log(parseInt(heightMain));
			var heightCache =$('.container-child-cache').innerHeight();
			console.log(parseInt(heightCache));
		}
		setTimeout(calcHeight, 100);



//---------------------------------------------------------- matter chain ------



})()
	


var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("9BDF45BE59E99643A27C936EFB414600");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.robot();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
