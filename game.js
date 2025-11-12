const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let player = {x:400,y:300,width:32,height:32,speed:3,hp:100,ep:50,gold:0,level:1,inventory:[]};
const keys = {};
window.addEventListener('keydown', e => keys[e.key] = true);
window.addEventListener('keyup', e => keys[e.key] = false);
const dialogueBox = document.getElementById('dialogue');
function showDialogue(text,duration=3000){dialogueBox.textContent=text;setTimeout(()=>dialogueBox.textContent='',duration);}
function updateUI(){
    document.getElementById('hp').textContent=player.hp;
    document.getElementById('ep').textContent=player.ep;
    document.getElementById('gold').textContent=player.gold;
    document.getElementById('level').textContent=player.level;
    const itemsEl=document.getElementById('items'); itemsEl.innerHTML='';
    player.inventory.forEach(item=>{const li=document.createElement('li'); li.textContent=item; itemsEl.appendChild(li);});
}
function gameLoop(){
    if(keys['ArrowUp']||keys['w']) player.y-=player.speed;
    if(keys['ArrowDown']||keys['s']) player.y+=player.speed;
    if(keys['ArrowLeft']||keys['a']) player.x-=player.speed;
    if(keys['ArrowRight']||keys['d']) player.x+=player.speed;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='cyan';
    ctx.fillRect(player.x,player.y,player.width,player.height);
    requestAnimationFrame(gameLoop);
}
updateUI(); gameLoop();