'use strict';

//variables globales
const listUl = document.querySelector('.js_list');
const saveButton = document.querySelector('.js_save');
const recoverButton = document.querySelector('.js_recover');


let data = [];


 
 //Handle
function handleClick(event) {
    //console.log(event.currentTarget.id);
    const idSelected = event.currentTarget.id;
    //console.log(idSelected);
    const cardFound = data.find((userData) => userData.id === idSelected);
    //console.log(cardFound);

    if (cardFound.isFriend === true) {
        cardFound.isFriend = false;
    }
    else {
        cardFound.isFriend = true;
    }
    renderUsers();
    listenerCards();
}

//Listener
function listenerCards() {
  const allLi = document.querySelectorAll('.js_card');

  for(const eachLi of allLi) {
      eachLi.addEventListener('click', handleClick);
  }
}

//Render
function renderUsers(userData) {
  let html = '';

  for (const userData of data) {
      if (userData.isFriend === true) {
        html += `
        <li class="js_card card card_selected" id="${userData.id}" isFriend="${userData.isFriend}">
            <img class="card__img" src=${userData.photo}> 
            <h2 class="card__title">${userData.fullName}</h2>
            <h4 class="card__sub">${userData.city}</h4>
            <h4 class="card__sub">${userData.username}</h4>
        </li>`;

      } 
      else {
        html += `
        <li class="js_card card" id="${userData.id}" isFriend="${userData.isFriend}">
            <img class="card__img" src=${userData.photo}> 
            <h2 class="card__title">${userData.fullName}</h2>
            <h4 class="card__sub">${userData.city}</h4>
            <h4 class="card__sub">${userData.username}</h4>
        </li>`;
      }
  
    }
  listUl.innerHTML = html;
  listenerCards();
}


  //Fetch
function getDataApi() {
    fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json()) 
    .then((dataAPI) => {
      //console.log(dataAPI);
  
      data = dataAPI.results.map((eachUser) => ({
        id: eachUser.id.name,
        fullName: eachUser.name.first + ' ' + eachUser.name.last,
        city: eachUser.location.city,
        photo: eachUser.picture.medium,
        username: eachUser.login.username,
        isFriend: false,
      }));
  
      console.log(data);
      
      renderUsers();
      
    });
  
};
getDataApi();



// LS

function handleClickSave(event) {
  event.preventDefault()
  localStorage.setItem('dataFrom', JSON.stringify(data));
  console.log('Esta guardando');
}


function handleClickRecover(event) {
  event.preventDefault()
  data = JSON.parse(localStorage.getItem('dataFrom'))
  renderUsers();
}



saveButton.addEventListener('click', handleClickSave);
recoverButton.addEventListener('click', handleClickRecover);




