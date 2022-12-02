import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  questions: Question[] = [
    {
   
      enonce : 'Comment meurent t-ont du VIH ?',
       reponses : [
           'De la maladie elle même',
           'D\'autres maladies en raison d\'un système immunitaire trop faible',
              'On ne meurt pas du VIH !',
           'On meurt par manque de chance !'
       ],
       bonneReponse : 1,
       description : 'VIH : VIRUS DE L\'IMMUNODÉFICIENCE HUMAINE Lorsqu\'une personne est infectée, le VIH attaque progressivement certaines cellules qui coordonnent l\'immunité (c\'est-à-dire les défenses de l\'organisme contre les microbes). Lorsque le patient est malade depuis plusieurs années sans faire de traitement du VIH, il y\'aura peu de cellules défendant notre organisme ! \n Ainsi d\'autres maladies s\'installeront et le patient meurt de ces maladies (On arrive donc au SIDA) '
   },
   {
   
     enonce: 'Combien de personnes sont mort et de personnes sont infectées du VIH en 2021?',
     reponses: [
         '650 000 morts et 1,5 millions environ infectées ',
         '200 000 morts et 800 000 environs infectées',
          '800 000 morts et 2 millions environs infectées',
          '10 000 morts et 50 000 environs infectées'
     ],
     bonneReponse : 1,
       description : 'En 2021, 650 000 personnes [510 000 à 860 000] sont mortes de causes liées au VIH et 1,5 million [1,1 à 2,0 millions] de personnes ont été infectées par le VIH.\nLe VIH reste un problème majeur de santé publique de portée mondiale, qui a entraîné jusqu\’ici plus de 40,1 millions de décès [33,6 à 48,6 millions].'
   
   },
   {
   
     enonce : 'La Donovanose, qu\'est ce que c\'est ?',
     reponses: [
         'un médicament servant à prévenir contre le VIH',
         'Une plante ayant des propriétés aphrodisiaques',
         'maladie rare, du à une bactérie',
         'Un nom des pays de l\'Est'
     ],
     bonneReponse : 2,
     description : 'La donovanose (granulome inguinal ou granulome vénérien) est due à une bactérie, la Klebsiella granulomatis (ou Calymmatobacterium granulomatis).\nCette maladie rare sévit surtout en Inde et Asie du Sud-Est, au Brésil, en Afrique du Sud et en Australie centrale. On la retrouve aussi régulièrement en Guyane française et dans les Caraïbes.\nLa transmission sexuelle peut avoir lieu en cas de contact avec les plaies ouvertes au cours de rapports sexuels oraux, vaginaux ou anaux.'
   },
   {
   
     enonce : 'Comment se transmet le VIH ?',
     reponses: [
         'Par Relation sexuelle avec un préservatif',
         'En mangeant dans le même plat',
         'En faisant un bisous sur la bouche UwU',
         'Par voie sanguine lors de partage du matériel d\’injection en cas d\’usage de drogues injectables'
     ],
     bonneReponse : 3,
       description : 'Le VIH (Virus de l\’Immunodéficience Humaine) responsable du SIDA (Syndrome d\’Immuno-Déficience Acquise) peut se transmettre d\’une personne contaminée à une autre :\nlors de rapports sexuels non protégés par un préservatif (externe  ou interne) avec pénétration vaginale et/ou pénétration anale,\nlors d\'une fellation (essentiellement en cas d\’éjaculation dans la bouche),\nPar voie sanguine lors de partage du matériel d\’injection en cas d\’usage de drogues injectables, d\’échanges de paille pour sniffer et en cas de piqûre accidentelle avec du matériel de soins contaminé pour les professionnels de la santé (Accident d\'Exposition au Sang),\nde la mère à l\’enfant au cours de la grossesse ou de l\’allaitement.'
   },
   
   {
   
     enonce : 'Laquelle de ces raison est valable pour faire un test de dépistage ?',
     reponses: [
         'Lorsque j\'ai eu des relations sexuelles non protégées avec mon/ma partenaire',
         'J\'ai oublié de me laver les dents',
         'J\'ai été en contact avec une personne ayant des IST (serrer la main/bise)',
         'Quand j\'ai envie'
     ],
     bonneReponse : 0,
     description : 'Les occasions suivantes sont adéquates à un test de dépistage :\n Si vous n\'avez jamais fait de test de dépistage, c\'est le seul moyen de savoir si vous avez le VIH ou pas ;\n Si vous ne vous protégez pas toujours lorsque vous avez des relations sexuelles, il est recommandé de faire un test de dépistage au moins une fois par an ;\nSi vous envisagez une vie de couple, faites tous les deux un test de dépistage avant d\'arrêter le préservatif ;\nSi vous avez été ou êtes usager de drogues par voie intra-veineuse et que vous avez échangé du matériel d\'injection avec d\'autres usagers de drogues, il vaut mieux faire un dépistage.'
   },
   {
   
     enonce : 'Comment se proteger d\'une personne possédant le VIH ?',
     reponses: [
         'Pas besoin, ça ne se transmet pas !',
         'Relations monogames entre partenaires sains, Rapports sexuels sans pénétration',
         'En pratiquant que des fellations, aucune pénétration',
         'C\'est pas grave, le VIH, c\'est pas trop important, ça part vite !'
     ],
     bonneReponse : 1,
     description : 'L\’utilisation systématique du préservatif externe ou interne est le meilleur moyen de se protéger des IST. Toutefois, le préservatif peut être insuffisant \npour éviter la transmission de certaines IST. Il est donc important de faire des dépistages et de se traiter, cela évite de les transmettre à d\’autres.'
   },
   {
   
     enonce : 'Que sinifie l\'abréviation TPE ?',
     reponses: [
         'Traçage Pornographique Étendu',
         'Traitement Post-Exposition',
         'Tronche Pas Étirée',
         'Traitement Pre-Exposition'
     ],
     bonneReponse : 1,
     description : 'Ce traitement est appelé Traitement Post-Exposition (TPE) ou Prophylaxie Post-Exposition (PPE - PEP en anglais). Il peut être prescrit dans les cas d\'AES soit lors d\'un accident d\'exposition sexuelle ou d\'exposition sanguine.\nIl doit être commencé le plus tôt possible, de préférence moins de 4 heures et au plus tard dans les 48 heures, après un risque de transmission du VIH.\nCe traitement dure 28 jours. '
   },
   {
   
     enonce : 'À quoi correspond le numero sur les tests de dépistage ?',
     reponses: [
         'Il s\'agit d\'un index purement technique, un indice de densité optique',
         'Correspond au nombre de jour depuis le dernier rapport',
         'La quantité de coléstérole dans le sang',
         'C\'est le résultat de la somme du produit de la division de...'
     ],
     bonneReponse : 0,
     description : 'Il s\'agit d\'un index purement technique, un indice de densité optique pour être plus précis. Le résultat n\'est jamais égal à 0 puisque nous avons tous des anticorps (autres que des anticorps anti-VIH). Il y a donc toujours un \'bruit de fond\'.Si le résultat est :\négal ou supérieur à 1 : le résultat (test ELISA) est positif mais une 2ème analyse doit être pratiquée sur le même prélèvement (Western Blot) ;\ninférieur à 0,708 : il est négatif. On n\'a donc pas trouvé de trace du VIH dans l\'analyse ;\ncompris entre 0,708 et 0,999 : il est dit  \'douteux\' (ou équivoque) et doit être contrôlé par une nouvelle sérologie réalisée 1 semaine plus tard.'
   },
   {
     enonce : 'Quels sont les symptomes du  VIH ? ',
     reponses: [
         'Une petite grippe',
         'On est paralysé au lit',
         'Aucun',
         'Plusieurs, comme la fièvre, malaise, déficit moteur..'
     ],
     bonneReponse : 2,
     description : 'Voici les syndromes : \nSyndrome viral aigü : fièvre, céphalées, malaise, tachycardie, douleurs articulaires et courbatures, asthénie, polyadénopathie,\nManifestations cutanéo-muqueuses : angine ou pharyngite, rash, ulcères oraux ou génitaux,\nTroubles digestifs : diarrhée,\nSymptômes neurologiques : troubles cognitifs, déficit moteur, neuropathie, méningite lymphocytaire, encéphalite'
    }
  ];

  constructor() { }

  getThereAreStillQuestion(): boolean {
    return this.questions.length != 0;
  }

  getNextQuestion(): Question {
    const question = this.questions.splice(Math.floor(Math.random() * this.questions.length), 1)[0];
    return question;
  }

}
