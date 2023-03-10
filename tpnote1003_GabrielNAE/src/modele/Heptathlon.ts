import { Course } from './epreuves/Course';
import { Saut } from './epreuves/Saut';
import { Lancer } from './epreuves/Lancer';

import { Competition } from './Competition';

export class Heptathlon extends Competition {

    constructor(nom:string, debut:Date, fin:Date) {
        super(nom, debut, fin)
    }

    protected setEpreuves() : void {
        this._epreuvesJours = [];
        this._epreuvesJours[0] = [];
        this._epreuvesJours[0][0] = new Course("100m haies");
        this._epreuvesJours[0][1] = new Saut("Saut en hauteur");
        this._epreuvesJours[0][2] = new Lancer("Lancer du poids");
        this._epreuvesJours[0][3] = new Course("200m");

        this._epreuvesJours[1] = [];
        this._epreuvesJours[1][0] = new Saut("Saut en longueur");
        this._epreuvesJours[1][1] = new Lancer("Lancer du javelot");
        this._epreuvesJours[1][2] = new Course("800m");
    }
}