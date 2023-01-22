function createCircle() {
    const div = document.createElement('div')
    const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
    let x = event.clientX
    let y = event.clientY
   
const circle = {
    width: "25px",
    height: "25px",
    backgroundColor: colors[Math.floor(Math.random()*colors.length)],
    borderRadius: "50%",
    position: "absolute",
    top: y -20 +'px',
    left: x -20 +'px'
}

for (let style in circle){
    console.log(style)
    div.style[style] = circle[style]
}
document.body.appendChild(div)
}