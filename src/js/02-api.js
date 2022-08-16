'use strict';
function getDataApi() {
    fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json()) 
    .then((dataAPI) => {
  
      data = dataAPI.results.map((eachUser) => ({
        id: eachUser.id.value,//id.name
        fullName: eachUser.name.first + ' ' + eachUser.name.last,
        city: eachUser.location.city,
        photo: eachUser.picture.medium,
        username: eachUser.login.username,
        isFriend: false,
      }));
      
      renderUsers();
      
    });
  
};
getDataApi();