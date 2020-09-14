/* eslint-disable strict */
$(function() {
  // Add an item
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    // Get new shopping item name
    const entry = $('#shopping-list-entry').val();

    // Create new shopping item
    $('ul.shopping-list').append(
      `<li>
      <span class="shopping-item">${entry}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`
    );
  });

  // Edit an item
  $('.shopping-item-controls').on('click', '.shopping-item-toggle', function (event) {
    //does submit or click work here?
    this.sibling('.shopping-item').toggleClass('.shopping-item__checked');
  });
    
  $('.shopping-item-controls').on('submit', '.shopping-item-delete', function (event) {
    //does submit or click work here?
    this.closest('li').remove();
  });
});