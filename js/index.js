let wrapper = document.querySelector('.wrapper');
let main = document.createElement('div');
main.className = 'main';    
createNavigation();
createStatus();
let status = document.querySelector('.status');
wrapper.appendChild(main);    

const allContacts = JSON.parse(localStorage.getItem('allContacts'));
showAllContacts();

function home() {
    window.location.replace('index.html');
}

function createContact() {
    main.innerHTML = '';
    createForm();
    let formCreate = document.querySelector('.createForm');
    formCreate.addEventListener('submit', formSubmit);
}

window.onload = function() {
    deleteList = document.querySelectorAll('.buttonDelete');
    for(let i = 0; i < deleteList.length; i++) {
        deleteList[i].addEventListener('click', deleteContact);
    }
    editList = document.querySelectorAll('.buttonEdit');
    for(let i = 0; i < editList.length; i++) {
        editList[i].addEventListener('click', editContact);
    }
};
