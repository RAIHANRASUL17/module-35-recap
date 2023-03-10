/*-----------------------------------------------------------------------------
5_1 problem part
------------------------------------------------------------------------------*/ 
/*_______________________ step-2 __________________*/
const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones-container');
    // phonesContainer.innerHTML = '';
    phonesContainer.textContent = '';
    // Display 10 phones only
    // phones = phones.slice(0, 10);
    // display ShowAll btn when more than 10 items
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    
    // display no phones found 
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }

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

const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField= document.getElementById('search-field');
    const searchText= searchField.value;
    loadPhones(searchText, dataLimit);
    // searchField.value= '';   // if you don't close it showAll btn dosen't display anything
}

document.getElementById('btn-search').addEventListener('click', function(){
    // start loader or sppiner call
processSearch(10);
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch()
})


// call function
// loadPhones();  // from getting display you have to close

