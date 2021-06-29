import './pagesJs/pagePhotographer/filterPictureOnPage';
import './pagesJs/pagePhotographer/scriptCounterHeart';
import './pagesJs/pagePhotographer/modal';
import './pagesJs/pagePhotographer/class/lightBox';
import { retrieveData } from "./pagesJs/allPages/retrieveData";

import { likeModifier } from "./pagesJs/pagePhotographer/scriptCounterHeart";
import { totalHeart } from "./pagesJs/pagePhotographer/scriptCounterHeart";
import { optionSelected } from "./pagesJs/pagePhotographer/filterPictureOnPage";
import { modal } from "./pagesJs/pagePhotographer/modal";
import { checkPersonalDataTag } from "./pagesJs/allPages/tags-selected";
import { PhotographPage } from "./pagesJs/pagePhotographer/class/photographerProfilPage";
import { Lightbox } from "./pagesJs/pagePhotographer/class/lightBox";


function sortByLikes(a, b) {
    if (a.likes < b.likes) {
        return -1;
    } if (a.likes > b.likes) {
        return 1;
    }
    return 0;
}
function sortbyTitles(a, b) {
    if (a.title < b.title) {
        return -1;
    } if (a.title > b.title) {
        return 1;
    }
    return 0;
}
function sortByDates(a, b) {
    if (a.date < b.date) {
        return -1;
    } if (a.date > b.date) {
        return 1;
    }
    return 0;
}
async function sortPicture(media, typeSort, profilActif) {
    const picturesContainer = document.querySelector(".container_article");
    const sortedMedia = [...media].sort(typeSort);
    profilActif.createContainerPicture(picturesContainer, sortedMedia)
}

async function selectedSort(typeEvent, media, profil) {
    let mediaAvailable = media;
    let defaultSort = sortPicture(mediaAvailable, sortByLikes, profil)
    let sortSelectButton = document.querySelector(".option-active");
    sortSelectButton.addEventListener(typeEvent, () => {
        let options = document.querySelectorAll(".option-filter");
        options.forEach(option => {
            option.addEventListener(typeEvent, (e) => {
                e.preventDefault()

                let optionSelect = option.innerHTML;

                if (optionSelect == "Popularité") {
                    sortPicture(mediaAvailable, sortByLikes, profil)
                    likeModifier("keydown")
                    likeModifier("click")
                    checkPersonalDataTag()
                    new Lightbox().inititalize()
                } if (optionSelect == "Date") {
                    sortPicture(mediaAvailable, sortByDates, profil)
                    likeModifier("keydown")
                    likeModifier("click")
                    checkPersonalDataTag()
                    new Lightbox().inititalize()
                } if (optionSelect == "Titre") {
                    sortPicture(mediaAvailable, sortbyTitles, profil)
                    likeModifier("keydown")
                    likeModifier("click")
                    checkPersonalDataTag()
                    new Lightbox().inititalize()
                }
            })
        })

    })
    if (sortSelectButton.innerHTML === "Popularité") {
        return defaultSort
    }
}

const searchParams = new URLSearchParams(window.location.search)

const photographerId = searchParams.get('id')
console.log({ photographerId })
displayPhotographerPage(Number(photographerId))

async function displayPhotographerPage(photographerId) {
    try {
        const data = await retrieveData()
        const photographers = data.photographers;
        const media = data.media;

        const profilPage = document.querySelector(".individual_body-close")
        profilPage.classList.remove("individual_body-close");
        profilPage.classList.add('individual_body-active')

        const photographer = photographers.find(p => p.id === photographerId);
        const container = document.querySelector(".section_photograph_profil_container")

        const photographerMedia = media.filter(m => m.photographerId === photographerId)
        const photographerPage = new PhotographPage(photographer)
        photographerPage.personalPageHeader(container)

        console.log({ photographer })
        optionSelected("click")
        optionSelected("keydown")
        selectedSort("click", photographerMedia, photographerPage);
        selectedSort("keydown", photographerMedia, photographerPage);
        checkPersonalDataTag()
        modal(photographer)
        totalHeart()
        likeModifier("click")
        likeModifier("keydown")
        new Lightbox().inititalize()
        
    } catch (err) {
        console.log(err)
    }
}

