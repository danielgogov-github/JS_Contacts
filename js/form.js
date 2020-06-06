function createForm(firstNameValue = '', lastNameValue = '', numberValue = '', submitValue = 'Create') {
    let createForm = document.createElement('form');
    createForm.method = 'POST';
    createForm.className = 'createForm';
    
    let formFirstName = document.createElement('input');
    formFirstName.type = 'text';
    formFirstName.name = 'firstName'
    if(firstNameValue) {
        formFirstName.value = firstNameValue;
    } 
    formFirstName.required = true;
    let formFirstNameLabel = document.createElement('label');
    formFirstNameLabel.setAttribute('for', 'firstName');
    formFirstNameLabel.appendChild(document.createTextNode('Firstname '));
    
    let formLastName = document.createElement('input');
    formLastName.type = 'text';
    formLastName.name = 'lastName';
    if(lastNameValue) {
        formLastName.value = lastNameValue;
    }
    formLastName.required = true;
    let formLastNameLabel = document.createElement('label');
    formLastNameLabel.setAttribute('for', 'lastName');
    formLastNameLabel.appendChild(document.createTextNode('Lastname '));
    
    let formNumber = document.createElement('input');
    formNumber.type = 'text';
    formNumber.name = 'number';
    if(numberValue) {
        formNumber.value = numberValue;
    }
    formNumber.required = true;
    let formNumberLabel = document.createElement('label');
    formNumberLabel.setAttribute('for', 'number');
    formNumberLabel.appendChild(document.createTextNode('Number '));
    
    let formSubmit = document.createElement('input');
    formSubmit.type = 'submit';
    formSubmit.value = submitValue;
    
    createForm.appendChild(formFirstNameLabel);
    createForm.appendChild(formFirstName);
    createForm.appendChild(document.createElement('br'));
    createForm.appendChild(formLastNameLabel);
    createForm.appendChild(formLastName);
    createForm.appendChild(document.createElement('br'));
    createForm.appendChild(formNumberLabel);
    createForm.appendChild(formNumber);
    createForm.appendChild(document.createElement('br'));
    createForm.appendChild(formSubmit);
    main.appendChild(createForm);
}
