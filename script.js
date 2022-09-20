"use-strict";

let cardsContainer = document.querySelector(".container");
// pass a function to map
richestPeople.map((person) => {
  let html = ` <div class="card" style="width: 13rem">
    <img id="${person.id}" src="${person.image}" class="card-img-top image" alt="${person.name}'s image" />
    <div class="card-body">
      <h5 class="card-title">${person.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${person.worth}</li>
      <li class="list-group-item">${person.source}</li>
    </ul>
    <div class="card-body"></div>
  </div>`;
  cardsContainer.innerHTML += html;
  cardsContainer.style.margin = "auto";
});

addFunctionToElement();
// for (let key of richManImages) {
//   key.addEventListener("click", deleteElement);
// }

function addFunctionToElement() {
  let richManImages = document.querySelectorAll(".image");
  richManImages.forEach((image) =>
    image.addEventListener("click", deleteElement)
  );
}

function deleteElement(ev) {
  console.log(ev.target.id);
  richestPeople = richestPeople.filter((item) => item.id !== ev.target.id);
  console.log(richestPeople.length);
  if (!richestPeople.length) {
    cardsContainer.innerHTML = "";
  }
  renderPage(richestPeople);
  addFunctionToElement();
}
//   richestPeople = richestPeople.filter(
//     (person) => person.id !== event.target.id
//   );
//   console.log(richestPeople);
//   renderPage(richestPeople);

function renderPage(arr) {
  let html = "";
  for (let key of arr) {
    console.log(key);
    html += ` <div class="card" style="width: 13rem">
        <img id="${key.id}" src="${key.image}" class="card-img-top image" alt="${key.name}'s image" />
        <div class="card-body">
          <h5 class="card-title">${key.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${key.worth}</li>
          <li class="list-group-item">${key.source}</li>
        </ul>
        <div class="card-body"></div>
      </div>`;

    cardsContainer.innerHTML = html;
  }
}
