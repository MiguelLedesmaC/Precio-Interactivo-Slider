// // Slider
// let slider = document.getElementById("myRange");
let output = document.getElementById("quanty-pages");
let dollars = document.querySelector('.card__pageviews__dollars');


// slider.oninput = function() {
   output.innerHTML = `${this.value}K`;
   dollars.innerHTML = `$50`
// }

let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let progressBar = document.getElementById('progressBar')

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = `${this.value}`;
  dollars.innerHTML = `$${this.value}`
  selector.style.left = this.value + '%'
  progressBar.style.width = this.value + '%'
}
