'use strict';

//De html
const listUl = document.querySelector('.js_list');

//Globales
let data = [];







//Función escuchar evento sobre li
function listenerCards() {
    const allLi = document.querySelectorAll('.js_card');

    for(const eachLi of allLi) {
        eachLi.addEventListener('click', handleClick);
    }
}



//2.Función pintar
  function renderUsers(userData) {
    let html = '';

    for (const userData of data) {//for más if tengo dudas
        if (userData.isFriend === true) {//si es amigo, con clase css
          html += `
          <li class="js_card card card_selected" id="${userData.id}">
              <img class="card__img" src=${userData.photo}> 
              <h2 class="card__title">${userData.fullName}</h2>
              <h4 class="card__sub">${userData.city}</h4>
              <h4 class="card__sub">${userData.username}</h4>
          </li>`;

        } 
        else {
          html += `
          <li class="js_card card" id="${userData.id}">
              <img class="card__img" src=${userData.photo}> 
              <h2 class="card__title">${userData.fullName}</h2>
              <h4 class="card__sub">${userData.city}</h4>
              <h4 class="card__sub">${userData.username}</h4>
          </li>`;
        }
    
    
      }
    listUl.innerHTML = html;
  }


 
 //Función manejadora del evento
function handleClick(event) {
    //console.log(event.currentTarget.id);
    const idSelected = event.currentTarget.id;
    //console.log(idSelected);
    const cardFound = data.find((userData) => userData.id === idSelected);
    console.log(cardFound);

    if (cardFound.isFriend === true) {
        cardFound.isFriend = false;
    }
    else {
        cardFound.isFriend = true;
    }
    renderUsers();
    listenerCards();
}




  //1. Código cuando carga la página
function getDataApi() {
    fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json()) 
    .then((dataAPI) => {
      console.log(dataAPI);
  
      data = dataAPI.results.map((eachUser) => ({
        id: eachUser.id.name,
        fullName: eachUser.name.first + ' ' + eachUser.name.last,
        city: eachUser.location.city,
        photo: eachUser.picture.medium,
        username: eachUser.login.username,
        isFriend: false,
      }));
  
      //console.log(data);
      
      renderUsers();
      listenerCards();
    });
  
}
  

getDataApi();


