// script.js

const order1= document.querySelector('[data-key=" order1"]');
const order2= document.querySelector('[data-key=" order2"]');
const order3= document.querySelector('[data-key=" order3"]');



const biscuits1 =order1.querySelector('.biscuits .count');
const donuts1=order1.querySelector('.donuts .count'); 
const pancakes1=order1.querySelector('.pancakes .count'); 
const status1=order1.querySelector('.status dd') ;

const biscuits2 =order2.querySelector('.biscuits .count');
const donuts2=order2.querySelector('.donuts .count'); 
const pancakes2=order2.querySelector('.pancakes .count'); 
const status2=order2.querySelector('.status dd') ;

const biscuits3 =order3.querySelector('.biscuits .count');
const donuts3=order3.querySelector('.donuts .count'); 
const pancakes3=order3.querySelector('.pancakes .count'); 
const status3=order3.querySelector('.status dd') ;

biscuits1.textContent= order1.dataset.biscuits;
donuts1.textContent =order1.dataset.donuts;
pancakes1.textContent =order1.dataset.pancakes;
status1.textContent = order1.dataset.Delivered=== 'true' ? 'Delivered' : 'Pending';


/*

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending
*/