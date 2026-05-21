import { projets } from "./projetsJSON.js";


document.addEventListener("DOMContentLoaded", () => {

    //Permet de prendre les éléments dans l'URL
    const params = new URLSearchParams(window.location.search);
    const categorie = params.get("categorie");

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



    // Créer les éléments
    projetsFiltres.forEach(projet => {

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

        svg.innerHTML = `
        <svg viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" class="w-full cursor-pointer">

        <g transform="scale(-1,1) translate(-200,0)">
        <!-- arrière -->
        <rect x="10" y="40" width="180" height="90" rx="6" fill="#EB6142" />

        <!-- contenu -->
        <rect x="20" y="50" width="160" height="60" fill="#FFFFFF" opacity="0.15" />

        <!-- rabat -->
        <path d="M10 40 L60 40 L75 25 L190 25 L190 42 Z"
              fill="#EF846B"
              class="folder-lid"
              style="transform-origin: 50px 40px;" />

        <!-- face avant -->
        <rect x="10" y="40" width="180" height="90" rx="6" fill="#F29480" />
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