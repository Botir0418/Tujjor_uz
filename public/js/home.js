// Slider

var left = document.getElementById('sh_left')
var right = document.getElementById('sh_right')
var slide = document.getElementsByClassName('sh_slide')
var dot = document.getElementsByClassName('sh_dot')

var num = 0

function hidden(){
  for(var i = 0; i < slide.length; i++){
    slide[i].style.visibility = 'hidden'
    slide[i].style.opacity = '0'
    dot[i].classList.remove('active')
  }
}

right.addEventListener('click', () => {
  hidden()
  num++
  if(num == 5){
    num = 0
  }
  show()
})

left.addEventListener('click', () => {
  hidden()
  num--
  if(num < 0){
    num = slide.length - 1
  }
  show()
})

function show(){
  hidden()
  slide[num].style.visibility = 'visible'
  slide[num].style.opacity = '1'
  dot[num].classList.add('active')
}

show()

setInterval(() => {
  num++
  if(num == 5){
    num = 0
  }
  show()
}, 3000);// Slider

var left = document.getElementById('sh_left')
var right = document.getElementById('sh_right')
var slide = document.getElementsByClassName('sh_slide')
var dot = document.getElementsByClassName('sh_dot')

var num = 0

function hidden(){
  for(var i = 0; i < slide.length; i++){
    slide[i].style.visibility = 'hidden'
    slide[i].style.opacity = '0'
    dot[i].classList.remove('active')
  }
}

right.addEventListener('click', () => {
  hidden()
  num++
  if(num == 5){
    num = 0
  }
  show()
})

left.addEventListener('click', () => {
  hidden()
  num--
  if(num < 0){
    num = slide.length - 1
  }
  show()
})

function show(){
  hidden()
  slide[num].style.visibility = 'visible'
  slide[num].style.opacity = '1'
  dot[num].classList.add('active')
}

show()

setInterval(() => {
  num++
  if(num == 5){
    num = 0
  }
  show()
}, 3000);