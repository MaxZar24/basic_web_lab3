const usersContainer = document.getElementById("users");
const btnGet = document.getElementById("btn-get");
const btnRemove = document.getElementById("btn-remove");

const setUser = () => {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const info = document.createElement('div');
            info.className = "info-card";
            info.innerHTML = (`<img src=${data.results[0].picture.large} alt="" />` +
                `<p>Cell: ${data.results[0].cell}</p>` +
                `<p>City: ${data.results[0].location.city} </p>` +
                `<p>Email: ${data.results[0].email}</p>` +
                `<ul>Coordinates
                    <li>Latitude: ${data.results[0].location.coordinates.latitude}</li>
                    <li>Longitude: ${data.results[0].location.coordinates.longitude}</li>
                 </ul>`)
            usersContainer.appendChild(info);
        });
}

let removeUsers = () => {
    while (usersContainer.firstChild) {
        usersContainer.removeChild(usersContainer.firstChild);
    }
}

btnGet.addEventListener("click", setUser);
btnRemove.addEventListener("click", removeUsers);