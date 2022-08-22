
function btnDisable(btnId){
    const totalPlayerNumber = totalPlayer();
    const btnStatus = document.getElementById(btnId);
    if(totalPlayerNumber<5){
        btnStatus.disabled = true;
    }
    if(btnStatus.disabled==true){
        btnStatus.style.backgroundColor = 'rgba(175, 175, 175, 1)'
    }   
}
function totalPlayer(){
    const totalPlayerList = document.querySelectorAll('#player-list li');
    const totalPlayerNumber = totalPlayerList.length;
    return totalPlayerNumber;
}

function addPlayer(playerNameId){

    const totalPlayerNumber = totalPlayer();
    if(totalPlayerNumber==5){
        alert('You have alredy select 5 players!');
        return;
    }

    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    const playerName = document.getElementById(playerNameId).innerText;
    li.innerText = playerName;
    playerList.appendChild(li);
}

document.getElementById('messi').addEventListener('click',function(){
    addPlayer('messi-name');
    btnDisable('messi');
})
document.getElementById('Ronaldo').addEventListener('click',function(){
    addPlayer('Ronaldo-name');
    btnDisable('Ronaldo');  
})
document.getElementById('Suárez').addEventListener('click',function(){
    addPlayer('Suárez-name');
    btnDisable('Suárez');
})
document.getElementById('Marcelo').addEventListener('click',function(){
    addPlayer('Marcelo-name');
    btnDisable('Marcelo');
})
document.getElementById('Mbappe').addEventListener('click',function(){
    addPlayer('Mbappe-name');
    btnDisable('Mbappe');
})
document.getElementById('Neymar').addEventListener('click',function(){
    addPlayer('Neymar-name');
    btnDisable('Neymar');
})
document.getElementById('Ramos').addEventListener('click',function(){
    addPlayer('Ramos-name');
    btnDisable('Ramos');
})
document.getElementById('Thomas').addEventListener('click',function(){
    addPlayer('Thomas-name');
    btnDisable('Thomas');
})
document.getElementById('Zlatan').addEventListener('click',function(){
    addPlayer('Zlatan-name');
    btnDisable('Zlatan');
})
