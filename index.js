// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;


const element = document.querySelector('#tabs');


element.addEventListener('click', function (event) {
  let activeTabs = document.querySelectorAll('.active');

  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace('active', '');
  });
  event.target.parentElement.className == 'active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';

}, false);