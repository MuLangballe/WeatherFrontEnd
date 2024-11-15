console.log("Jeg er i clothing rec.")

const getRecBtn = document.getElementById("getRecommendationBtn")

async function getRecommendation() {

    const city = document.getElementById('citySelect').value;

    try {
        const response = await fetch(`http://localhost:8080/api/clothing-recommendation/${city}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        document.getElementById('resultCity').textContent = data.city;
        document.getElementById('resultWeather').textContent = data.weather;
        document.getElementById('resultTemperature').textContent = data.temperature;
        document.getElementById('resultRecommendation').textContent = data.recommendation;

        document.getElementById('result').style.display = 'block';
    } catch (error) {
        alert('Failed to get the recommendation. ' + error.message);
    }
}

getRecBtn.addEventListener('click', getRecommendation)