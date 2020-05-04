let listPerso = []

class Tournoi{
    constructor(listPerso){

    }

    start(){

    }

    isDied(perso){
        if(perso.pointsDeVie <= 0){
            nobodyDied = false;
            loser = perso;
        }
    }

    fight(perso1,perso2){
        while(i<20 && nobodyDied){
            if (perso1.pointsDeVie <= 0){
                nobodyDied = false;
                winner = perso2;

            }
        }
    }

    canLevelUp(perso){
        if (perso.pointsEXP >= 10){
            perso.pointsEXP -= 10;
            perso.niveau += 1;
            console.log(`Le combatant ${perso.nom} vient de level up ! Il est désormais niveau ${niveau} !`)
        }
        return;
    }
}

class Personnage{
    constructor(pointsDeVie,pointsArmure,pointsForce,pointsEXP,niveau,nom){
        this.pointsDeVie = pointsDeVie;
        this.pointsArmure = pointsArmure;
        this.pointsForce = pointsForce;
        this.pointsEXP = pointsEXP;
        this.niveau = niveau;
        this.nom = nom;

    }
    
    description(){
        return `Le combatant ${this.nom} possède ${this.pointsDeVie} points de vie, ${this.pointsForce} points de force, ${this.pointsArmure} points d'armure, il a également ${this.pointsEXP} points d'exprérience et est de niveau ${this.niveau} !`
    }
}

myCarac = new Personnage(20,30,40,18,1,"Lucas")



console.log(myCarac.description())