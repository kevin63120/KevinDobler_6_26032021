const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");

export let activeLinkProfilPage = (AllLiks)=>{
    linkPhotographerPage.forEach(link => {
        AllLiks.addEventListener("click",(e=>{
            e.preventDefault()
            alert("t'ascliquée")
            }))
    })
}

activeLinkProfilPage(linkPhotographerPage)