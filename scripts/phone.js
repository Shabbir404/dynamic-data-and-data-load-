const loadData = async (sharchText=12) =>{ 
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
// setting <show all> button if the length of the phone is more then 12 
const showAllBtnFind = document.getElementById('show_all_btn');
if (phones.length > 12) {
    showAllBtnFind.classList.remove('hidden');
}
else {
    showAllBtnFind.classList.add('hidden');
}

   phones = phones.slice(0, 12);

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
                   <p></p>
            <div class="card-actions">
             <button onclick="handelDetails('${element.slug}'); showDetailsModal.showModal()" class="btn btn-primary">Show Details</button>
         </div>
     </div>`

     // step 4. append child
       phoneContainer.appendChild(creatDiv);
    
   });
   loadingSpinner(false);

}

const handelDetails = async(id)=>{
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const resJson = await res.json();
    const showRes = resJson.data;
    console.log(showRes);
        
    DesplayDetialsmodal(showRes);
}

const DesplayDetialsmodal = (phone)=>{
    const phoneName = document.getElementById('phone_name');
    phoneName.innerText=phone.name;
    const phoneStorage = document.getElementById('storage');
    phoneStorage.innerText = ("Storage : "+ phone.mainFeatures.storage)
    const phoneDsSize  = document.getElementById('desplay_size');
    phoneDsSize.innerText  = ("Display Size : "+ phone.mainFeatures.displaySize);
    const phoneChipset = document.getElementById('chipset');
    phoneChipset.innerText = ("Chipset : "+phone.mainFeatures.chipSet);
    const phoneMemory  = document.getElementById('memory');
    phoneMemory.innerText = ("Memory : "+phone.mainFeatures.memory)
    const phoneRlsDate = document.getElementById('realise_date');
    phoneRlsDate.innerText=("Release Date : "+ phone.releaseDate)
    const phoneGps     = document.getElementById('gps');
    phoneGps.innerText = ("Gps : "+ phone.others.GPS);

    showDetailsModal.showModal()
}
// sharch button function

const searchHandle = () => {
    loadingSpinner(true);
   const sharchBoxfinder = document.getElementById('search-box');
   const sharchBoxText = sharchBoxfinder.value;
   console.log(sharchBoxText);
   loadData(sharchBoxText);
 
   
}

const loadingSpinner = (isLoading) => {
 const loadingSpinnerFinder = document.getElementById('loadingDIv');
 if (isLoading) {
    loadingSpinnerFinder.classList.remove('hidden')
     }
     else{
        loadingSpinnerFinder.classList.add('hidden');
     }


}


loadData();