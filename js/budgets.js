// calculate total player cost 
document.getElementById('calculate-total-player-cost').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-person');
    const totalPlayerNumber = totalPlayer();
    const totalPlayerCost = perPlayerCost * totalPlayerNumber;

    document.getElementById('total-player-cost').innerText = totalPlayerCost;
})

// calculate overall cost 
document.getElementById('calculate-total-cost').addEventListener('click',function(){
    const totalPlayerCost = getTextFieldValue('total-player-cost');
    const managerCost = getInputFieldValue('manager-cost');
    const coachCost = getInputFieldValue('coach-cost');
    const totalCost = totalPlayerCost + managerCost + coachCost;

    document.getElementById('total-cost').innerText = totalCost;
})