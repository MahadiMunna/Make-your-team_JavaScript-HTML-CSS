// function for count total selected player in list 
function totalPlayer(){
    const totalPlayerList = document.querySelectorAll('#player-list li');
    const totalPlayerNumber = totalPlayerList.length;
    return totalPlayerNumber;
}

// function for add selected players
function addPlayer(playerNameId,btnId){

    const totalPlayerNumber = totalPlayer();
    if(totalPlayerNumber==5){
        alert('You have already selected 5 players!');
        return;
    }

    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    const playerName = document.getElementById(playerNameId).innerText;
    li.innerText = playerName;
    playerList.appendChild(li);

    const btnStatus = document.getElementById(btnId);
    btnStatus.disabled = true;
    btnStatus.style.backgroundColor = 'rgba(175, 175, 175, 1)'
}

// button envent handler 
document.getElementById('messi').addEventListener('click',function(){
    addPlayer('messi-name','messi');

})
document.getElementById('Ronaldo').addEventListener('click',function(){
    addPlayer('Ronaldo-name','Ronaldo');
 
})
document.getElementById('Suárez').addEventListener('click',function(){
    addPlayer('Suárez-name','Suárez');

})
document.getElementById('Marcelo').addEventListener('click',function(){
    addPlayer('Marcelo-name','Marcelo');
 
})
document.getElementById('Mbappe').addEventListener('click',function(){
    addPlayer('Mbappe-name','Mbappe');
  
})
document.getElementById('Neymar').addEventListener('click',function(){
    addPlayer('Neymar-name','Neymar');
   
})
document.getElementById('Ramos').addEventListener('click',function(){
    addPlayer('Ramos-name','Ramos');
  
})
document.getElementById('Thomas').addEventListener('click',function(){
    addPlayer('Thomas-name','Thomas');
  
})
document.getElementById('Zlatan').addEventListener('click',function(){
    addPlayer('Zlatan-name','Zlatan');
    
})
