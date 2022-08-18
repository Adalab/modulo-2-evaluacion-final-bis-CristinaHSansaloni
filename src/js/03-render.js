'use strict';
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
              <h4 class="card__sub">${userData.username}</h4>`;
          if (userData.location === 'Australia' ||  userData.location === 'Portugal') {
            html += `
            <a href="mailto:${userData.email}" class="card__email">${userData.email}</a></li>`;
          }
              
          
  
        } 
        else {
          html += `
          <li class="js_card card" id="${userData.id}" isFriend="${userData.isFriend}">
              <img class="card__img" src=${userData.photo}> 
              <h2 class="card__title">${userData.fullName}</h2>
              <h4 class="card__sub">${userData.city}</h4>
              <h4 class="card__sub">${userData.username}</h4>`;
              if (userData.location === 'Australia'|| userData.location === 'Portugal') {
                html += `
                <a href="mailto:${userData.email}" class="card__email">${userData.email}</a></li>`;
              }
          
        }
    
      }
    listUl.innerHTML = html;
    listenerCards();
  }
  