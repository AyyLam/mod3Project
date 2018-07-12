
document.addEventListener("DOMContentLoaded", function() {

  //////////
  // Keeps the Nav bar from being shitty...
  const nav = document.querySelector('#main');
  let topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }
  window.addEventListener('scroll', fixNav);
  ////////////

  ///////////
  /// PROMPT ADD MEAL STATE
  const addButton = document.getElementById('add-meal-button')
  addButton.addEventListener('click', ()=> {
    console.log('CHANGE TO MEAL FORM')
    Meal.renderMealForm()

  })

  const searchButton = document.getElementById('search-meal-button')
  searchButton.addEventListener('click', ()=>{
    console.log('CHANGE TO SEARCH BAR')
    Meal.renderSearchBar() 

  })




});
