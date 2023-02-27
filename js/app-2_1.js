
/*_______________________ step-2 __________________*/
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    phones.forEach(phone => {
        // console.log(phone);
        console.log(phone.phone_name);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100 p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name:${phone.phone_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        phonesContainer.appendChild(phoneDiv)
    });
};
/*__________________________ step-3 __________________*/
// search part (from html-2)
document.getElementById('btn-search').addEventListener('click', function(){
const searchField= document.getElementById('search-field');
const searchText= searchField.value;
loadPhones(searchText);
searchField.value= '';
})

// call function
// loadPhones();  // from getting display you have to close

