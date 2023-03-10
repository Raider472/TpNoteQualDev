import {Decathlon} from '../modele/Decathlon'
import {Menu} from '../controleur/Menu';
import { FileAthleteDAO } from '../dao/FileAthleteDAO';
import { FileEpreuveDAO } from '../dao/FileEpreuveDAO';
import { FileResultatDAO } from '../dao/FileResultatDAO';

const competition = new Decathlon("Décastar Talence", new Date(2022, 8, 17), new Date(2022, 8, 18));

FileEpreuveDAO.completeEpreuvesCompetition('decathlon', competition.getEpreuves());

const dossier="talence2022";

competition.athletes = FileAthleteDAO.chargeAthletes(dossier);

competition.resultats = FileResultatDAO.chargeResultats(dossier, competition.athletes, competition.getEpreuves());

Menu.gestionCompetition(competition);

FileResultatDAO.sauveResultats(dossier, competition.resultats);

let test = Menu.choixCompétition("test", new Date(2022, 8, 17), new Date(2022, 8, 18))
console.log(test)
