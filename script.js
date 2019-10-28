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
