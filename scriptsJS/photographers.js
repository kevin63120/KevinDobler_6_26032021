

const containerSelected = document.querySelector(".header_media_container-selected");



containerSelected.addEventListener('click',(e)=>{
    let items = document.querySelectorAll('.photograph_tag-item')
    if (e){
        items.forEach(item=>{
            item.style.display="block";
        })
    }
})