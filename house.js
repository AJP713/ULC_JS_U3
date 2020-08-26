console.log("test 1");

let bulb1 = document.querySelector('#lightbulb1')
let bulb2 = document.querySelector('#lightbulb2')
let bulb3 = document.querySelector('#lightbulb3')
let bulb4 = document.querySelector('#lightbulb4')

console.log(bulb1)
console.log(bulb1.id)
console.log(bulb1.classList)
console.log(bulb2)
console.log(bulb3)


bulb1.addEventListener('click', (e) => {
  console.log("first bulb clicked!")
  bulb1.classList.toggle('active')
  
})

bulb2.addEventListener('click', (e) => {
  console.log("bulb 2 clicked!")
     if (bulb2.classList.contains('active')) {
    bulb2.classList.remove('active')
  } else {
    bulb2.classList.add('active')
  }
})

bulb3.addEventListener('click', (e) => {
  console.log("bulb 3 clicked!")
    if (bulb3.classList.contains('active')) {
    bulb3.classList.remove('active')
  } else {
    bulb3.classList.add('active')
  }
})

bulb4.addEventListener('mousemove', (e) => {
  console.log("first bulb clicked!")
  bulb4.classList.toggle('active')
  
})