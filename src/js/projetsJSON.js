export const projets =
    [
        {
            "id": 1,
            "nom": "BouffETS",
            "categorie": ["projet-etude", "vitrine"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "Java",
                    "JavaScript",
                    "PHP",
                    "HTML",
                    "CSS",
                ],

                "frameworks": [
                    "TailwindCSS",
                ],

                "outils": [
                    "Android Studio",
                    "DBeaver",
                    "Figma"
                ],

                "infrastructure": [
                    "Apache",
                    "DigitalOcean Spaces",
                    "REST API",
                    "MySQL",
                    "JSON"
                ]
            },

            "liens": [
                {
                    "type": "site",
                    "url": "https://lionfish-app-rcun9.ondigitalocean.app/"
                }
            ],

            "images": [
                "../images/competences/logoJava.png",
                "../images/competences/logoJava.png",
                "../images/competences/logoJava.png"
            ],

            "videos": [
                "https://www.youtube.com/watch?v=fTKqtvXjkvo&pp=ygUHbXVzaXF1ZQ%3D%3D"
            ],

            "description": "Projet d'étude en équipe de 7 consistant à créer un site web de cuisine ainsi qu'une application mobile." +
                " Le but était de faire un réseau social ou les gens peuvent partager leurs recettes et peuvent faire des publications " +
                "sur ses recettes. Les utilisateurs pouvaient créer leur compte, ce qui leur permettait d'avoir accès à l'option du frigo qui permet de voir" +
                " la compatibilité entre les ingrédients du frigo et d'une recette en poarticulier. L'application possède un menu style instagram." +
                " Il y a également une barre de recherche ou on peut recherche par nom de recette, style de recette et ingrédients de recette." +
                " De mon côté, j'ai travaillé principalement sur la partie web front-end, mais j'ai également fait une partie du back-end.",

            "apprentissages": [
                "Travail d'équipe sur un projet logiciel de grande envergure",
                "Développement web front-end et intégration d'interfaces utilisateur",
                "Communication et répartition des tâches dans une équipe",
                "Utilisation d'outils de gestion de projet et de collaboration",
                "Conception d'interfaces adaptées aux appareils mobiles",
                "Organisation et structuration d'un projet logiciel",
                "Développement d'une application mobile connectée à un service web",
                "Gestion des contraintes et délais d'un projet scolaire"
            ],

            "duree": "4 mois",

            "anneeCreation": 2026
        },

        {
            "id": 2,
            "nom": "Simulateur de pathfinding A* et Dijkstra",
            "categorie": ["vitrine", "projet-personnel"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "Java"
                ],

                "frameworks": [
                    "Java Swing"
                ],

                "outils": [],

                "infrastructure": []
            },

            "liens": [],

            "images": [
                "../images/projets/SimulateurPathfindingAEtDijkstra/initial.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/algoWall.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/algoWallTeleport.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/saveLoad.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/changegridSize.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/DemoDijkstra.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/demoLabyrinthe.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/noPath.png",
                "../images/projets/SimulateurPathfindingAEtDijkstra/options.png",
            ],

            "videos": [],

            "description": "Application permettant de visualiser les algorithmes de pathfinding A* et Dijkstra sur une grille dynamique." +
                " Il est également possible d'utiliser des portails et des murs afin de changer la grille et d'offrir plus de possibilités!" +
                " Le logiciel offre également un système de sauvegarde pour conserver et réutiliser d'ancienne grille. Il est possible de modifier plusieurs" +
                " éléments dans l'application comme la grille, le temps entre chaque itération, l'algorithme utilisé, etc. Également, il est possible de mélanger" +
                " les deux algorithmes de pathfinding en les changeant pendant la recherche du chemin du point A au point B. Dans le futur, si je retravaille" +
                " sur le projet, alors je rajouterais un générateur de labyrinthe et un système de statisque sur les dernières simulations.",

            "apprentissages": [
                "Implémentation des algorithmes A* et Dijkstra",
                "Manipulation de structures de données comme les listes, files de priorité et graphes",
                "Gestion d'une grille interactive et de la visualisation en temps réel",
                "Optimisation des performances lors des recherches de chemin",
                "Conception d'interfaces interactives avec Java Swing",
                "Visualisation étape par étape d'algorithmes complexes",
                "Organisation du code dans un projet logiciel plus structuré",
                "Gestion des obstacles, poids et différents comportements de déplacement",
                "Débogage de systèmes algorithmiques complexes"
            ],

            "duree": "3 semaines (26 heures)",

            "anneeCreation": 2026
        },

        {
            "id": 3,
            "nom": "Chiffrement par flux XOR",
            "categorie": ["projet-etude"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "PEP/8"
                ],

                "frameworks": [],

                "outils": [],

                "infrastructure": []
            },

            "liens": [],

            "images": [
                "../images/projets/ChiffrementFluxXOR/exemple1.PNG",
                "../images/projets/ChiffrementFluxXOR/exemple2.PNG",
            ],

            "videos": [],

            "description": "Projet d'étude en assembleur Pep/8 fait en équipe de trois ou le but est de faire le chiffrement et le déchiffrement d'un message par flux XOR. " +
                "Ce projet utilise également un autre projet d'étude qui est le générateur de nombre speudo-aléatoire : ." +
                "Nous avions le choix entre quatre générateur de nombre speudo aléatoire et nous avions pris le Xorshift16, car il demandait de rentrer moins d'argument." +
                "Ce projet nous a demandé de faire beaucoup de débuggage et de faire du pas à pas pour comprendre ce qui ce passe " +
                "derrière le tout et s'assuré du bon fonctionnement du programme.",

            "apprentissages": [
                "Compréhension du fonctionnement du chiffrement par flux XOR",
                "Manipulation de données binaires et opérations bit à bit",
                "Utilisation de l'opérateur XOR pour le chiffrement et le déchiffrement",
                "Compréhension des concepts de base en cryptographie",
                "Gestion de chaînes de caractères et de leur conversion en données manipulables",
                "Développement d'algorithmes en assembleur Pep/8",
                "Gestion de la mémoire et des registres en bas niveau",
                "Débogage d'un programme assembleur étape par étape",
                "Compréhension des limites et vulnérabilités d'un chiffrement simple",
                "Conception d'un système capable de transformer puis restaurer un message original",
                "Optimisation de la logique de traitement dans un environnement à faibles ressources",
                "Travail avec les entrées/sorties dans un programme assembleur"
            ],

            "duree": "3 semaines",

            "anneeCreation": "2025"
        },

        {
            "id": 4,
            "nom": "Générateur de nombre speudo-aléatoire",
            "categorie": ["projet-etude"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "PEP/8"
                ],

                "frameworks": [],

                "outils": [],

                "infrastructure": []
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Projet en assembleur Pep/8 qui permet de générer des nombres de façon speudo aléatoire. Quatre modèles différent ont été fait. Générateur LCG (Linear congruential generator), " +
                "générateur Xorshift16 et générateur LFSR (Linear-feedback shift register) interne et externe. Chaque modèle est différent et manipule les bits à l'intérieur d'un nombre de 16 bits." +
                "Ce projet est en équipe de trois.",

            "apprentissages": [
                "Développement de générateurs de nombres pseudo-aléatoires en assembleur Pep/8",
                "Compréhension du fonctionnement des générateurs LCG, Xorshift16 et LFSR",
                "Manipulation avancée des opérations bit à bit (XOR, AND, décalages, rotations)",
                "Gestion des nombres signés et des limites des entiers sur 16 bits",
                "Implémentation d’algorithmes mathématiques en environnement bas niveau",
                "Débogage de comportements inattendus causés par les bits de signe",
                "Conception d’algorithmes permettant le calcul de périodes de suites récurrentes",
                "Création d’outils de test pour automatiser la validation des générateurs",
                "Optimisation et adaptation d’algorithmes théoriques en assembleur",
                "Compréhension des registres, de la mémoire et des contraintes d’un processeur simulé",
                "Implémentation d’un produit modulaire sans dépendre d’opérations haut niveau",
                "Résolution de problèmes liés aux boucles infinies et aux dépassements de capacité",
                "Validation expérimentale d’algorithmes à l’aide de jeux de tests",
                "Analyse des propriétés nécessaires pour obtenir des périodes maximales",
                "Utilisation et adaptation d’algorithmes cryptographiques et pseudo-aléatoires",
                "Travail d’équipe sur un projet technique complexe",
                "Lecture et interprétation d’algorithmes théoriques pour les transformer en code assembleur",
                "Développement d’une meilleure compréhension du fonctionnement interne des ordinateurs",
                "Conception de programmes capables de tester automatiquement plusieurs configurations",
                "Utilisation de l’intelligence artificielle comme outil d’assistance pour générer des cas de test et valider les résultats"
            ],

            "duree": "3 semaines",

            "anneeCreation": "2025"

        },

        {
            "id": 5,
            "nom": "Mini Moodle",
            "categorie": ["projet-etude"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "Java"
                ],

                "frameworks": [],

                "outils": [
                    "Android Studio",
                    "Figma"
                ],

                "infrastructure": [
                    "JSON",
                    "Client-Serveur"
                ]
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Projet d'application mobile ou le but était de faire une application comme moodle, mais en version plus petite avec des cours, " +
                "des quiz, des exams, des notes, etc. Il y avait un système de connexion. Ce projet était en équipe de trois. Il y était possible de faire semblant " +
                "remettre des travaux, de faire des quiz et d'avoir des notes sur les fameux travaux ou quiz.",

            "apprentissages": [
                "Développement d'une application mobile avec Android Studio",
                "Conception d'interfaces utilisateur adaptées aux appareils mobiles",
                "Création de maquettes d'interfaces avec Figma",
                "Communication entre une application mobile et un serveur",
                "Manipulation et échange de données au format JSON",
                "Compréhension des bases d'une architecture client-serveur",
                "Gestion de la navigation entre différentes vues d'une application",
                "Organisation du code dans un projet mobile structuré",
                "Gestion des interactions utilisateur dans une interface mobile",
                "Travail d'équipe sur un projet logiciel",
                "Débogage et résolution de problèmes dans une application Android",
                "Gestion des données reçues depuis un serveur distant",
                "Conception d'une application inspirée d'une plateforme éducative"
            ],

            "duree": "1 mois",

            "anneeCreation": "2026"
        },

        {
            "id": 6,
            "nom": "Démonstration d'intégrale",
            "categorie": ["projet-etude"],
            "status": "perdu",

            "technologies": {
                "langages": [
                    "Java"
                ],

                "frameworks": [
                    "Java Swing"
                ],

                "outils": [
                ],

                "infrastructure": [
                ]
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Projet réalisé en équipe de 2 ayant pour objectif de créer un simulateur d’intégrales interactif." +
                " L’application permettait de générer et visualiser plusieurs types de fonctions mathématiques, notamment des fonctions trigonométriques, exponentielles et logarithmiques." +
                " Il était également possible de personnaliser l’apparence de l’interface en choisissant la couleur des courbes ainsi que le thème visuel (clair ou sombre)." +
                " Du côté des calculs, l’utilisateur pouvait sélectionner le nombre de rectangles utilisés pour l’approximation, définir l’intervalle en x et choisir la méthode d’approximation (coin gauche ou centre du rectangle)." +
                " Le simulateur affichait ensuite l’aire réelle sous la courbe, l’aire approximée obtenue avec les rectangles ainsi que la différence entre les deux en pourcentage et en valeur absolue.",

            "apprentissages": [
                "Création et manipulation d’interfaces graphiques avec Java Swing",
                "Travail en équipe et séparation des responsabilités dans un projet logiciel",
                "Implémentation de méthodes d’approximation numérique d’intégrales",
                "Manipulation et évaluation de fonctions mathématiques dynamiques",
                "Utilisation des fonctions trigonométriques, exponentielles et logarithmiques en programmation",
                "Gestion des coordonnées et du dessin graphique dans une fenêtre Java",
                "Création de graphiques et visualisation de courbes mathématiques",
                "Gestion des événements utilisateurs et interactions dans une interface graphique",
                "Personnalisation d’interface utilisateur avec thèmes et couleurs dynamiques",
                "Calcul et comparaison entre valeurs théoriques et approximations numériques",
                "Organisation de code orienté objet en Java",
                "Débogage d’algorithmes mathématiques et visuels"
            ],

            "duree": "3 semaines",

            "anneeCreation": "2024"
        },

        {
            "id": 7,
            "nom": "Super Louis",
            "categorie": ["projet-etude"],
            "status": "terminé",
            "technologies": {
                "langages": [
                    "Java"
                ],

                "frameworks": [
                    "Java Swing"
                ],

                "outils": [
                ],

                "infrastructure": [
                ]
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Projet d'étude du cégep fait en équipe de quatre personnes. Super Louis est un jeu de plateforme 2D fait en Java ou plusieurs " +
                "objets peuvent être manipuler. On parle ici de force Newton, simulation de corde, de pendule, de vent et autre. " +
                "L'application offre également un éditeur de niveau ou on peut y sauvegarder son niveau et le tester. " +
                "L'application prend seulement le dernier niveau sauvegarder par contre. L'application avait malheureusement encore plus bugs et surtout des problèmes " +
                "d'optimisations, mais ce fut un projet bien perçu par l'école.",

            "apprentissages": [
                "Développement d'un jeu de plateforme 2D en Java",
                "Conception d'interfaces graphiques avec Java Swing",
                "Implémentation de mécaniques de jeu basées sur des concepts physiques",
                "Simulation de forces comme la gravité, le vent et les forces de Newton",
                "Création de systèmes de cordes et de pendules simulés",
                "Gestion des collisions et interactions entre différents objets",
                "Conception d'un éditeur de niveaux intégré au jeu",
                "Sauvegarde et chargement de niveaux personnalisés",
                "Organisation du code dans un projet logiciel de plus grande envergure",
                "Débogage de comportements physiques et interactions complexes",
                "Gestion de la logique temps réel dans une application interactive",
                "Travail d'équipe sur un projet logiciel",
                "Communication et répartition des tâches dans une équipe de développement",
                "Conception d'une architecture permettant de tester rapidement les niveaux créés",
                "Manipulation des événements clavier et des interactions utilisateur",
                "Optimisation de certaines mécaniques pour assurer une expérience de jeu fluide"
            ],

            "duree": "3 mois",

            "anneeCreation": "2025"

        },

        {
            "id": 8,
            "nom": "Galerie voxel arts",
            "categorie": ["projet-personnel"],
            "status": "en cours",
            "technologies": {
                "langages": [],

                "frameworks": [],

                "outils": [
                    "MagicaVoxel"
                ],

                "infrastructure": []
            },


            "liens": [],

            "images": [
                "../images/projets/GalerieVoxelArts/projetCaveMinecraft.PNG",
                "../images/projets/GalerieVoxelArts/ProjetTerrainDeFleur.PNG",
                "../images/projets/GalerieVoxelArts/panierFruit.PNG",
                "../images/projets/GalerieVoxelArts/panierFruitLego.PNG",
                "../images/projets/GalerieVoxelArts/crossyRoad.PNG",
                "../images/projets/GalerieVoxelArts/crossyRoadCylindre.PNG",
                "../images/projets/GalerieVoxelArts/potionLumineuse.PNG",
                "../images/projets/GalerieVoxelArts/UndertaleAmes.PNG",
                "../images/projets/GalerieVoxelArts/UndertaleAmesAvecBackgroundLumineux.PNG",
                "../images/projets/GalerieVoxelArts/ChampignonMarioBros.PNG",
                "../images/projets/GalerieVoxelArts/Chest.PNG",
                "../images/projets/GalerieVoxelArts/.PNG",
                "../images/projets/GalerieVoxelArts/CircuitElectrique.PNG",
                "../images/projets/GalerieVoxelArts/miniChien.PNG",
                "../images/projets/GalerieVoxelArts/miniChienClay.PNG",

            ],

            "videos": [],

            "description": "Cela n'est pas un projet en théorie, mais plusieurs petits projets de voxel art que j'ai moi même fait. " +
                "Ce projet sera toujours en cours vu que j'en fais une fois de temps en temps, mais c'est juste un petit bonus que je me permet " +
                "d'intégrer dans ce site d'archive de mes projets. C'est ma façon de démontrer une partie de mes talents artistiques.",

            "apprentissages": [
                "Création de modèles 3D en voxel art avec MagicaVoxel",
                "Compréhension des principes de base du voxel art (structure, volume et grille 3D)",
                "Développement de compétences en design et composition visuelle",
                "Amélioration du sens esthétique et de la cohérence visuelle dans un environnement 3D",
                "Expérimentation avec les couleurs, textures et éclairage en voxel art",
                "Création de scènes et objets 3D simples et stylisés",
                "Itération progressive sur des créations artistiques personnelles",
                "Organisation de projets créatifs à long terme",
                "Développement de la patience et de la précision dans la création artistique numérique"
            ],

            "duree": "indéterminé",

            "anneeCreation": "2026"
        },

        {
            "id": 9,
            "nom": "Site web d'archive",
            "categorie": ["projet-personnel"],
            "status": "en cours",

            "technologies": {
                "langages": [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],

                "frameworks": [
                    "TailWindCSS"
                ],

                "outils": [],

                "infrastructure": [
                    "JSON like",
                    "Github Pages"
                ]
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Ce projet correspond au site web sur lequel vous vous trouvez actuellement." +
                " Je l’ai inclus dans cette archive puisqu’il représente lui aussi un projet à part entière." +
                " Son objectif principal est de centraliser et documenter l’ensemble de mes projets personnels et scolaires afin de conserver une trace de mon parcours en développement logiciel." +
                " Ce site me permet également de présenter mes réalisations, mes expérimentations ainsi que mon évolution technique et créative au fil du temps.",

            "apprentissages": [
                "Conception et développement d'un site web personnel de type portfolio dynamique",
                "Structuration de données JavaScript pour afficher et organiser des projets",
                "Création d'une interface utilisateur pour naviguer entre différents projets",
                "Mise en place d'un système d'affichage dynamique basé sur des objets de données",
                "Organisation et centralisation de projets dans une application web unique",
                "Amélioration des compétences en HTML, CSS et JavaScript",
                "Utilisation de TailwindCSS pour la création d'une interface moderne et responsive",
                "Conception d'une architecture front-end modulaire et évolutive",
                "Gestion et mise à jour de contenu sans base de données externe",
                "Réflexion sur la présentation et la communication de projets techniques",
                "Optimisation de l'expérience utilisateur dans un portfolio interactif",
                "Développement d'un projet personnel servant de vitrine professionnelle"
            ],

            "duree": "1 mois",

            "anneeCreation": "2026"
        },

        {
            "id": 10,
            "nom": "Carte de fête web",
            "categorie": ["projet-personnel"],
            "status": "terminé",

            "technologies": {
                "langages": [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],

                "frameworks": [
                    "TailWindCSS"
                ],

                "outils": [],

                "infrastructure": []
            },

            "liens": [],

            "images": [
            ],

            "videos": [],

            "description": "Petit projet que je trouve intéressant malgré tout à rajouter. Cette carte est une carte de fête que j'ai fait pour ma copine initialement." +
                " Cette carte possède des conffetis qui tombe en fond et y possède un gâteau ou on peut éteindre les bougies en faissant assez de bruit dans le micro." +
                " Vu que la carte utilise des APIs web du navigateur pour le microphone, la carte fonctionne uniquement en localhost ou sur un site déployer.",

            "apprentissages": [
                "Développement d'une application web interactive avec HTML, CSS et JavaScript",
                "Utilisation du microphone de l'utilisateur via les APIs Web du navigateur",
                "Détection et traitement du son pour déclencher des interactions dans l'application",
                "Création d'animations visuelles et d'effets interactifs sur une page web",
                "Implémentation d'un système de confettis animé en arrière-plan",
                "Manipulation dynamique du DOM avec JavaScript",
                "Utilisation de TailwindCSS pour créer une interface moderne et responsive",
                "Gestion d'événements utilisateur et d'interactions en temps réel",
                "Création d'une expérience utilisateur ludique et personnalisée",
                "Conception d'un projet web créatif combinant animation et interaction audio",
                "Organisation rapide et efficace d'un petit projet personnel",
                "Développement d'une meilleure compréhension des capacités multimédia offertes par les navigateurs web"
            ],

            "duree": "une journée",

            "anneeCreation": "2026"

        },

        {
            "id": 11,
            "nom": "Jeu de plateforme 2D unity",
            "categorie": ["projet-personnel", "vitrine"],
            "status": "en cours",

            "technologies": {
                "langages": [
                    "C#",
                ],

                "frameworks": [],

                "outils": [
                    "Unity 6",
                    "Aseprite"
                ],

                "infrastructure": []
            },

            "liens": [],

            "images": [],

            "videos": [],

            "description": "Projet personnel en cours de développement, il s’agit de mon premier jeu réalisé avec le moteur Unity." +
                " Ce jeu de plateforme 2D met l’accent sur une expérience coopérative entre deux joueurs, où la coordination et l’entraide sont essentielles pour progresser." +
                " Les mécaniques de jeu reposent notamment sur la possibilité pour les joueurs d’interagir entre eux, jusqu’à devenir des plateformes l’un pour l’autre afin de surmonter les obstacles." +
                " Ce projet me permet d’explorer les bases du développement de jeux vidéo avec Unity, autant sur le plan technique (physique, collisions, scripts en C#) que sur le plan du design de gameplay." +
                " Il constitue également une première expérience complète de création de jeu, de la conception des mécaniques jusqu’à l’intégration des éléments visuels en pixel art.",

            "apprentissages": [
                "Développement d'un jeu de plateforme 2D avec Unity",
                "Programmation de mécaniques de jeu en C#",
                "Compréhension des bases du moteur de jeu Unity",
                "Gestion des collisions, déplacements et interactions entre joueurs",
                "Conception de mécaniques coopératives basées sur l'entraide entre deux joueurs",
                "Création d'un système où les joueurs peuvent devenir des plateformes interactives",
                "Développement de la logique de jeu en temps réel",
                "Conception et organisation de scènes dans Unity",
                "Utilisation du système physique de Unity pour les interactions et déplacements",
                "Création et intégration de sprites pixel art avec Aseprite",
                "Gestion des animations et éléments visuels dans un jeu 2D",
                "Débogage et résolution de problèmes liés aux mécaniques de gameplay",
                "Organisation du code dans un projet de jeu vidéo plus structuré",
                "Développement d'un premier projet personnel complet avec Unity",
                "Conception d'une expérience de jeu coopérative basée sur la coordination entre joueurs",
                "Itération et amélioration progressive des mécaniques de gameplay au fil du développement"
            ],

            "duree": "4 mois",

            "anneeCreation": "2026"
        }


    ]
