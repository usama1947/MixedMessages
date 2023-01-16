

let indi = Math.floor(Math.random() * 1643);


fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json();
})
.then(function(data) {
   let holder = document.getElementById("quote");
   let quote = document.createElement("h3");
   quote.innerText = `${data[indi].text}  \n\n-- ${data[indi].author}`;
   holder.appendChild(quote);
});