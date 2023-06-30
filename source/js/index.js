
document.addEventListener('pointerdown', (evt) => {
  const dataset = evt.target.dataset
  
  if (dataset.type === 'burger') {
    const burgerButton = evt.target
    burgerButton.classList.toggle('burger--active')
    
    const subHeader = document.querySelector('.header__sub-header')
    subHeader.classList.toggle('header__sub-header--active')
  }
  
})
