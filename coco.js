console.log ("initialise coco")
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const rewards = ["Coins", "Try Again", "Gift", "Bonus"];
const colors = ["#f39c12", "#e74c3c", "#3498db", "#2ecc71"];

const slices = rewards.length;
const angle = (2 * Math.PI) / slices;

function drawWheel(rotation = 0) {
  ctx.clearRect(0, 0, 400, 400);

  for (let i = 0; i < slices; i++) {
    ctx.beginPath();
    ctx.moveTo(200, 200);

    ctx.arc(
      200,
      200,
      200,
      i * angle + rotation,
      (i + 1) * angle + rotation
    );

    ctx.fillStyle = colors[i];
    ctx.fill();

    // text
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(i * angle + angle / 2 + rotation);
    ctx.fillStyle = "#fff";
    ctx.fillText(rewards[i], 100, 0);
    ctx.restore();
  }
}

drawWheel();