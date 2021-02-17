const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');



let size = 5
let isPressed = false
let color = "black"
let x
let y

canvas.addEventListener(('mousedown') , (e) => {
isPressed = true

x= e.offsetX
y=e.offsetY
//console.log(isPressed,x, y)

})

//Defining the mouse actions
canvas.addEventListener(('mouseup') , (e) => {
    isPressed = false
    
    x= undefined
    y=undefined
    //console.log(isPressed,x, y)
    
    })
canvas.addEventListener(('mousemove') , (e) => {
       if (isPressed) {
           const x2 = e.offsetX
           const y2 = e.offsetY
           drawCircle(x2, y2)
           drawLine(x, y, x2, y2)
           x= x2
           y=y2
       }
        //console.log(isPressed,x, y)
        
})

//Draw Lines and Circles
function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

//Incerease and Decrease button size using these buttons
function updateSizeOnScreen(){
    sizeEL.innerText = size
}
increaseBtn.addEventListener('click' , () => {
    size += 1
    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click' , () => {
    size -= 1
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})


//Changing the color:
colorEl.addEventListener('change',(e) => {
    color = e.target.value
})
//Clearing the Canvas.
clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})