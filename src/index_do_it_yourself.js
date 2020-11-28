// Good practice, explain what this file is supposed to do

// Delete the whole section <section id="static-results">

// Briefly what is this file doing

const API_URL = "https://api.pokemontcg.io/v1/cards?name=";

// Take a moment to read through this section, what did we actually select?
const resultsSection = document.getElementById("results");
const resultsOutcome = document.getElementById("results-outcome");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("submit-search");
const searchErrorMessage = document.getElementById("search-error");

const cardList = document.getElementById("card-list");

const searchCards = (event) => {
  // this prevents the default behavior of submitting a form (the reload of the page)
  event.preventDefault();

  // clean the current card results, error messages, and the message that tells us how many cards were found

  // let's check before that we have written anything in the input before trying to send a request
  // To prevent too big results, let's search for at least three letters or more
  if (searchInput.value.length >= 3) {
    // Inform the user that we are looking for some results

    fetch(`${API_URL}${searchInput.value}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // we clean up the previous "Loading..." message
        resultsOutcome.innerHTML = "";

        // let's read from our response the array of cards
        let cards = json.cards;

        // If we have more than 0 cards, meaning that if we have found any card
        if (cards.length > 0) {
          // let's go through all of them and create their own items
          const listItems = cards.map(function (card) {
            // create the list item that will contain the image and the name of the card
            const listItem = document.createElement("li");

            // create an empty image element

            // create an empty heading element

            // add to the image element the url of the card

            // add an alt text to the image element with the name of the card

            // add the name of the card to the heading

            // add the image to the list item
            listItem.append(cardImage);

            // add the title to the list item (it will go right after the picture)
            listItem.append(cardTitle);

            return listItem;
          });
          listItems.forEach((item) => cardList.append(item));
          // create a container for the message that contains the number of the cards
          const cardsNumberMessage = document.createElement("p");

          // write a message in the container that tells how many cards have been found

          // add the message to the results-outcome div
          resultsOutcome.append(cardsNumberMessage);
        } else {
          // create a container for the message that contains the number of the cards, in this case to warn the user that there are no cards
          const noCardsMessage = document.createElement("p");
          // write a message in the container
          noCardsMessage.innerHTML = `Cannot find pokémon cards for '<em>${searchInput.value}</em>'`;
          // add the message to the results-outcome div
          resultsOutcome.append(noCardsMessage);
        }
      });
  } else {
    // Create a container for the message that will warn the user that at least three characters are needed to start a search
    const minimumCharactersMessage = document.createElement("p");
    minimumCharactersMessage.innerHTML = `Please enter at least three letters (you searched for '<em>${searchInput.value}</em>').`;
    searchErrorMessage.append(minimumCharactersMessage);
  }
};

if (searchButton) searchButton.addEventListener("click", searchCards);
