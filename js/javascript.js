(function(){
	$(".push_btn").on("click", function(){

		$('.piston').addClass("piston_dis");
		$('#circle_1').addClass("circle_1_fade-in");
		$('.circle_2').addClass("circle_2_fade-in");
		$('.circle_3').addClass("circle_3_fade-in");
		$('.circle_4').addClass("circle_4_fade-in");

		$('.circle_6').addClass("circle_6_fade-in");
		$('.circle_7').addClass("circle_7_fade-in");
		$('.circle_8').addClass("circle_8_fade-in");
		$('.circle_9').addClass("circle_9_fade-in");
		$('.circle_10').addClass("circle_10_fade-in");
		$('.circle_extern').addClass("circle_extern_rotate");
		$('.img_portrait').addClass("image_portrait_fade-in");

		$('.cercle_interne').addClass('active_cercle_interne');
		$('.cercle_interne').addClass('rotate_cercle_interne');
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
		//$('.info_robot').addClass('info_robot-fade-in');

		$('#canvas').addClass("robot_active");
		$('.machine_container').addClass("machine_container_fixed");


	})

	$(document).ready(function(){


			var info = $('.over_item_info');

			info.mouseover(function(){
				if($('#canvas').hasClass("robot_active")){

				var select = $(this);
				var dataInfo = select.attr("data-info");
													
				$('.info_robot p').text(dataInfo);
				$('.info_robot').fadeTo(200, 1)
				}
			})
			info.mouseout(function(){
				$('.info_robot').fadeTo(1000, 0)
			})
	});

	$('.img_portrait').mouseover(function(){
		$(this).attr('src','images/alex_bright.jpg');
	});
	$('.img_portrait').mouseout(function(){
		$(this).attr('src','images/alex.jpg');
	});



//---------------------------------------------------------- matter chain ------

var Example = Example || {};

Example.chains = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.getElementById("chain"),
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: true,
            showCollisions: true,
            showVelocity: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    
    
    group = Body.nextGroup(true);

    var ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function(x, y) {
        return Bodies.rectangle(x - 20, y, 50, 20, { collisionFilter: { group: group }, chamfer: 5 });
    });
    
    Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
    Composite.add(ropeC, Constraint.create({ 
        bodyB: ropeC.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    World.add(world, [
        ropeC,
        Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 700, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

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
