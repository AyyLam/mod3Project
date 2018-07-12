const meals = [
{
"city": "dinner with Jath",
"rank": "2",
"comments": "great"
},
{
"city": "dinner with Jee",
"rank": "2",
"comments": "great"
},
{"city": "lunch with Anthony",
"rank": "4",
"comments": "fab"
}]


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

  /// PROMPT ADD MEAL STATE
  const addButton = document.getElementById('add-meal-button')
  addButton.addEventListener('click', ()=> {
    Meal.renderMealForm()

  })

  /// PROMPT SEARCH BAR
  const searchButton = document.getElementById('search-meal-button')
  searchButton.addEventListener('click', ()=>{
    Meal.renderSearchBar()

    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')

    //
    function findMatches(wordToMatch, meals) {
      return meals.filter(meal => {
        const regex = new RegExp(wordToMatch, 'gi')
        return meal.city.match(regex) || meal.rank.match(regex)
      })
    }
    function displayMatches() {
      const matchArray = findMatches(this.value, meals);
      const html = matchArray.map(meal => {
        const regex = RegExp(this.value, 'gi');
        const cityName = meal.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const rank = meal.rank.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
         <li>
          <span class="name">${cityName}</span>
          <span class="rank">- ${rank}</span>
         </li>
        `;
      }).join(' ')
      suggestions.innerHTML = html
    }

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
  })





});
