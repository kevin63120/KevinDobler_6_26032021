export function activeLightbox(){
//DOM Elements
const article = document.querySelectorAll(".media_box")
const lightbox = document.querySelector(".lightbox");
const pictures = document.querySelectorAll(".media_item");
const closeButton = document.querySelector(".lightbox_button_close")

//function open or close lightbox if click to pictures nodes

const OpenOrCloseLightbox =() => {
    if(lightbox.classList.contains("lightbox")){
          lightbox.classList.replace("lightbox","lightbox-active")
    }else{
        lightbox.classList.replace( "lightbox-active" , "lightbox")
    }    
};
//function close or close lightbox if click to button close nodes
const CloseLightboxWithButton = () =>{
    lightbox.classList.replace( "lightbox-active" , "lightbox")   
}
// event to open or close lightbox if click to pictures nodes
pictures.forEach(picture => picture.addEventListener("click", OpenOrCloseLightbox));

// event to close lightbox if click to button close
closeButton.addEventListener("click",CloseLightboxWithButton);

/*************************************************************/

/*
    au click sur une photo on recupère l'addresse de la photo
    on utilise l'adresse de la photo dans une lighbox preconfiguré

*/


    
  
}

export function getPictureLightbox(media , photographer){
    let medias = media;
    let photograph = photographer;
    medias.forEach(mediaValid => {
        if(mediaValid.photographerId === photograph.id){
            console.log(mediaValid.video)
            
        }
            console.log()
        
    })
    console.log(photograph.id)
    
    

} 
 export function getURL(mediaSource , photographer){
        const UrlMedia = `./Sample Photos/${photographer.name}/${mediaSource.image} `;
        
         const medias = document.querySelectorAll('.media_item');
         const mediasArray =[];
         medias.forEach(media =>{
            mediasArray.push(media.children)
            
            console.log(UrlMedia)

         })
         console.log(mediasArray)}
         

 class Lightbox{
     displayMedia(){
         const containerImage = document.querySelector('.lightbox_container_image');
         console.log("rien");
     }
     
}

class video extends Lightbox {
    displayMedia(){
        const containerMedia = document.querySelector('.lightbox_container_image');
        const videoLightBox = document.createElement("video");
        videoLightBox.className=("lightbox_picture-active");
        containerMedia.appendChild(videoLightBox);
        console.log(videoLightBox );

    }
    
    
}

class image extends Lightbox{
    displayMedia(){
        const containerImage = document.querySelector('.lightbox_container_image');
        const imageLightBox = document.createElement("img");
        imageLightBox.setAttribute("data-la", "ici la photo")
         
        containerImage.appendChild(imageLightBox)
        

    }
}

function factory (type){
    switch (type){
        case "image" :
            return new image()

        case "video" : 
            return new video()
    }
}

const photoDeMariage = factory("image");
const videoDeMariage =  factory("video");

