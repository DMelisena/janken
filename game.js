//Show enemy's HP and yours
//Decide Enemy's Type
    //randomizer on enemy type array
    //
//Show some clue
//Show known clues
const eff=50
const uneff=17
const norm=25
class enemy{
    constructor(type,rock,scissor,paper){
        this.type=type;
        this.rock=rock;
        this.scissor=scissor;
        this.paper=paper;
    }

}
const earth= new enemy("Earth Golem",norm,uneff,eff)
const water= new enemy("Water Golem",uneff,uneff,eff)
const flesh= new enemy("Flesh Golem",norm,eff,uneff)
const metal= new enemy("Metal Golem",eff,uneff,norm)
const wood = new enemy("Wood Golem",norm,eff,norm)
const crystal = new enemy ("Crystal Golem",eff,norm,uneff)


enemyTypesArr=[earth,water,flesh,metal,wood,crystal]
enemy=enemyTypesArr[Math.floor(Math.random()*enemyTypesArr.length)]
console.log(enemy.type)



