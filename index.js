let usernameInput = document.getElementById('searchInput');
usernameInput.addEventListener('keyup', function(e) {
    let searchQuery = e.target.value.toLowerCase();
    console.log(searchQuery);
    let allNamesDOMCollection = document.getElementsByClassName('name');
    console.log(allNamesDOMCollection[0].textContent);

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);
}

});



