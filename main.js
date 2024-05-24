fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => createCards(data))
  .catch(error => console.error('Error fetching data:', error));

function createCards(users) {
  const container = document.getElementById('user-cards-container'); // HTML-da ushbu konteyner mavjudligiga ishonch hosil qiling

  users.forEach(user => {
    // Create the card element
    const card = document.createElement('div');
    card.className = 'user-card';

    // Add user information to the card
    const name = document.createElement('h2');
    name.textContent = user.name;

    const username = document.createElement('p');
    username.textContent = `Username: ${user.username}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    // Append elements to the card
    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(email);

    // Append the card to the container
    container.appendChild(card);
  });
}