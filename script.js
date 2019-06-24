var draw = SVG("game").size(480, 360);
var background = draw.image("desert.png", 480, 360)
var dino = draw.image("dino1.png", 84, 67).move(30, 210)
var cactus = draw.image("cactus2.png", 50, 62).move(480, 210)
var changeY = 0
var isJump = false
var score = 0
var speed = -4
var text = draw.text("0").move(400, 20).fill(
	"white"
).font({
	size: 40
})




function update() {
	cactus.dx(speed)
	if (cactus.x() == 0) {
		cactus.x(480)
		score++
		text.text("" + score)
		if (score == 10){
			speed = -5
		}
			

	}
	
	if (isJump == true) {
		dino.dy(changeY)
		changeY = changeY + 0.5
		if (dino.y() >= 210){
			dino.y(210)
			isJump = false
		} 
	}
	//if (cactus.height() + cactus.y() >= dino.y() && cactus.width() + cactus.x() >= dino.x() && cactus.x() <= dino.x()) {
	if (dino.y() + dino.height() >= cactus.y() && dino.x() + dino.width() > cactus.x() && dino.x() < cactus.x() + cactus.width()) {
		background.load("desertGO.png")
		clearInterval(id_interval)
	}
	


}


var id_interval = setInterval(update, 10)
document.onkeydown = function (event) {
	if (event.keyCode == 32 && isJump == false) {
		changeY = -14
		isJump = true
	}



}
