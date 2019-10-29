const fruits = ['apples', 'bananas', 'cherries']
const colors = ['red', 'green', 'blue', 'purple', 'orange']

// Find the h1 tag
const $header = document.getElementById('header')
console.log([$header])

const $buttons = document.querySelectorAll('.button')
console.log($buttons)

for (const $button of $buttons) {
  $button.style.backgroundColor = 'blue'
}

const $list = document.getElementById('list')
console.log($list.children[1])
const $bread = document.querySelector('li:nth-of-type(2)')
console.log($bread)

const $item = document.querySelector('li')
console.log($item.nextElementSibling)

$header.textContent = 'Hello World!'
$header.classList.add('highlight')

$header.style.color = 'red'
$header.style.backgroundColor = 'yellow'

$list.innerHTML += '<li>Flour</li>'
for (const fruit of fruits) {
  $list.innerHTML += `<li>${fruit}</li>`
}

const $boxes = document.getElementById('boxes')

// for (let i=0; i<1000; i++){
// for (const color of colors) {
//   $boxes.innerHTML += `<div class="box" style="background-color: ${color};">`
// }
// }

const boxes = []
for (let i = 0; i < 10; i++) {
  for (const color of colors) {
    boxes.push(`<div class="box" style="background-color: ${color};"></div>`)
  }
}

$boxes.innerHTML += boxes.join('')
