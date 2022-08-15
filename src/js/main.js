'use strict';

//De html
const listUl = document.querySelector('.js_list');

//Globales
let data = [];



//1. Código cuando carga la página
fetch('https://randomuser.me/api/?results=10')
  .then((response) => response.json()) 
  .then((dataAPI) => {
    //console.log(dataAPI);

    data = dataAPI.results.map((eachUser) => ({
      //id: eachUser.id.value,
      fullName: eachUser.name.first + ' ' + eachUser.name.last,
      city: eachUser.location.city,
      photo: eachUser.picture.medium,
      username: eachUser.login.username,
      isFriend: false,
    }));

    //console.log(data);
    
    renderUsers();
    //addCardListeners(); //vuelvo a escuchar
    
  });




  function renderUsers(userData) {
    let html = '';

    for( const userData of data) {
        html += `
        <li>
          <article class="js_card card">
            <img class="card__img" src=${userData.photo}> 
            <h2 class="card__title">${userData.fullName}</h2>
            <h4 class="card__sub">${userData.city}</h4>
            <h4 class="card__sub">${userData.username}</h4>
          </article>
        </li>`; 
    }
    listUl.innerHTML = html;
  }