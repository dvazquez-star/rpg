const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 400, y: 300, hp: 100, maxHp: 100, color: 'cyan' };
let enemies = [
    { x: 200, y: 200, hp: 50, maxHp: 50, color: 'red' },
    { x: 600, y: 400, hp: 80, maxHp: 80, color: 'orange' }
];

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, 40, 40);
    drawHealthBar(player);
}

function drawEnemies() {
    enemies.forEach(e => {
        ctx.fillStyle = e.color;
        ctx.fillRect(e.x, e.y, 40, 40);
        drawHealthBar(e);
    });
}

function drawHealthBar(entity) {
    let barWidth = 40;
    let barHeight = 6;
    let hpRatio = entity.hp / entity.maxHp;
    ctx.fillStyle = 'black';
    ctx.fillRect(entity.x, entity.y - 10, barWidth, barHeight);
    ctx.fillStyle = hpRatio > 0.5 ? 'green' : hpRatio > 0.2 ? 'yellow' : 'red';
    ctx.fillRect(entity.x, entity.y - 10, barWidth * hpRatio, barHeight);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawEnemies();
    requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp': player.y -= 10; break;
        case 'ArrowDown': player.y += 10; break;
        case 'ArrowLeft': player.x -= 10; break;
        case 'ArrowRight': player.x += 10; break;
    }
});

document.getElementById("adminBtn").addEventListener("click", () => {
    let code = prompt("Introduce V-Code:");
    if(code === "GIVEME100") player.hp = player.maxHp;
});
