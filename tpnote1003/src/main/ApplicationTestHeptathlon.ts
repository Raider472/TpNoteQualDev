import {Menu} from '../controleur/Menu';
import { FileAthleteDAO } from '../dao/FileAthleteDAO';
import { FileEpreuveDAO } from '../dao/FileEpreuveDAO';
import { FileResultatDAO } from '../dao/FileResultatDAO';

let test = Menu.choixCompétition("Championnats du monde d'athlé, Eugene, Oregon,", new Date(2022, 7, 23), new Date(2022, 7, 24))
console.log(test)
try {
    FileEpreuveDAO.completeEpreuvesCompetition('heptathlon', test!.getEpreuves());
    const dossier="eugene2022";
    
    test!.athletes = FileAthleteDAO.chargeAthletes(dossier);
    
    test!.resultats = FileResultatDAO.chargeResultats(dossier, test!.athletes, test!.getEpreuves());
    
    Menu.gestionCompetition(test!);
    
    FileResultatDAO.sauveResultats(dossier, test!.resultats);
}
catch {
    throw new Error("Vous avez quittez le menu")
}