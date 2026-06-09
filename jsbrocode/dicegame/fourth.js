function rollDice(){
    const numDice = document.getElementById('numDice').value;
    const diceresult = document.getElementById('result');
    const diceimages = document.getElementById('diceimages');
    const values = [];
    const images = [];
    for(let i=0; i<numDice; i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="diceimages/${value}.png">`);

        
    }
    diceresult.textContent=`DICE ${values.join(', ')}`;
    diceimages.innerHTML=images.join("");
}