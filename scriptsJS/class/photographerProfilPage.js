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

 
        createContainerPicture (rootElement, images) {
           
            
            const article =  document.createElement("article");
            article.classList.add("media_box");
            let pictures = images
          for (let i=0 ; i<pictures.length;i++){
            
            let picture = pictures[i].image 
             console.log(picture)      
            const container = `
            
            <div class="media_item">
              <img src="./Sample Photos/${this.name}/${pictures[i].image}" alt="like" class="counter-btn" aria-pressed="true">
            </div>
            <footer class="media_item-descripton">
                <p class="media_item-title">arc-en-ciel</p>
                <p class="media_item-price">70$</p>
                <div class="media_item_likes_container">
                    <p class="counter">${picture.likes}</p>
                    <img src="/Vectorheart.91825cf7.svg" alt="like" class="counter-btn" aria-pressed="true">
                </div>
            </footer>
        
            `         
           rootElement.appendChild(article)
            article.innerHTML=container;
              
          }

            
                 
            
           
            
        }

    }


    