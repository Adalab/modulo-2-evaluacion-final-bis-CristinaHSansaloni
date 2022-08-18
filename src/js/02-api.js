'use strict';
function getDataApi() {
    fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json()) 
    .then((dataAPI) => {
  console.log(dataAPI);
      data = dataAPI.results.map((eachUser) => ({
        id: eachUser.id.value,
        fullName: eachUser.name.first + ' ' + eachUser.name.last,
        city: eachUser.location.city,
        photo: eachUser.picture.medium,
        username: eachUser.login.username,
        email: eachUser.email,
        location: eachUser.location.country,
        isFriend: false,
      }));
  console.log(data);
      renderUsers();
    });
  
};
getDataApi();
