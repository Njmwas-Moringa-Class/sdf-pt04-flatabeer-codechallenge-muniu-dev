//Fetching data from the server

fetch('http://localhost:3000/beers/1')
  .then(response => response.json())
  .then(beer => {
    document.querySelector('#beer-name').innerText = beer.name;
    document.querySelector('#beer-image').src = beer.image_url;
    document.querySelector('#beer-description').innerText = beer.description;

    let reviewList = document.querySelector('#review-list');
    reviewList.innerHTML = ''; 
    beer.reviews.forEach(function(review) {
      let li = document.createElement('li');
      li.innerText = review;
      reviewList.appendChild(li);
    });
  });

  fetch('http://localhost:3000/beers')
  .then(response => response.json())
  .then(beers => {
    var beerList = document.querySelector('#beer-list');
    beerList.innerHTML = '';
    beers.forEach(function(beer) {
      var li = document.createElement('li');
      li.innerText = beer.name;
      beerList.appendChild(li);
    });
  });



