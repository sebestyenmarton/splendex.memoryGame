import { default as $, default as jQuery } from 'jquery';

$(document).ready(function(){
  $('#DeckSize').mouseenter(function(){downFunction();});
  $('#DeckContainer').mouseleave(function(){upFunction();});
  var clicks = 0;
  $('#DeckSize').click(function(){
    if (clicks == 0){downFunction();++clicks;}
    else{upFunction();--clicks;}
  });
  function downFunction(){
    $('#DropDown').css("display","none");
    $('#DropUp, #DeckSlidebar').css("display","block");
  };
  function upFunction(){
    $('#DropDown').css("display","block");
    $('#DropUp, #DeckSlidebar').css("display","none");
  };
  $('#MainpageStart').click(function(){
    $('#SetGameContainer, #DeckText, #DeckSlidebar, #MainpageContainer, #GameBox')
      .addClass("topPosition");
    $(this).addClass("topPosition");
  });
  var numbers = ['6','8','10','12','14','16','18','20'];  
  jQuery.each( numbers, function( i, val){     
    $('#DeckLink' + val).click(function(){
      $('#Size').html(val);
    });
  });
});