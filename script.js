// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Placeholder AI analysis
function analyzeImage() {
  const file = document.getElementById('coralImage').files[0];
  const resultDiv = document.getElementById('analysisResult');
  if (!file) {
    resultDiv.textContent = "Please upload an image first!";
    return;
  }
  resultDiv.textContent = "Analyzing image... 🌿";
  setTimeout(() => {
    // Demo prediction
    const outcomes = ["Healthy Coral 🌿", "Stressed Coral ⚠️", "Bleached Coral 🔴"];
    resultDiv.textContent = "Prediction: " + outcomes[Math.floor(Math.random()*3)];
  }, 2000);
}

// Hero Canvas Animation: bubbles + fish
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];
let fish = [];

for(let i=0;i<100;i++){
  bubbles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*3+2, d: Math.random()*2});
}
for(let i=0;i<15;i++){
  fish.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height/2, size: 20+Math.random()*20, speed: 1+Math.random()*2});
}

function drawHero(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Draw bubbles
  for(let b of bubbles){
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
    b.y -= b.d;
    if(b.y<0) b.y = canvas.height;
  }
  // Draw fish (simple triangles)
  for(let f of fish){
    ctx.fillStyle = '#FF6F61';
    ctx.beginPath();
    ctx.moveTo(f.x, f.y);
    ctx.lineTo(f.x-f.size, f.y-f.size/2);
    ctx.lineTo(f.x-f.size, f.y+f.size/2);
    ctx.closePath();
    ctx.fill();
    f.x += f.speed;
    if(f.x>canvas.width+50) f.x = -50;
  }
  requestAnimationFrame(drawHero);
}
drawHero();

// Dashboard Chart (dummy data)
const ctxDash = document.getElementById('dashboardChart').getContext('2d');
const dashboardChart = new Chart(ctxDash, {
  type: 'bar',
  data: {
    labels: ['Healthy', 'Stressed', 'Bleached'],
    datasets: [{
      label: 'Coral Health Observations',
      data: [12, 7, 4],
      backgroundColor: ['#4CAF50','#FFC107','#F44336']
    }]
  },
  options: {
    responsive:true,
    plugins: { legend: { display:false } },
    scales: { y: { beginAtZero:true } }
  }
});
