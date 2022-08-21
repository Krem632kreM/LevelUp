
'use strict';

document.body.addEventListener('mouseover', (event) => {
  if(event.target.closest('.order-btn')) {
  console.log('mouseover')
  event.target.closest('.order-btn').style.opacity = '0.7';
  }
});

document.body.addEventListener('mouseout', (event) => {
  if(event.target.closest('.order-btn')) {
  console.log('mouseout')
  event.target.closest('.order-btn').style.opacity = '1';
  }
});

