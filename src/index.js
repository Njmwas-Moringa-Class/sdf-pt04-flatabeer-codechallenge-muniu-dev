//First,a function to fetch beer data from the local server:
async function fetchBeerData() {
    const response = await fetch('http://localhost:3000/beers');
    const beers = await response.json();
    return beers;
  }

//Next, we can use this function to populate the beer list in the navigation:
// Assuming beersData is your JSON object
let beersData = {
  "beers": [
    // pending>>>beers data go here
  ]
};

window.onload = function() {
  let beerListItems = document.querySelectorAll('#beer-list li');
  
  beerListItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      let clickedBeerName = e.target.innerText;
      let beerDetails = beersData.beers.find(function(beer) {
        return beer.name === clickedBeerName;
      });
      
      if (beerDetails) {
        document.querySelector('#beer-name').innerText = beerDetails.name;
        document.querySelector('#beer-image').src = beerDetails.image_url;
        document.querySelector('#beer-description').innerText = beerDetails.description;
        
        let reviewList = document.querySelector('#review-list');
        reviewList.innerHTML = ''; // Clear out the current list
        beerDetails.reviews.forEach(function(review) {
          let li = document.createElement('li');
          li.innerText = review;
          reviewList.appendChild(li);
        });
      }
    });
  });
};
