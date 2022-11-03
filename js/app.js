// // Slider
// let slider = document.getElementById("myRange");
let output = document.getElementById("quanty-pages");


// slider.oninput = function() {
   output.innerHTML = `${this.value}K`;
// }

let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let progressBar = document.getElementById('progressBar')

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = `${this.value}K`;
  selector.style.left = this.value + '%'
  progressBar.style.width = this.value + '%'
}
