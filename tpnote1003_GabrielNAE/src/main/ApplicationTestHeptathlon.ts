import {Menu} from '../controleur/Menu';
import { FileAthleteDAO } from '../dao/FileAthleteDAO';
import { FileEpreuveDAO } from '../dao/FileEpreuveDAO';
import { FileResultatDAO } from '../dao/FileResultatDAO';
import { Decathlon } from '../modele/Decathlon';
import { Heptathlon } from '../modele/Heptathlon';

let test = Menu.choixCompétition("Championnats du monde d'athlé, Eugene, Oregon,", new Date(2022, 7, 23), new Date(2022, 7, 24))
try {
    if (test instanceof Heptathlon) {
        FileEpreuveDAO.completeEpreuvesCompetition('heptathlon', test!.getEpreuves());
        const dossier="eugene2022";
        
        test!.athletes = FileAthleteDAO.chargeAthletes(dossier);
        
        test!.resultats = FileResultatDAO.chargeResultats(dossier, test!.athletes, test!.getEpreuves());
        
        Menu.gestionCompetition(test!);
        
        FileResultatDAO.sauveResultats(dossier, test!.resultats);
    }
    else if (test instanceof Decathlon) {
        FileEpreuveDAO.completeEpreuvesCompetition('decathlon', test!.getEpreuves());
        const dossier="talence2022";
        
        test!.athletes = FileAthleteDAO.chargeAthletes(dossier);
        
        test!.resultats = FileResultatDAO.chargeResultats(dossier, test!.athletes, test!.getEpreuves());
        
        Menu.gestionCompetition(test!);
        
        FileResultatDAO.sauveResultats(dossier, test!.resultats);
    }
}
catch {
    throw new Error("vous avez quitter le menu")
}