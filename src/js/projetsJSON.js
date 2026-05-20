export const projets =
    [
        {
            "id": 1,
            "nom": "BouffETS",
            "categorie": ["projet-etude"],
            "status": "Terminé",
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

            "images": [
                "../images/competences/logoJava.png",
                "../images/competences/logoJava.png",
                "../images/competences/logoJava.png"
            ],

            "videos": [
                //"https://www.youtube.com/watch?v=example1"
            ],

            "description": "Projet d'étude en équipe de 7 consistant à créer un site web de cuisine ainsi qu'une application mobile. Le but était de faire un réseau social ou les gens peuvent partager leurs recettes et les gens peuvent faire des publications sur ses recettes.",

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
            "status": "Terminé",
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

            "images": [
                //"images/pathfinding/grid.png",
                //"images/pathfinding/algorithm.png"
            ],

            "videos": [],

            "description": "Application permettant de visualiser les algorithmes de pathfinding A* et Dijkstra sur une grille dynamique. Il est également possible d'utiliser des portails et des murs afin de changer et d'offrir plus de possibilités!",

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
            "status": "Terminé",
            "technologies": {
                "langages": [
                    "PEP/8"
                ],

                "frameworks": [],

                "outils": [],

                "infrastructure": []
            },

            "images": [

            ],

            "videos": [],

            "description": "Projet d'étude en assembleur Pep/8 fait en équipe de trois ou le but est de faire le chiffrement et le déchiffrement d'un message par flux XOR. Ce projet utilise également un autre projet d'étude qui est le générateur de nombre speudo-aléatoire :",

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

            "annee": "2025"
        },

        {
            "id": 4,
            "nom": "Générateur de nombre speudo-aléatoire",
            "categorie": ["projet-etude"],
            "status": "Terminé",
            "technologies": {
                "langages": [
                    "PEP/8"
                ],

                "frameworks": [],

                "outils": [],

                "infrastructure": []
            },

            "images": [],

            "videos": [],

            "description": "Projet en assembleur Pep/8 qui permet de générer des nombres de façon speudo aléatoire. Quatre modèles différent ont été fait. Générateur LCG (Linear congruential generator), générateur Xorshift16 et générateur LFSR (Linear-feedback shift register) interne et externe",

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

            "annee": "2025"

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

            "images": [],

            "videos": [],

            "description": "Projet d'application mobile ou le but était de faire un semblable de moodle avec des cours, des quiz, des exams, des notes, etc. Il y avait un système de connexion. Ce projet était en équipe de trois.",

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

            "annee": "2026"
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

            "images": [],

            "videos": [],

            "description": "Projet d'étude du cégep fait en équipe de quatre personnes, Super Louis est un jeu de plateforme 2D fait en Java ou plusieurs objets peuvent être manipuler. On parle ici de force Newton, simulation de corde, de pendule, de vent et autre. L'application offre également un éditeur de niveau ou on peut y sauvegarder son niveau et le tester. Prend seulement le dernier niveau sauvegarder par contre",

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

            "annee": "2025"

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

            "images": [],

            "videos": [],

            "description": "Cela n'est pas un projet en théorie, mais plusieurs petits projets de voxel art que j'ai moi même fait. Ce projet sera toujours en cours vu que j'en fais une fois de temps en temps, mais c'est juste un petit bonus que je me permet d'intégrer dans ce site d'archive de mes projets.",

            "apprentissage": [
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

            "annee": "2026"
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

                "infrastructure": []
            },

            "images" : [],

            "videos" : [],

            "description" : "Ce projet est le site sur le quel vous êtes actuellement. Je l'inclus dans les projets vu que ça en reste un. Ce projet a pour but de laisser une trace de tous mes projets quelques parts et de montrer ce que j'ai fait et de montrer mon évolution dans le temps.",

            "apprentissage" : [],

            "duree" : "1 mois",

            "annee" : "2026"
        }


    ]
