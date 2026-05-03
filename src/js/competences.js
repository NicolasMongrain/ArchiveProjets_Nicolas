import { competences } from "./competencesJSON.js";

//Programmation Orienté Objets
const programmationObjets = document.getElementById("ProgrammationObjets");

competences
    .filter((competence) => competence.groupe === "Programmation Orienté Objets")
    .forEach((competence) => {

        programmationObjets.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Programmation Web
const programmationWeb = document.getElementById("ProgrammationWeb");

competences
    .filter((competence) => competence.groupe === "Programmation Web")
    .forEach((competence) => {

        programmationWeb.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Programmation Script et Assembleur
const programmationAssembleuretScript = document.getElementById("ProgrammationAssembleuretScript");

competences
    .filter((competence) => competence.groupe === "Programmation Assembleur et Script")
    .forEach((competence) => {

        programmationAssembleuretScript.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Programmation Database
const programmationDatabase = document.getElementById("ProgrammationDatabase");

competences
    .filter((competence) => competence.groupe === "Programmation Database")
    .forEach((competence) => {

        programmationDatabase.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Réseau
const reseau = document.getElementById("reseau");

competences
    .filter((competence) => competence.groupe === "Réseau")
    .forEach((competence) => {

        reseau.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Application mobile
const applicationMobile = document.getElementById("applicationMobile");

competences
    .filter((competence) => competence.groupe === "Application mobile")
    .forEach((competence) => {

        applicationMobile.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Création de jeux
const creationDeJeux = document.getElementById("creationDeJeux");

competences
    .filter((competence) => competence.groupe === "Création de jeux")
    .forEach((competence) => {

        creationDeJeux.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Création Artistique
const creationArtistique = document.getElementById("creationArtistique");

competences
    .filter((competence) => competence.groupe === "Création Artistique")
    .forEach((competence) => {

        creationArtistique.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });


//Autres
const autres = document.getElementById("autres");

competences
    .filter((competence) => competence.groupe === "Autres")
    .forEach((competence) => {

        autres.innerHTML += `
            <div class="flex items-center gap-4 bg-[#23283B] p-4 rounded-xl border border-[#2E344A]">
                
                <img 
                    src="${competence.image}" 
                    alt="${competence.nom}"
                    class="w-14 h-14 object-contain"
                >

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">
                        ${competence.nom}
                    </span>

                    <span class="text-sm text-[#A7B3C8]">
                        ${competence.niveau}
                    </span>
                </div>

            </div>
        `;
    });