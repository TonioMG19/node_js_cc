let listPerso = []

class Tournoi{
    constructor(listPerso){
        this.concurents = listPerso;
        this.perso1;
        this.perso2;
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
            for(let i = 0; i < (this.concurents.length/2)-1; i++){
                this.perso1 = this.concurents[i+i]
                this.perso2 = this.concurents[i+i+1]
                this.fight(this.perso1,this.perso2)
            }
        }

        if(this.concurents.length == 1){
            this.winner = this.concurents[0];
            console.log(`Le gagnant du tournoi est ${this.winner.nom} !`);
            return;
        }
    }

    isDied(perso,i){
        if(perso.pointsDeVie <= 0){
            console.log(`${perso.nom} vient de perdre !`);
            this.concurents.splice(i,1)
            return;
        }
        return;
    }

    fight(perso1,perso2){
        let i = 0;
        let toRemove1,toRemove2 = 0;
        while(perso1.pointsDeVie > 0 && perso2.pointsDeVie > 0 && i < 20){
            if(perso2.pointsArmure - perso1.pointsForce < 0){
                toRemove1 = (perso1.pointsForce - perso2.pointsArmure);
                perso2.pointsArmure = 0;
            }else if(perso2.pointsArmure - perso1.pointsForce >= 0){
                toRemove1 = 0;
                perso2.pointsArmure -= perso1.pointsForce;
            }

            if(perso1.pointsArmure - perso2.pointsForce < 0){
                toRemove2 = (perso2.pointsForce - perso1.pointsArmure);
                perso1.pointsArmure = 0;
            }else if(perso1.pointsArmure - perso2.pointsForce >= 0){
                toRemove2 = 0;
                perso1.pointsArmure -= perso2.pointsForce;
            }

            i++;
        }

        if(perso1.pointsDeVie < 1){
            perso2.pointsDeVie = perso2.maxVie;
            perso2.pointsArmure = perso2.maxArmure;
        }else if(perso2.pointsDeVie < 1){
            perso1.pointsDeVie = perso1.maxVie;
            perso1.pointsArmure = perso1.maxArmure;
        }else if(i == 20){
            if(perso1.pointsArmure + perso1.pointsDeVie + perso1.pointsForce > perso2.point)
        }
        return;
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
        this.maxVie = pointsDeVie;
        this.pointsArmure = pointsArmure;
        this.maxArmure = pointsArmure;
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
carac3 = new Personnage(84,65,41,20,1,"Lucien")
carac4 = new Personnage(15,17,84,64,5,"Arouf")

monTournoi = new Tournoi([myCarac,otherCarac,carac3,carac4]);

monTournoi.start()
