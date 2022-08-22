'use strict';

document.body.addEventListener('mouseover', function (event) {
  if (event.target.closest('.order-btn')) {
    console.log('mouseover');
    event.target.closest('.order-btn').style.opacity = '0.7';
  }
});
document.body.addEventListener('mouseout', function (event) {
  if (event.target.closest('.order-btn')) {
    console.log('mouseout');
    event.target.closest('.order-btn').style.opacity = '1';
  }
});