const loadData = async (sharchText) =>{ 
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${sharchText}`);
    const data = await res.json();
    const allDatas = data.data;
    // console.log(allDatas);
    desplayData(allDatas);

}

const desplayData = phones => {
//    console.log(phones);

   const phoneContainer = document.getElementById('phone-display-contrainer')
   //clearing phoneContainer
   phoneContainer.textContent = '';
   phones.forEach(element => {
    //  console.log(element);
     // step 1. creat a div
     const creatDiv = document.createElement('div');
     creatDiv.classList =`card bg-base-100 shadow-xl`;
    //  step 2. set innerHtml
     creatDiv.innerHTML = `
          <figure class="px-10 pt-10">
         <img src="${element.image}"
          alt="Shoes" class="rounded-xl" />
         </figure>
            <div class="card-body items-center text-center">
                  <h2 class="card-title">${element.phone_name}</h2>
                   <p>${element.slug}</p>
            <div class="card-actions">
             <button class="btn btn-primary">Buy Now</button>
         </div>
     </div>`

     // step 4. append child
       phoneContainer.appendChild(creatDiv);
    
   });


}

// sharch button function

const searchHandle = () => {
   const sharchBoxfinder = document.getElementById('search-box');
   const sharchBoxText = sharchBoxfinder.value;
   console.log(sharchBoxText)
   loadData(sharchBoxText)
   
}


// loadData();