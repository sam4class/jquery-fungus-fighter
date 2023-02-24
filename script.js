$(document).ready(onReady);

// State Variables can be declared outside of the onReady
//State variables
let hitPoints = 100;
let attackPoints = 100;
// let attackArcaneScepter ={
//     'AP Cost': 12,
//     'HP Damage': 14
// }

// let attackEntangle = {
//     'AP Cost': 23,
//     'HP Damage': 9
// }

// let attackDragonBlade = {
//     'AP Cost': 38,
//     'HP Damage': 47
// }

// let attackStarFire ={
//     'AP Cost': 33,
//     'HP Damage': 25
// }
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    //am i in here?
    console.log('Inside onReady');
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    //adding Listener to update text above attack button
    $('.attack-btn.arcane-sceptre').on('click', arcaneAttack);
    $('.attack-btn.entangle').on('click', entangleAttack);
    $('.attack-btn.dragon-blade').on('click', dbAttack);
    $('.attack-btn.star-fire').on('click', starAttack);

    render();
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneAttack(){
    //am i in here?
    console.log('Inside arcaneAttack');
    //everytime click happens it adds 12
    attackPoints -= 12;
    hitPoints -=9;
    console.log('current points= AP:', attackPoints, 'HP:', hitPoints);
    
    //show that number in counter box

    render();

}

function entangleAttack(){
    //am i here?
    console.log('Inside entangleAttack');
   attackPoints -= 23;
   hitPoints -=14;
    console.log('current points= AP:', attackPoints, 'HP:', hitPoints);

    render();
}

function dbAttack(){
    //am I here?
    console.log('Inside dbAttack');
   attackPoints -= 38;
    hitPoints -= 47;
    console.log('current points= AP:',attackPoints, 'HP:', hitPoints);
    
    render();
}

function starAttack(){
    console.log('Inside starAttack');
   attackPoints -= 33;
    hitPoints -= 47;
    console.log('current points= AP:', attackPoints, 'HP:', hitPoints);
   
    render();
}

function render(){
    console.log("Inside render");
    $('.ap-text').html(`<div class="ap-text">${attackPoints}</div>`)
    $('.hp-text').html(`<div class="ap-text">${hitPoints}</div>`)
//this needs to equal 0, duh, or wait, what i had would work too?  hitPoints < 0, attackPoints < 0?
//i get the same thing using both ways, something else is broken
    if(hitPoints === 0);{
        console.log('The Monster is defeated!!!');
        $('.freaky-fungus walk').html(` <div class="freaky-fungus dead"></div>`)
    }
    if ( attackPoints === 0){
        console.log('The Monster Won!');
        $('.freaky-fungus walk').html(` <div class="freaky-fungus jump"></div>`)
    }

}


