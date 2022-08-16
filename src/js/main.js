'use strict';

//De html
const listUl = document.querySelector('.js_list');
const saveButton = document.querySelector('.js_save');
const recoverButton = document.querySelector('.js_recover');

//Global
let data = [];



//función rellenar los id vacíos
/*function idEmpty(userData) {
  if(userData.id === '')
}*/




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


 
 //Función manejadora del evento
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




  //1. Código cuando carga la página
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
  
}

//para guardar lo que hay en pantalla en LS
function saveMyData() {
  let myDataArray = [];
  myDataArray.push
}




function handleClickSave() {
  localStorage.setItem('dataFrom', JSON.stringify(data));
  console.log('Esta guardando');
}


function handleClickRecover() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  console.log(dataLocalStorage);

  if (dataLocalStorage === null) {//si está vacio, lo guardo
    console.log('No hay data en LS');
    localStorage.setItem('dataFrom', JSON.stringify(data));
  }
  else {
    console.log('Está la variable');
    renderUsers();
    //pintalo 
  }
  //localStorage.clear();
}



saveButton.addEventListener('click', handleClickSave);
recoverButton.addEventListener('click', handleClickRecover);

getDataApi();


