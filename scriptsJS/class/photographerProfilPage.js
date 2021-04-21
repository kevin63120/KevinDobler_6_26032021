import "../photographers";
import { Profil } from "../photographers";

export class PhotographPage extends Profil {
    
   
        personalPageHeader (rootElement)
        {

            const header = document.createElement("article");
            header.classList.add("photograph_profil_container");
            rootElement.appendChild(header);
            
             //tags array chang for return new array on desktop list 
            const tags = this.tags.map(tag=>{
            return `<li class="photograph_tag-item personal">#${tag}</li>`
            })
    
            // url for picture profil photographer
            const rootPhoto ='Sample Photos/Photographers ID Photos/';
    
            const headerProfil = `
                <div class="photograph_profil-reference">
                    <h1 class="name" id="name_personal_page">${this.name}</h1>
                    <p class="photograph_location" id="location_personal_page">${this.city}${this.country?  ', ' + this.country : '' }</p>
                    <p class="photograph_description-text" id="description_personal_page">${this.tagline}</p>
                </div>
                <button class="btn-contact btn-contact-1" aria-label="contact-me">Contactez-moi</button>
                <img src="${rootPhoto + this.portrait}" alt="" class="profil_picture">
                <div class="container_photograph_tag-list">
                    <ul class="photograph_tag-list" role="">
                        ${tags.join('')}
                    </ul> 
                </div>    
                `
    
            header.innerHTML = (headerProfil)
        }
    }


    