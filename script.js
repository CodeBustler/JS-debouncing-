// Debouce Function with Delay
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}

// Click Handler
const clickHandler = () => console.log('Button Clicked');

// EventListener
const btn = document.querySelector('#btn');
btn.addEventListener('click', debounce(clickHandler, 1000));
