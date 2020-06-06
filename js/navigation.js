function createNavigation() {
    let navigation = document.createElement('div');
    navigation.className = 'navigation';
    let navigationButtonHome = document.createElement('button');
    let navigationButtonCreate = document.createElement('button');
    let navigationHr = document.createElement('hr');
    navigationButtonHome.innerHTML = 'Home';
    navigationButtonHome.addEventListener('click', home);
    navigationButtonCreate.innerHTML = 'Create';
    navigationButtonCreate.addEventListener('click', createContact);
    navigation.appendChild(navigationButtonHome);
    navigation.appendChild(navigationButtonCreate);
    navigation.appendChild(navigationHr);
    wrapper.appendChild(navigation);        
}
