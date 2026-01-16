// Selectăm elementele din DOM
const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact-text');

// URL-ul API-ului
const API_URL = 'https://catfact.ninja/fact';

// Funcția asincronă pentru a lua datele
async function getCatFact() {
    console.log("Cerere trimisă..."); // Log cerut la inițiere
    
    // Afișăm un text de încărcare utilizatorului
    factText.innerText = "Se încarcă..."; 

    try {
        // Await pe fetch
        const response = await fetch(API_URL);

        // Verificăm dacă răspunsul este OK (status 200-299)
        if (!response.ok) {
            throw new Error(`Eroare HTTP! Status: ${response.status}`);
        }

        // Await pe conversia în JSON
        const data = await response.json();

        console.log("Date descărcate cu succes:", data); // Log cerut la succes

        // Actualizăm UI-ul cu textul primit (proprietatea 'fact')
        factText.innerText = data.fact;

    } catch (error) {
        // Gestionarea erorilor
        console.error("A apărut o eroare în proces:", error);
        
        // Alertă în UI
        alert("Ne pare rău, a apărut o problemă: " + error.message);
        
        // Resetăm textul în interfață
        factText.innerText = "Eroare la încărcare. Încearcă din nou.";
    }
}

// Adăugăm ascultătorul de eveniment pe buton
factBtn.addEventListener('click', getCatFact);