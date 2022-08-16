'use strict';
function handleClickSave(event) {
    //event.preventDefault()
    localStorage.setItem('dataFrom', JSON.stringify(data));
  }
  
  
  function handleClickRecover(event) {
    //event.preventDefault()
    data = JSON.parse(localStorage.getItem('dataFrom'))
    renderUsers();
  }
  
  
  
  saveButton.addEventListener('click', handleClickSave);
  recoverButton.addEventListener('click', handleClickRecover);