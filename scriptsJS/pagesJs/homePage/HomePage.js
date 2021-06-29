import './class/profil';





// function backMain 

const returnButton = document.querySelector('.return_main');
export function displayButtonReturnMain () {
    window.addEventListener('scroll',()=>{
        console.log(scrollY)
        if(scrollY > 161){
            returnButton.classList.add('return_main-active')
            console.log('activé')
        }
        else{           
            returnButton.classList.replace('return_main-active','return_main')
            console.log('desactivé')
        }
    })
}