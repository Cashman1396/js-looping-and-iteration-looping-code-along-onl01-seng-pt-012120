
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
=======
// Code your solutions in this file
const cards = (["Ada", "Brendan", "Ali"]. "birthday");

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log('Thank you, ${cards[i]} for the wonderful birthday gift');
  }

}
