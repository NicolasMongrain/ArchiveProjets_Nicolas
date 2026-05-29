import { projets } from "./projetsJSON.js";

document.addEventListener("DOMContentLoaded", () => {

    // Récupérer l'id dans l'URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Trouver le projet
    const projet = projets.find(p => p.id === id);

    if (!projet) {
        document.body.innerHTML = "<h1>Projet introuvable</h1>";
        return;
    }

    // Remplir les champs simples
    document.getElementById("titre").textContent = projet.nom;
    document.getElementById("description").textContent = projet.description;

    document.getElementById("titreSite").textContent = "Archive - Nicolas Mongrain - " + projet.nom;

    document.getElementById("status").textContent = projet.status;

    document.getElementById("annee").textContent = projet.anneeCreation;
    document.getElementById("duree").textContent = projet.duree;

    const liensContainer = document.getElementById("liens");

    liensContainer.innerHTML = "";


    // Si le projet a des liens
    projet.liens.forEach(lien => {

        const a = document.createElement("a");
        a.href = lien.url;
        a.target = "_blank";

        const icons = {
            site: "🌍 Voir le site",
            repo: "💻 Voir le code",
            api: "📦 API"
        };

        a.textContent = icons[lien.type] || "🔗 Lien";

        a.className = `
        px-3 py-1 bg-white/10 rounded-lg
        hover:bg-white/20 transition
        text-sm font-medium
    `;

        liensContainer.appendChild(a);
    });

    // Status style
    const statusEl = document.getElementById("status");

    switch (projet.status) {
        case "terminé":
            statusEl.classList.add("text-green-400");
            break;
        case "en cours":
            statusEl.classList.add("text-yellow-400");
            break;
        case "perdu":
            statusEl.classList.add("text-red-400");
            break;
        case "archive":
            statusEl.classList.add("text-blue-400");
            break;
        case "abandonné":
            statusEl.classList.add("text-purple-400");
            break;
        default:
            statusEl.classList.add("text-gray-400");
    }

    // Images / vidéos
    const mediaContainer = document.querySelector(".grid.grid-cols-2");

    mediaContainer.innerHTML = "";

    // vidéos (YouTube embed)
    projet.videos.forEach(url => {
        const videoId = extractYouTubeId(url);

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.className = "w-full aspect-video rounded-lg";
        iframe.allowFullscreen = true;

        mediaContainer.appendChild(iframe);
    });

    // images
    projet.images.forEach(imgSrc => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = imgSrc;

        img.onload = () => {

            // Dimension
            canvas.width = img.width;
            canvas.height = img.height;

            // Dessine image
            ctx.drawImage(img, 0, 0);

            // Style watermark
            ctx.font = "bold 50px Arial";
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.strokeStyle = "rgba(0,0,0,0.5)";
            ctx.lineWidth = 2;

            const text = "© Nicolas Mongrain";

            // Position du text watermark
            const x = canvas.width - 480;
            const y = canvas.height - 60;

            // Contour noir
            ctx.strokeText(text, x, y);

            // Texte blanc
            ctx.fillText(text, x, y);

            // Style canvas
            canvas.className = "rounded-lg w-full object-cover border-2 border-[#EEF8FF]";

            mediaContainer.appendChild(canvas);
        };
    });

    // Apprentissage
    const apprentissage = document.getElementById("apprentissage");
    apprentissage.innerHTML = "<h3 class='mb-2'>Apprentissage</h3>";

    projet.apprentissages.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "bg-white/10 px-2 py-1 m-1 rounded text-sm";
        apprentissage.appendChild(li);
    });

    // Technologies
    const techContainer = document.getElementById("technologies");

    techContainer.innerHTML = "<h3 class='mb-2'>Technologies</h3>";

    const allTech = [
        ...(projet.technologies.langages || []),
        ...(projet.technologies.frameworks || []),
        ...(projet.technologies.outils || []),
        ...(projet.technologies.infrastructure || [])
    ];

    allTech.forEach(tech => {
        const span = document.createElement("li");
        span.textContent = tech;
        span.className = "bg-white/10 px-2 py-1 m-1 rounded text-sm w-40 md:w-70 lg:w-100";
        techContainer.appendChild(span);
    });

});

function extractYouTubeId(url) {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
}