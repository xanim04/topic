fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()) 
.then(data => {
    const countries = Object.values(data);
    const app = document.getElementById('app');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'card';
        countryDiv.innerHTML = `
        <img src= '${country.flags.png}'  >
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>population:</strong> ${country.population}</p>
        `;
        app.appendChild(countryDiv);
    });
})
.catch(error => {
    console.error('Error:', error);
});


const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
