
  const canvas = document.getElementById("draw");
   const weight = document.getElementById("weight");
  const ctx = canvas.getContext("2d");
  const colorPicker = document.getElementById("colorPicker");

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  canvas.style.padding="0px";
  canvas.style.margin="0px";
  

  ctx.strokeStyle = "black";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = weight.value;

  function draw(e) {
    if (!isDrawing) return;

    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
  colorPicker.addEventListener("change", (e) => {
    ctx.strokeStyle = colorPicker.value;
});
weight.addEventListener("change", (e) => {
    ctx.lineWidth = weight.value;
});
