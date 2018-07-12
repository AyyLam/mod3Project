class Meal {
   constructor(meal) {
     this.name = meal.name
     this.rank = meal.rank
     this.comments = meal.comments
     this.id = meal.id
   }

  static renderMealForm() {
    const placement = document.querySelector('#food-form')
    placement.innerHTML =
    `<div class="site-wrap">
      <form class="add-items">
        <h3>Food Entry</h3>
        <div>
        <label for="meal">Meal Name </label>
        <br>
        <input id="meal-box" type="text" name="meal" required>
        <br>
        <br>
        <br>
        <label for="Rank">Select ranking</label>
        <br>
        <select id="rank-box" label="Rank" name="Rank">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br>
        <br>
        <br>
        <label for="comments">Comments</label>
        <br>
        <textarea id="comments-box" name="comments" rows="8" cols="80" placeholder="How was your experience?"></textarea>
        <br>
        <br>
        <input type="submit" value="ADD MEAL">
      </form>

      <div>`
  }

    static renderSearchBar() {
      const placement = document.querySelector('#food-form')
      placement.innerHTML =
      `<div id="searchbar">
        <label for="Search">Search Meals</label>
        <input id="meal-search" type="text" name="meal-search" required>
      </div>`
    }

  // const mealName = document.querySelector('#meal-box').value
  // const mealName = document.querySelector('#rank-box').value
  // const mealName = document.querySelector('#comments-box').value
}
