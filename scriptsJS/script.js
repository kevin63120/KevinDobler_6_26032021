import { Profil } from "./pagesJs/homePage/class/profil";
import './pagesJs/allPages/tags-selected';
import { retrieveData } from "./pagesJs/allPages/retrieveData";
import './pagesJs/HomePage/HomePage';
import { createHeaderTagSearch } from "./pagesJs/allPages/tags-selected";
import { checkedDataTag } from "./pagesJs/allPages/tags-selected";
import { displayButtonReturnMain } from "./pagesJs/HomePage/HomePage";

const containerArticle = document.querySelector(".article-container");

//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html

if (containerArticle) {
    UserIndexProfils()
}
// profil photographe de la page d'acceuil (recupération et affichage)
async function UserIndexProfils() {
    try {
        const data = await retrieveData()
        let photographers = data.photographers;

        photographers.forEach(photographer => {
            new Profil(photographer).createProfilStructure(containerArticle, data);
        })
        createHeaderTagSearch()
        checkedDataTag()
        displayButtonReturnMain()
    } catch (err) {
        console.log(err)
    }
}














