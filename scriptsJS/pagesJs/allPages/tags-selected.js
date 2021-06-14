export function createHeaderTagSearch (){
    const containerTag =  document.querySelector(".photographers_tags");

     const NavIndexByTag= `<div class="nav-list " >
     <span><a href="#" class="nav-item nav-index-page" >#portrait</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#art</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#fashion</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#architecture</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#travel</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#sport</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#animals</a></span>
     <span><a href="#" class="nav-item nav-index-page" >#events</a></span>
 </div> ` ;
 containerTag.innerHTML=(NavIndexByTag);

 }

export function checkedDataTag() {
    let previousValue;
    const listSelectorTag = document.querySelectorAll(".nav-item");
    const cartPhotographer = document.querySelectorAll(".container_photographs_profils");

    listSelectorTag.forEach(selectorTag => {
        selectorTag.addEventListener("click", (e) => {

            listSelectorTag.forEach(tag => tag.classList.remove("active"))
            selectorTag.classList.add("active")

            const value = e.target.innerHTML.replace('#', '');

            if (previousValue === value) {
                cartPhotographer.forEach(article => {
                    article.removeAttribute('style')

                })
                return;
            }
            previousValue = value;
            
            cartPhotographer.forEach(article => {
                if (article.classList.contains(value)) {
                    article.removeAttribute("style")
                    console.log(article)
                }
                else {
                    article.style.display = "none"
                }
            })
        })
    });

}

export function checkPersonalDataTag() {
    const listSelectorTag = document.querySelectorAll(".nav-item");
    const cartPersonalPage = document.querySelectorAll(".media_box")
    let previousValue;

    listSelectorTag.forEach(selectorTag => {
        selectorTag.addEventListener("click", (e) => {
            listSelectorTag.forEach(tag => tag.classList.remove("active"))
            selectorTag.classList.add("active")
            const value = e.target.innerHTML.replace('#', '');
            if (previousValue === value) {
                cartPersonalPage.forEach(article => {
                    article.removeAttribute('style')
                })
                return;
            }
            previousValue = value;
            cartPersonalPage.forEach(article => {
                if (article.classList.contains(value)) {
                    article.removeAttribute("style")
                    console.log(article)
                }
                else {
                    article.style.display = "none"
                }
            })
        })
    });
}