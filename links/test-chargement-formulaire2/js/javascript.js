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
  var l = 0;

  function setup(){
    checkOut();

  //  loadInputs();
  }

  function  increaseItemsNum(){
    if(i<nbItems-1){
        i++;
      }
    }
    function  increaseloadNum(){
      if(l<nbItems){
          l++;
        }
      }
    function  decreaseItemsNum(){
      if(i>0){
          i--;
        }
      }
    function  decreaseLoadNum(){
        if(l>=1){
            l--;
          }
      }

    function checkOut(){
console.log('cc');
       inputs.each(function(){
           $(this).change(function(){
               var barItemNum = barItem.eq(i);
               var minValue = 0;
               var tipiBefore = barItemNum.children();
               var tipiBeforeFirst = tipiBefore.eq(0);
               var tipiBeforeLast = tipiBefore.eq(1);

              // console.log(barItemNum);
              // console.log('before i = '+i);

                if ( $(this).val() !== '' && $(this).hasClass('unvisited') /*&& l<nbItems*/){
                      $(this).removeClass('unvisited');

                      increaseItemsNum();
                      increaseloadNum();
                  //  console.log('up i = '+i);

                      loadingProgress(this); //Mettre l'input d'ou l'on sort
                   $(tipiBeforeFirst).addClass('popitem');
                   $(tipiBeforeLast).addClass('popdelay');

                 }

                 if ( $(this).val() == '' && !$(this).hasClass('unvisited')) {

                  //  var barItemNumAfter = barItem.eq(i);
                  //  var tipiAfter = barItemNumAfter.children();
                  //  var tipiAfterFirst = tipiAfter.eq(0);
                  //  var tipiAfterLast = tipiAfter.eq(1);

                    var itemsClass = document.getElementsByClassName('popitem');
                    var itemsClassNum = itemsClass.length;
                    var itemsClassNumRectify = itemsClassNum-1;
                    var lastItem = barItem.eq(itemsClassNumRectify);
                    var lastChildItem = lastItem.children();

                    console.log(itemsClass);
                    console.log(itemsClassNum);
                    console.log(lastItem);
                    console.log(lastChildItem);
                    // console.log('down i = '+i);

                     $(this).addClass('unvisited');
                     decreaseLoadNum();
                     decreaseItemsNum();
                     loadingRegress(this);
                     $(lastChildItem).removeClass('popitem');
                     $(lastChildItem).removeClass('popdelay');

                  }
           });
       });
     }

  function loadingProgress(input){

        $(loadBar).css('width' , l*stepUp+'%');
  }

  function loadingRegress(input){

        var actualValue = $(loadBar).css('width');
        //calcul de la valeur actuelle de la loadbar en %
        var maxValOnActual = parseFloat(loadMaxValue) / parseFloat(actualValue);
        var actualFraction = 1 / maxValOnActual;
        var actualValP = actualFraction * 100;

        $(loadBar).css('width' , actualValP-stepUp+'%');
  }

/*  function loadInputs(){

  }*/

setup();
})();
