// Sample data for clients
const clients = [
	{ name: "Client 1", photo: "https://via.placeholder.com/150" },
	{ name: "Client 2", photo: "https://via.placeholder.com/150" },
	{ name: "Client 3", photo: "https://via.placeholder.com/150" },
	{ name: "Client 4", photo: "https://via.placeholder.com/150" },
	{ name: "Client 5", photo: "https://via.placeholder.com/150" },
	// Add more clients as needed
];

// Function to dynamically create client cards
function createClientCard(client) {
	return `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="client-card">
                    <img src="${client.photo}" class="card-img-top" alt="${client.name}">
                    <div class="client-card-body">
                        <h5 class="card-title">${client.name}</h5>
                    </div>
                </div>
            </div>
        `;
}

// Function to render client cards
function renderClients(clients) {
	const clientsRow = document.getElementById("clientsRow");
	clientsRow.innerHTML = ""; // Clear previous content

	clients.forEach((client) => {
		const cardHTML = createClientCard(client);
		clientsRow.insertAdjacentHTML("beforeend", cardHTML);
	});
}

// Render initial set of client cards
renderClients(clients);

// You may also want to re-render the client cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderClients(clients);
});
