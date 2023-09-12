//Show enemy's HP and yours
//Decide Enemy's Type
    //randomizer on enemy type array
    //
//Show some clue
//Show known clues

//Damage on effective, uneffective and normal case
const eff=50
const uneff=17
const norm=25

//Enemy Classes
class enemy{
    constructor(type,rock,scissor,paper){
        this.type=type;
        this.rock=rock;
        this.scissor=scissor;
        this.paper=paper;
    }
}
//Enemy's Affinities
const earth= new enemy("Earth Golem",norm,uneff,eff)
const water= new enemy("Water Golem",uneff,uneff,eff)
const flesh= new enemy("Flesh Golem",norm,eff,uneff)
const metal= new enemy("Metal Golem",eff,uneff,norm)
const wood = new enemy("Wood Golem",norm,eff,norm)
const crystal = new enemy ("Crystal Golem",eff,norm,uneff)

//Decide Current enemy's Type and HP
enemyTypesArr=[earth,water,flesh,metal,wood,crystal]
enemy=enemyTypesArr[Math.floor(Math.random()*enemyTypesArr.length)]
let enemyHpStart=100
let yourHpStart=3
console.log(enemy.type)
console.log(enemyHpStart)

//Decide Enemy's Attack
let enemyAttackArray=["eRock","ePaper","eScissor"]
let enemyAttack=enemyAttackArray[Math.floor(Math.random()*enemyAttackArray.length)]
console.log(` Enemy Attack ${enemyAttack}`)

document.onready

let hp=document.getElementById("enemyhp")
let myhp=document.getElementById("yourhp")

//Each Attack's Effect
//Attack Input
//Compare with Enemy Attack
//If win take hp from enemy, if lose take hp from protag


function attackRock(){
    let myAttack=enemy.rock
    if (enemyAttack=="eScissor"){
        win();
    } 
    else if (enemyAttack=="ePaper"){
        lose();
    }
    else{
        draw();
    }
    console.log(enemy.rock)
}
function attackPaper(){
    let myAttack=enemy.paper
    if (enemyAttack=="eRock"){
        win();
    }
    else if (enemyAttack=="eScissor"){
        lose();
    }
    else{
        draw();
    }
    console.log(enemy.paper)
}

function attackScissor(){
    let myAttack=enemy.scissor
    if (enemyAttack=="ePaper"){
        win();
    }
    else if (enemyAttack=="eRock"){
        lose();
    }
    else{
        draw();
    }
}

function win(){
    enemyHpStart-=myAttack
    alert(`Enemy Use ${enemyAttack}, You Win`)
    hp.innerHTML=`HP = ${enemyHpStart}`
    let enemyAttack=enemyAttackArray[Math.floor(Math.random()*enemyAttackArray.length)]

}
function lose(){
    yourHpStart-=1
    alert(`Enemy Use ${enemyAttack}, You lose`)
    myhp.innerHTML=`hp = ${yourHpStart}`
    let enemyAttack=enemyAttackArray[Math.floor(Math.random()*enemyAttackArray.length)]
}
function draw(){
    alert(`Enemy Use ${enemyAttack}, It's a draw`)
    let enemyAttack=enemyAttackArray[Math.floor(Math.random()*enemyAttackArray.length)]
}


/*
function attackRock(){
    if (enemyAttack=="eScissor"){
        enemyHpStart-=enemy.rock
        hp.innerHTML=`HP = ${enemyHpStart}` }
    
    else if (enemyAttack=="ePaper"){
        yourHpStart-=1
        hp.innerHTML=`Hp = ${yourHpStart}`
    }
    console.log(enemy.rock)
    }
function attackPaper(){
    if (enemyAttack=="ePaper"){
        enemyHpStart-=enemy.paper
        hp.innerHTML=`HP = ${enemyHpStart}` }
    }
    console.log(enemy.paper)

function attackScissor(){
    enemyHpStart-=enemy.scissor
    hp.innerHTML=`HP = ${enemyHpStart}` }
    console.log(enemy.scissor)
    */