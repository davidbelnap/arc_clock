function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
}

function draw() {
	background(0);
  translate(canvas.width/2, canvas.height/2);
  rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(12);
	stroke('#50D0D6');
	noFill();
	let scAngle = map(sc, 0, 60, 0, 360);
	arc(0, 0, 450, 450, 0, scAngle);

	strokeWeight(12);
	stroke('#F486BC');
	noFill();
	let mnAngle = map(mn, 0, 60, 0, 360);
	arc(0, 0, 420, 420, 0, mnAngle);

	strokeWeight(12);
	stroke('#D252DB');
	noFill();
	let hrAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 390, 390, 0, hrAngle);

}