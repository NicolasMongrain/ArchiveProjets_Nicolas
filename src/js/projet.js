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

    document.getElementById("status").textContent = projet.status;

    document.getElementById("annee").textContent = projet.anneeCreation;
    document.getElementById("duree").textContent = projet.duree;

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
        case "archive":
            statusEl.classList.add("text-blue-400");
        case "abandonné":
            statusEl.classList.add("text-purple-400");
        default:
            statusEl.classList.add("text-gray-400");
    }

    // Images / vidéos
    const mediaContainer = document.querySelector(".grid.grid-cols-2");

    mediaContainer.innerHTML = "";

    // images
    projet.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        image.className = "rounded-lg w-full object-cover";
        mediaContainer.appendChild(image);
    });

    // vidéos (YouTube embed)
    projet.videos.forEach(url => {
        const videoId = extractYouTubeId(url);

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.className = "w-full aspect-video rounded-lg";
        iframe.allowFullscreen = true;

        mediaContainer.appendChild(iframe);
    });

    // Apprentissage
    const apprentissage = document.getElementById("apprentissage");
    apprentissage.innerHTML = "<h3 class='mb-2'>Apprentissage</h3>";

    projet.apprentissages.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "text-sm text-gray-300 list-disc ml-5";
        apprentissage.appendChild(li);
    });

    // 🧰 7. Technologies
    const techContainer = document.getElementById("technologies");

    techContainer.innerHTML = "<h3 class='mb-2'>Technologies</h3>";

    const allTech = [
        ...(projet.technologies.langages || []),
        ...(projet.technologies.frameworks || []),
        ...(projet.technologies.outils || []),
        ...(projet.technologies.infrastructure || [])
    ];

    allTech.forEach(tech => {
        const span = document.createElement("span");
        span.textContent = tech;
        span.className = "inline-block bg-white/10 px-2 py-1 m-1 rounded text-sm";
        techContainer.appendChild(span);
    });

});

function extractYouTubeId(url) {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
}