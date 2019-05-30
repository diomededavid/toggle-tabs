// Import stylesheets
import './style.css';


const elem = document.querySelector('#tabs');


var tableOfContents = function () {
  // Get all of the headings
  let headings = document.querySelectorAll('h2');
  let tab = document.querySelector('#tabs');

  /**
   * Get the heading ID (or create one if it doesn't have one)
   * @param  {Node}   elem The element
   * @return {String}      The ID
   */

  let getID = function (elem) {
    // If the element doesn't have an ID create one
    if (!elem.id) {
      elem.id = elem.textContent.replace(new RegExp(' ', 'g'), '-').toLowerCase();
    }
    return elem.id;
  }

  let tabItems = Array.prototype.map.call(headings, function (heading) {
    return `<li><a href="#${getID(heading)}">${heading.textContent}</a></li>`;
  });
  
  console.log(tabItems);
  if (tab && tabItems.length > 0) {
    tab.innerHTML = `<ul> ${tabItems.join('')}</ul>`
  };

}

tableOfContents();