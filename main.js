let content = [];

customers.results.forEach(function(client) {
  let template = `
    <div class="customers">
        <img class="Pic" src="${client.picture.large}">
        <h3 class="Name">${client.name.first} ${client.name.last}</h3>
        <h4 class="Email">${client.email}</h4>
        <p class="Cell">${client.cell}</p>
        <p class="Location">${client.location.street}</p>
        <p class="Location">${client.location.city} ${client.location
    .state} ${client.location.postcode}</p>
    </div>
    `;
  content += template;
});

let container = document.querySelector(`.container`);
container.innerHTML = content;
