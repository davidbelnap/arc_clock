function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES);
}

function draw() {
	background(0);
  translate(200, 200);
  rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(8);
	stroke('#50D0D6');
	noFill();
	let scAngle = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, scAngle);

	strokeWeight(8);
	stroke('#F486BC');
	noFill();
	let mnAngle = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, mnAngle);

	strokeWeight(8);
	stroke('#D252DB');
	noFill();
	let hrAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, hrAngle);

}