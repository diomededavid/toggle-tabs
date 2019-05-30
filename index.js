// Import stylesheets
import 'normalize.css'
import './style.css';


const elem = document.querySelector('#tabs');


var contentTabs = function () {
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

  if (tab && tabItems.length > 0) {
    tab.innerHTML = `<ul> ${tabItems.join('')}</ul>`
  };

  /**
 * Set links to active
 * @param
 */

  let activeLinks = function (event) {
    let tabItems = document.querySelectorAll('.active');

    tabItems.forEach(function (tab) {
      tab.className = tab.className.replace('active', '');
    });
    event.target.parentElement.className == 'active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';

  }


  elem.addEventListener('click', activeLinks, false);

}

contentTabs();