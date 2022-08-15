'use strict';

//De html
const listUl = document.querySelector('.js_list');

//Globales
let data = [];



//1. Código cuando carga la página
fetch('https://randomuser.me/api/?results=10')
  .then((response) => response.json()) 
  .then((dataAPI) => {
    console.log(dataAPI);

    data = dataAPI.results.map((eachUser) => ({
      //id: eachUser.id.value,
      fullName: eachUser.name.first + ' ' + eachUser.name.last,
      city: eachUser.location.city,
      photo: eachUser.picture.medium,
      username: eachUser.login.username,
      isFriend: false,
    }));

    console.log(data);

    renderUsers();
    //addCardListeners(); //vuelvo a escuchar
    
  });




  function renderUsers() {

  }