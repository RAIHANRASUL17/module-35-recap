/*-----------------------------------------------------------------------------
 add with: Show All btn, display when more than 10 items: look step-6-1 & 6-2 
------------------------------------------------------------------------------*/ 
/*_______________________ step-2 __________________*/
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById('phones-container');
    // phonesContainer.innerHTML = '';
    phonesContainer.textContent = '';
    // Display 10 phones only
    // phones = phones.slice(0, 10);
    /*___________________ step-6-1 start: Display showAll btn ______________*/
    // display ShowAll btn when more than 10 items
    const showAll = document.getElementById('show-all');
    if( phones.length > 10) {
        phones = phones.slice(0, 10);
        
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    /*_______________________ step-6 End__________________________________*/

/*__________________________ step-4 start __________________*/
    // display no phones found 
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
/*__________________________ step-4 End __________________*/
    // display all phones
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
    // stop loader or sppiner call
    toggleSpinner(false);
};
/*__________________________ step-3 start __________________*/
// search part (from html-2)
document.getElementById('btn-search').addEventListener('click', function(){
    // start loader or sppiner call
    toggleSpinner(true);

const searchField= document.getElementById('search-field');
const searchText= searchField.value;
loadPhones(searchText);
// searchField.value= '';
})
/*__________________________ step-3 End __________________*/

/*_____________________ step-5 start: loader part _ ________________*/

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
/*__________________________ step-5 End: loader part _______________*/
/*_____________ step-6-2 start: clicked show-all btn & display_____________*/
document.getElementById('btn-show-all').addEventListener('click', function(){
    
})

/*__________________________     step-6-2 End            __________________*/

// call function
// loadPhones();  // from getting display you have to close

