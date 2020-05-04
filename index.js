let listPerso = []

class Tournoi{
    constructor(listPerso){
        this.concurents = listPerso;
    }

    start(){
        if(!this.concurents || this.concurents.length==0){
            console.log("Eh bien, je crois qu'il n'y pas grand monde !");
            return;
        }
        while (this.concurents.length >= 2){
            for(let i = 0; i < this.concurents.length; i++){
                this.isDied(this.concurents[i],i);
                this.canLevelUp(this.concurents[i])
            }
            for(let i = 0; i < this.concurents.length-1; i++){

            }
            this.concurents[0].pointsDeVie = 0;
        }

        if(this.concurents.length == 1){
            this.winner = this.concurents[0];
            console.log(`Le gagnant du tournoi est ${this.winner.nom} !`);
            return;
        }
    }

    isDied(perso,i){
        if(perso.pointsDeVie <= 0){
            console.log(`${perso} vient de succomber !`);
            delete this.concurents[i];
            return;
        }
        return;
    }

    fight(perso1,perso2){
        let loser;
        let nobodyDied = true;
        this.isDied(perso1)
        this.isDied(perso2)
    }

    canLevelUp(perso){
        if (perso.pointsEXP >= 10){
            perso.pointsEXP -= 10;
            perso.niveau += 1;
            console.log(`Le combatant ${perso.nom} vient de level up ! Il est désormais niveau ${perso.niveau} !`)
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

myCarac = new Personnage(20,30,40,18,1,"Lucas");
otherCarac = new Personnage(20,50,6,19,2,"Jean");

monTournoi = new Tournoi([myCarac,otherCarac]);

monTournoi.start()
