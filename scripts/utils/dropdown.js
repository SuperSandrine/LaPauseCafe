const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdownContent');
const burgerDropdown = document.getElementById('menu__burger');
const burgerDropdownContent = document.getElementById('menu');

// dropdown sur le menu à propos
dropdown.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none';
});

dropdown.addEventListener('mouseover', () => {
  dropdownContent.style.display = 'flex';
});


// dropdown pour la version mobile
// à améliorer: rajouter fermeture au click hors zone dropdown
// à améliorer: rajouter fermeture au click sur le choix
// à améliorer: problème de disposition entre titre H1 et dropdown ouverte
burgerDropdown.addEventListener('click', () => {
  if (burgerDropdownContent.style.display === 'flex'){
    burgerDropdownContent.style.display = 'none'
    burgerDropdown.classList.remove('dropdown');
    burgerDropdownContent.classList.remove('dropdownContent');
  } else {
    burgerDropdownContent.style.display = 'flex'
    burgerDropdown.classList.add('dropdown');
    burgerDropdownContent.classList.add('dropdownContent');
  }
})

