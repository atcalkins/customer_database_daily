let content = "";

customers.results.forEach(function(client) {
  let template = `
    <div class="customers">
        <img class="pic" src="${client.picture.large}">
        <h3 class="name">${client.name.first} ${client.name.last}</h3>
        <h4 class="email">${client.email}</h4>
        <p class="cell">${client.cell}</p>
        <p class="location">${client.location.street}</p>
        <p class="location">${client.location.city} ${client.location
    .state} ${client.location.postcode}</p>
    </div>
    `;
  content += template;
});

let container = document.querySelector(`.container`);
container.innerHTML = content;
