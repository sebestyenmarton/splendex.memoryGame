import $ from 'jquery';

$(document).ready(function(){
  let rotatedCard = false;
  let lockBoard = false;  
  let firstRotatedCard, secondRotatedCard;
  let tries = 0;
  //let maxTries = Number.POSITIVE_INFINITY;
  const allCards = document.querySelectorAll(".Cardbox");

  allCards.forEach(card => card.addEventListener('click', flipCard));
  (function mixing() { 
    allCards.forEach(card => {
      let flexRandom = Math.floor(Math.random() * 20);
      card.style.order = flexRandom;
    });
  })();
  function flipCard() {          
    if (lockBoard) return;
    if (this === firstRotatedCard) return;
    this.classList.add('rotate');
    if (!rotatedCard) {        
      rotatedCard = true;
      firstRotatedCard = this;
      return;
    } 
    secondRotatedCard = this;        
    checkIsSame();
  }
  function checkIsSame() {
    let same = firstRotatedCard.dataset.framework === secondRotatedCard.dataset.framework;
    same ? fondedCards() : turnBack();
    triesIncrementing();
  }
  function triesIncrementing(){
    ++tries;
    $('#currentTries').html(tries);
  }
  function fondedCards() {
    firstRotatedCard.removeEventListener('click', flipCard);
    secondRotatedCard.removeEventListener('click', flipCard);
    resetCard();
  }
  function resetCard() {
    [rotatedCard, lockBoard] = [false, false];
    [firstRotatedCard, secondRotatedCard] = [null, null];
  }
  function turnBack() {
    lockBoard = true;
    setTimeout(() => {
      firstRotatedCard.classList.remove('rotate');
      secondRotatedCard.classList.remove('rotate');
      resetCard();
    }, 500);
  }
  $('#MainpageStart, #resetButton').click(function(){
    startFunction();
  });

  function startFunction(){
    let currentDeckSize = $('#Size').html();
    let excessDeckSizePairs = (20 - currentDeckSize)/2;
    
    $('#currentTries').html("0");
    tries = 0;

    for( let i = 0; i < 20 ; ++i){$(allCards[i]).css("display","flex");}
    for( let x = 0; x < excessDeckSizePairs ; ++x){
      $(allCards[x]).css("display","none");
      for( let y = 0 ; y < 20 ; ++y){
        if( allCards[x].dataset.framework === allCards[y].dataset.framework ){
          $(allCards[y]).css("display","none");
        }
      }
    };

    allCards.forEach(card => {
      let flexRandom = Math.floor(Math.random() * 20);
      card.style.order = flexRandom;
      card.classList.add('rotate')
      card.addEventListener('click', flipCard)
      setTimeout(
        () => {
          card.classList.remove('rotate')
        }, 
      400); 
    });
  }
});
