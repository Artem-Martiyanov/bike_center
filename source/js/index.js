document.addEventListener('pointerdown', (evt) => {
  const dataset = evt.target.dataset
  
  if (dataset.type === 'burger') {
    const burgerButton = evt.target
    burgerButton.classList.toggle('burger--active')
    
    document.body.classList.toggle('page--locked')
    
    const subHeader = document.querySelector('.header__sub-header')
    subHeader.classList.toggle('header__sub-header--active')
  }
  
  if (dataset.type === 'search') {
    const searchButton = evt.target
    searchButton.closest('.search').classList.toggle('search--shown')
  }
  if (dataset.type === 'footer-dropdown') {
    
    const dropdown = evt.target.closest('.dropdown')
    dropdown.classList.add('dropdown--shown')
    
    const dropdownCloseArea = dropdown.querySelector('.dropdown__back-layout')
    const dropDownCloseHandler = () => {
      dropdown.classList.remove('dropdown--shown')
      dropdownCloseArea.removeEventListener('pointerdown', dropDownCloseHandler)
    }
    dropdownCloseArea.addEventListener('pointerdown', dropDownCloseHandler)
  }
})

