import $ from 'jquery';

$(document).ready(function(){
  let rotatedCard = false;
  let lockBoard = false;  
  let firstRotatedCard, secondRotatedCard;
  var tries = $('#currentTries').val();
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
  $('#MainpageStart').click(function(){
    startFunction();
  });
  function startFunction(){
    var currentDeck = $('#Size').html();
    console.log(currentDeck);
    allCards.forEach(card => {
      let flexRandom = Math.floor(Math.random() * 20);
      card.style.order = flexRandom;
      card.classList.add('rotate')
      setTimeout(() => {
        card.classList.remove('rotate')
      }, 400); 
      card.addEventListener('click', flipCard)
    });
/*     $('.Cardbox').css("transition","transform 0")
    setTimeout(() => {
      $('.Cardbox').css("transition","transform .4s")
    }, 400); */
  }
});