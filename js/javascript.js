
	$(".push_btn").on("click", function(){

		
		$('#circle_1').addClass("circle_1_fade-in");
		$('.circle_2').addClass("circle_2_fade-in");
		$('.circle_3').addClass("circle_3_fade-in");
		$('.circle_4').addClass("circle_4_fade-in");
		$('.circle_5').addClass("circle_5_fade-in");
		$('.circle_6').addClass("circle_6_fade-in");
		$('.circle_7').addClass("circle_7_fade-in");
		$('.circle_8').addClass("circle_8_fade-in");
		$('.circle_9').addClass("circle_9_fade-in");
		$('.circle_10').addClass("circle_10_fade-in");
		$('.circle_extern').addClass("circle_extern_rotate");
		$('.img_portrait').addClass("image_portrait_fade-in");

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


		$('nav').addClass('nav_shadow');
		$('.push_btn').addClass('push_btn_disable');
		$('.info_robot').addClass('info_robot-fade-in');

		$('#canvas').addClass("robot_active");


	})


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
