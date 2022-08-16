'use strict';
function handleClick(event) {
    const idSelected = event.currentTarget.id;
    const cardFound = data.find((userData) => userData.id === idSelected);

    if (cardFound.isFriend === true) {
        cardFound.isFriend = false;
    }
    else {
        cardFound.isFriend = true;
    }
    renderUsers();
    listenerCards();
}