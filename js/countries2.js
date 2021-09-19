const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => displayCountries(data));
}

const displayCountries = countries => {
   console.log(countries[0]);
   const container = document.getElementById('countries');
   const countryHTML = countries.map(country => getCountryHTML(country));
   container.innerHTML = countryHTML.join(' ');
   console.log(countryHTML[0]);
}
const getCountryHTML = (country) => {
   const { name, capital, region, population, flag } = country;
   return `
   <div class="country">
   <h2 >${name}</h2>
   <h4>Capital:${capital}</h4>
   <img src="${flag}" title="Name: ${name} ${' '} Capital:${capital} ${' '} Region:${region} ${' '} Population:${population} ">
   </div>
   
   `
}
loadCountries();