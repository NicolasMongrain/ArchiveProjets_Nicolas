import { projets } from "./projetsJSON.js";


document.addEventListener("DOMContentLoaded", () => {

    //Permet de prendre les éléments dans l'URL
    const params = new URLSearchParams(window.location.search);
    const categorie = params.get("categorie");

    const titre = document.getElementById("titre");

    let texte = categorie
        ? categorie
            .replace(/-/g, " ")
            .replace(/\b\w/g, lettre => lettre.toUpperCase())
        : "Tous les projets";

    // Ajouter "s" seulement pour certains cas
    if (texte.toLowerCase().includes("projet personnel") ||
        texte.toLowerCase().includes("projet etude")) {

        texte = texte
            .split(" ")
            .map(mot => mot.endsWith("s") ? mot : mot + "s")
            .join(" ");
    }

    titre.textContent = texte;
    const container = document.getElementById("dossier");



    // Filtrer les projets selon la catégorie (ou tout afficher si null)
    const projetsFiltres = categorie
        ? projets.filter(p => p.categorie.includes(categorie))
        : projets;

    // Si aucun projet
    if (projetsFiltres.length === 0) {
        container.innerHTML = "<p>Aucun projet trouvé.</p>";
        return;
    }

    let index = 0;

    // Priorité des status
    const ordreStatus = {
        "en cours": 5,
        "terminé": 4,
        "archive": 3,
        "abandonné": 2,
        "perdu": 1
    };

    // Trier les projets
    projetsFiltres.sort((a, b) => {

        // Trier par année (plus récent en premier)
        const diffAnnee = b.anneeCreation - a.anneeCreation;

        if (diffAnnee !== 0) {
            return diffAnnee;
        }

        // Trier par status
        return (ordreStatus[b.status.toLowerCase()] || 0)
            - (ordreStatus[a.status.toLowerCase()] || 0);
    });

    // Créer les éléments
    projetsFiltres.forEach(projet => {

        index++;

        // Dimension du texte sur le dossier
        const nom = projet.nom;

        const maxLength = 18; // ajuste selon ton design

        let textSVG = "";

        if (nom.length > maxLength) {

            const words = nom.split(" ");
            let line1 = "";
            let line2 = "";

            words.forEach(word => {
                if ((line1 + " " + word).trim().length <= maxLength) {
                    line1 += (line1 ? " " : "") + word;
                } else {
                    line2 += (line2 ? " " : "") + word;
                }
            });

            textSVG = `
        <text x="100" y="85"
              text-anchor="middle"
              fill="#EEF8FF"
              font-size="12"
              font-weight="bold">

            <tspan x="100" dy="0">${line1}</tspan>
            <tspan x="100" dy="14">${line2}</tspan>

        </text>
    `;

        } else {

            textSVG = `
        <text x="100" y="95"
              text-anchor="middle"
              fill="#EEF8FF"
              font-size="12"
              font-weight="bold">
            ${nom}
        </text>
    `;
        }

        // Création du dossier
        const svg = document.createElement("div");


        svg.className = `transition-transform duration-450 ease-in-out group folder-anim`;

        svg.style.animationDelay = `${index * 0.1}s`;

        svg.innerHTML = `
        <svg viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" class="w-full cursor-pointer">

        <g transform="scale(-1,1) translate(-200,0)">
        <!-- arrière -->
        <rect x="10" y="40" width="180" height="90" rx="6" fill="${getColorBack(projet.status)}" />

        <!-- contenu -->
        <rect x="20" y="50" width="160" height="60" fill="#FFFFFF" opacity="0.15" />

        <!-- rabat -->
        <path d="M10 40 L60 40 L75 25 L190 25 L190 42 Z"
              fill="${getColorRabat(projet.status)}"
              class="folder-lid"
              style="transform-origin: 50px 40px;" />

        <!-- face avant -->
        <rect x="10" y="40" width="180" height="90" rx="6" fill="${getColorFront(projet.status)}" class="folder-front" />
    </g>

    ${textSVG}

</svg>
`;

        svg.addEventListener("click", () => {
            window.location.href = `projet.html?id=${projet.id}`;
        });

        container.appendChild(svg);

    });

});


function getColorFront(status) {

    switch (status.toLowerCase()) {

        case "terminé":
            return "#A2EB7A"; // vert

        case "en cours":
            return "#EBE27A"; // jaune

        case "perdu":
            return "#F28F7E"; // rouge

        case "archive":
            return "#6FD4E8"; // bleu

        case "abandonné":
            return "#976AE6"; // mauve

        default:
            return "#95A5A6"; // gris
    }
}

function getColorBack(status) {

    switch (status.toLowerCase()) {

        case "terminé":
            return "#7FE449"; // vert

        case "en cours":
            return "#E4D749"; // jaune

        case "perdu":
            return "#EC5A41"; // rouge

        case "archive":
            return "#4BC9E2"; // bleu

        case "abandonné":
            return "#834CE1"; // mauve

        default:
            return "#95A5A6"; // gris
    }
}

function getColorRabat(status) {

    switch (status.toLowerCase()) {

        case "terminé":
            return "#A6F27E"; // vert

        case "en cours":
            return "#F0E86E"; // jaune

        case "perdu":
            return "#F5A498"; // rouge

        case "archive":
            return "#8FDBEB"; // bleu

        case "abandonné":
            return "#A785E6"; // mauve

        default:
            return "#95A5A6"; // gris
    }
}