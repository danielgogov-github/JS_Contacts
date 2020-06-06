function showAllContacts() {
    let homeTable = document.createElement('table');
    let headerRow = homeTable.insertRow();
    let firstNameCell = headerRow.insertCell();
    let lastNameCell = headerRow.insertCell();
    let numberCell = headerRow.insertCell();
    let dateCreatedCell = headerRow.insertCell();
    let EditCell = headerRow.insertCell();
    let DeleteCell = headerRow.insertCell();
    firstNameCell.innerHTML = 'Firstname';
    lastNameCell.innerHTML = 'Lastname';
    numberCell.innerHTML = 'Number';
    dateCreatedCell.innerHTML = 'Created';
    
    for(const contactObject of allContacts) {
        let oneContactRow = homeTable.insertRow();
        for(const key in contactObject) {
            if(key === 'id') {
                oneContactRow.setAttribute('id', contactObject[key]);
                continue;
            }
            let cell = oneContactRow.insertCell();
            if(key === 'date') {
                cell.innerHTML = showDate(contactObject[key]);
                continue;
            }
            cell.innerHTML = contactObject[key];
        }
    
        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'buttonDelete';
        buttonDelete.innerHTML = 'Delete'
        let buttonEdit = document.createElement('button');
        buttonEdit.className = 'buttonEdit';
        buttonEdit.innerHTML = 'Edit';
        let editCell = oneContactRow.insertCell();
        editCell.appendChild(buttonEdit);
        let deleteCell = oneContactRow.insertCell();
        deleteCell.appendChild(buttonDelete);
    }

    main.appendChild(homeTable);
}

function formSubmit(event) {
    event.preventDefault();
    status.innerHTML = '';

    form = document.querySelector('.createForm');
    firstName = form.querySelector('input[name="firstName"]');
    firstNameValue = firstName.value;
    lastName = form.querySelector('input[name="lastName"');
    lastNameValue = lastName.value;
    number = form.querySelector('input[name="number"');
    numberValue = number.value;

    if((firstNameValue.trim().length) < 3) {
        status.innerHTML = 'Firstname is too short!<br><br>';
    }else if((lastNameValue.trim().length) < 3) {
        status.innerHTML = 'Lastname is too short!<br><br>';
    }else if((numberValue.trim().length) < 3) {
        status.innerHTML = 'Number is too short!<br><br>';
    }else {
        const newContact = {
            id: (new Date()).getTime(),
            firstName: firstNameValue.trim(),
            lastName: lastNameValue.trim(),
            number: numberValue.trim(),
            date: + new Date()
        }

        allContacts.push(newContact);
        localStorage.setItem('allContacts', JSON.stringify(allContacts));
        status.innerHTML = 'Contact was created or updated successfully!<br><br>';
        
        window.setTimeout(function(){
            window.location.replace('index.html');
        }, 1000)
    }

}

function deleteContact(event) {
    if(confirm('Are you sure you want to delete?')) {
        let parentRow = event.currentTarget.parentNode.parentNode;
        let id = parseInt(parentRow.getAttribute('id'));

        for(const [arrayIndex, contactObject] of allContacts.entries()) {
            for(const key in contactObject) {
                if(contactObject[key] === id) {
                    allContacts.splice(arrayIndex, 1);
                    localStorage.setItem('allContacts', JSON.stringify(allContacts));
                    window.location.replace('index.html');
                    break;
                }
            }
        }
    }   
}

function editContact(event) {
    main.innerHTML = '';
    let parentRow = event.currentTarget.parentNode.parentNode;
    let contactId = parseInt(parentRow.getAttribute('id'));
    let contactToEdit = null;

    for(const [arrayIndex, contactObject] of allContacts.entries()) {
        for(const key in contactObject) {
            if(contactObject[key] === contactId) {
                contactToEdit = allContacts.slice(arrayIndex, arrayIndex + 1);
                allContacts.splice(arrayIndex, 1);
                localStorage.setItem('allContacts', JSON.stringify(allContacts));
                break;
            }
        }
    }

    createForm(contactToEdit[0].firstName, contactToEdit[0].lastName, contactToEdit[0].number, 'Update');
    let formEdit = document.querySelector('.createForm');
    formEdit.addEventListener('submit', formSubmit);
}

function createStatus() {
    let status = document.createElement('div');
    status.className = 'status';
    status.style.color = '#DC143C';  
    wrapper.append(status);      
}

function showDate(timestamp) {
    let date = new Date(timestamp);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    day = checkZero(day);
    month += 1;
    month = checkZero(month);
    hours = checkZero(hours);
    minutes = checkZero(minutes);

    function checkZero(number) {
        if(number < 10) {
            number = '0' + number;
        }
        return number;
    }

    return day +'-'+ month +'-'+ year +' '+ hours +':'+ minutes;
}
