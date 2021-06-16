import './pagesJs/pagePhotographer/filterPictureOnPage';
import './pagesJs/pagePhotographer/scriptCounterHeart';
import './pagesJs/pagePhotographer/modal';
import './pagesJs/pagePhotographer/lightBox';
import { retrieveData } from "./pagesJs/allPages/retrieveData";
import { activeLightbox } from "./pagesJs/pagePhotographer/lightBox";
import { likeModifier } from "./pagesJs/pagePhotographer/scriptCounterHeart";
import { totalHeart } from "./pagesJs/pagePhotographer/scriptCounterHeart";
import { optionSelected } from "./pagesJs/pagePhotographer/filterPictureOnPage";
import { modal } from "./pagesJs/pagePhotographer/modal";
import {checkPersonalDataTag} from "./pagesJs/allPages/tags-selected";
import { PhotographPage } from "./pagesJs/pagePhotographer/class/photographerProfilPage";
import { Lightbox } from "./pagesJs/pagePhotographer/class/photographerProfilPage";

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
      const picturesContainer = document.querySelector(".container_article");
      const photographerMedia = media.filter(m => m.photographerId === photographerId)

      const photographerPage = new PhotographPage(photographer)
      photographerPage.personalPageHeader(container)

      console.log({ photographer })
      //******************************************************* */
      optionSelected()
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
      function sortPicture(media, typeSort) {
          const sortedMedia = [...media].sort(typeSort);
          ;
          photographerPage.createContainerPicture(picturesContainer, sortedMedia)
      }

      function selectedSort(typeEvent) {
          let defaultSort = sortPicture(photographerMedia, sortByLikes)

          let sortSelectButton = document.querySelector(".option-active");
          sortSelectButton.addEventListener(typeEvent, () => {
              let options = document.querySelectorAll(".option-filter");
              options.forEach(option => {
                  option.addEventListener(typeEvent, (e) => {
                      e.preventDefault()
                      
                      let optionSelect = option.innerHTML;

                      if (optionSelect == "Popularité") {
                          sortPicture(photographerMedia, sortByLikes)
                          likeModifier("click")
                          likeModifier("keydown")
                          activeLightbox()
                          checkPersonalDataTag()
                          new Lightbox().inititalize()
                      } if (optionSelect == "Date") {
                          sortPicture(photographerMedia, sortByDates)
                          likeModifier("keydown")
                          likeModifier("click")
                          checkPersonalDataTag()
                          activeLightbox()
                          new Lightbox().inititalize()
                      } if (optionSelect == "Titre") {
                          sortPicture(photographerMedia, sortbyTitles)
                          likeModifier("keydown")
                          likeModifier("click")
                          activeLightbox()
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

      selectedSort("click");
      selectedSort("keydown");
      checkPersonalDataTag()
      /********************************************** */
      modal(photographer)
      /************************************** */
      totalHeart()
      likeModifier("click")
      likeModifier("keydown")
      /************************************************** */
      new Lightbox().inititalize()
      
      activeLightbox()
  } catch (err) {
      console.log(err)
  }
}

