$(function(){

			$(".paneltoggle").bind("click", function(){

				var target = $(this).attr("data-target");
        var navtop = document.getElementById("panel");
        var btn = document.getElementsByClassName('action-btn');
        var nav = document.getElementsByClassName('bottom');
        var show = document.getElementsByClassName('footer-actions');
				
				$(target).toggleClass("active");
				$(target).toggleClass("disable");

        $(show).removeClass("show-actions-footer");
        $(nav).removeClass("up-action-footer");
        $(btn).removeClass('move-btn');

			});

      $(".click").bind("click", function(){

        var navtop = document.getElementById("panel");
        
        $(navtop).toggleClass("active");
        $(navtop).toggleClass("disable");

      });

      $(".winn-btn").bind("click", function(){

        var btn = document.getElementsByClassName('action-btn');
        var nav = document.getElementsByClassName('bottom');
        var show = document.getElementsByClassName('footer-actions');
        
        $(show).removeClass("show-actions-footer");
        $(nav).removeClass("up-action-footer");
        $(btn).removeClass('move-btn');

      });

			$(".show-map").bind("click", function(){

				var target = $(this).attr("data-target");
				var res = target.split(' ');
				var $this = $(this);
				var panelto = document.getElementsByClassName('paneltoggle');
						
					$(res).toggleClass("hide");
					$this.toggleClass('textalt');

					
				});
			$(".action-btn").bind("click", function(){

				var target = $(this).attr("data-target");
				var $this = $(this);
				var nav = document.getElementsByClassName('bottom');
				var show = document.getElementsByClassName('footer-actions');
        var navtop = document.getElementById("panel");
						
					$(show).toggleClass("show-actions-footer");
					$(nav).toggleClass("up-action-footer");
					$this.toggleClass('move-btn');
          $(navtop).removeClass('active');
          

			/*		if($this.hasClass('textalt')){
						document.getElementById("txt").innerHTML = "Fermer";
					}
					else{
						document.getElementById("txt").innerHTML = "Action";
					};*/
				});

});

$(function(){
		  setTimeout(function(){
			   document.getElementById("left").style.display = "none";
		  }, 1200);
		  setTimeout(function(){
			   document.getElementById("right").style.display = "none";
		  }, 1200);
		  
});


/*----------------jeu----------------------------------*/


$(function(){
  var gamedata = {};
  var actionid = $("#scene").attr('data-sceneid');

  sceneInit();

  switch (actionid) {
    case '0':
      scene_0_actions();
    break;

    case '1':
      scene_1_actions();
    break;

    case '2':
      scene_2_actions();
    break;

    case '3':
      scene_3_actions();
    break;
  }

  checksuccess();

  function scene_0_actions(){
    console.log("SCENE 0 ACTIONS");
  }

  function scene_1_actions(){
    console.log("SCENE 1 ACTIONS");
    $('#actions_menu').on('click','a', function(ev){
      var action = $(ev.currentTarget).attr('data-action');
      if(action){
        ev.preventDefault();
        switch(action){
          case 'ration':

            var target = $(this).attr("data-target");
        
               $(target).toggleClass("active-gagne");

            progress('ration');
          break;
          case 'baies':
            progress('baies');
          break;
        }
      }
    })
  }

  function scene_2_actions(){
    $('#actions_menu').on('click','a', function(ev){
      var action = $(ev.currentTarget).attr('data-action');
      if(action){
        ev.preventDefault();
        switch(action){
          case 'tente':

             var target = $(this).attr("data-target");
        
               $(target).toggleClass("active-gagne");

            progress('tente');
          break;
          case 'cabane':
            progress('cabane');
          break;
        }
      }
    })
  }

  function scene_3_actions(){
    $('#actions_menu').on('click','a', function(ev){
      var action = $(ev.currentTarget).attr('data-action');
      if(action){
        ev.preventDefault();
        switch(action){
          case 'allume-feu':

             var target = $(this).attr("data-target");
        
               $(target).toggleClass("active-gagne");

            progress('allume-feu');
          break;
          case 'spray':
            progress('spray');
          break;
        }
      }
    })
  }

  function sceneInit(){
    if(localStorage.getItem("game")){
       gamedata = JSON.parse(localStorage.getItem("game"));
       $.each(gamedata.goals, function(i, goal){
         $("#actions_menu [data-action="+goal+"]").remove();
       });
    }else{
      gamedata.goals = [];
      localStorage.setItem("game", JSON.stringify(gamedata));
    };


  }

  function checksuccess(){
    var goals = gamedata.goals;
    /* CONDITIONS DE MORT */
   /* if(
      goals.indexOf("baies")+1 ||
      goals.indexOf("cabane")+1  
      ){
      localStorage.removeItem("game");
      window.location.assign("echec.html");
    }*/
    if(
      goals.indexOf("baies")+1 
      ){
      localStorage.removeItem("game");
      window.location.assign("echec-baies.html");
    };
    if(
      goals.indexOf("spray")+1 
      ){
      localStorage.removeItem("game");
      window.location.assign("echec-spray.html");
    };
    if(
      goals.indexOf("cabane")+1 
      ){
      localStorage.removeItem("game");
      window.location.assign("echec-cabane.html");
    }
    /* CONDITIONS DE SUCCES */
    else if(
      goals.indexOf("ration")+1 &&
      goals.indexOf("allume-feu")+1 &&
      goals.indexOf("tente")+1
    ){
      setTimeout(function(){

      localStorage.removeItem("game");
      window.location.assign("final.html");
    }, 6000);
    };

    $.each(gamedata.goals, function(i, goal){
      $("#actions_menu [data-action="+goal+"]").remove();
    });

  }

  function progress(add){
    // ON MODIFIE LE GAMEDATA
    var goals = gamedata.goals;
    goals.push(add);
    gamedata.goals = goals;
    localStorage.setItem("game", JSON.stringify(gamedata));
    checksuccess();
  }

})
