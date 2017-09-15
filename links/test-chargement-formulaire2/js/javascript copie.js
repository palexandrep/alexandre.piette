(function(){

  var inputs = $(".load__input");
  var loadBar = $("#load-bar-1");
  var nbItems = $('.load__input').length;
  var max = 100;
  var stepUp = max/nbItems;
  var loadWrapper = $('.load-bar-wrapper');
  var loadMaxValue = $(loadWrapper).css('width');
  var barItem = $('.load-bar-1--items');
  var i = 0;

  function setup(){
    checkOut();
//    checkInputs();

  }

  function  increase(){
    i++;
  }

 function checkOut(){

    inputs.change(function(){

      var barItemNum = barItem.eq(i);



      increase();
      console.log(i);

      console.log(this);
      if ( inputs.val() !== '' && $(this).hasClass('unvisited') && $(barItemNum)<$(nbItems)){
        alert(hello);
        $(barItemNum).addClass('popitem');
        loadingProgress(this); //Mettre l'input d'ou l'on sort

        $(this).removeClass('unvisited');
      }
      else {

      }

    });
  }

  function loadingProgress(input){

    if ( inputs.val() !== '' && $(this).hasClass('unvisited') ){ //Si le champ n'est pas vide

        var actualValue = $(loadBar).css('width');
        //calcul de la valeur actuelle de la loadbar en %
        var maxValOnActual = parseFloat(loadMaxValue) / parseFloat(actualValue);
        var actualFraction = 1 / maxValOnActual;
        var actualValP = actualFraction * 100;


        $(loadBar).animate({'width' : actualValP+stepUp+'%'},600);

      /*  if (actualValP+stepUp>=100){
            $(loadBar).css({'background-color' : "blue"});
          } else {

          }*/
   }
      else {

      }
  }

/*  function checkInputs(){

      //vérifier la validité de l'input

  }*/

setup();
})();
