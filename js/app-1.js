// /*__________________________ step-1__________________*/ 
// const loadPhones = async() =>{
//     const url= `https://openapi.programming-hero.com/api/phones?search=iphone`
//     const res= await fetch(url)
//     const data= await res.json();
//     console.log(data.data);  // always find array of object
//     }

//     // call function
//     loadPhones();



/*__________________________ step-2__________________*/
const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url)
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    /*(step-1): get id from a container and forEach arrow function*/
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    phones.forEach(phone => {
        console.log(phone);
        /*(step-2): create a phoneDiv, phoneDiv with classList.add('col') and innerHTML*/
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        /*(step-3):parent container (step-1) with appendChild to the phoneDiv*/
        phonesContainer.appendChild(phoneDiv)
    });
};

// call function
loadPhones();
