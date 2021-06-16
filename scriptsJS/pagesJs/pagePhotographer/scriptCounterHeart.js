


export function totalHeart() {
    let countHearts = document.querySelectorAll(".counter");
    let totalHeartPrint = document.querySelector(".total-heart-number")
    let result = 0;
    const arrayAllLikes = countHearts;

    arrayAllLikes.forEach(like => {
        let intLike = parseInt(like.innerHTML);
        let curentResult;
        curentResult = + intLike;
        result = curentResult + result;
        totalHeartPrint.innerHTML = (result);
    })
}

export function likeModifier(typeEvent) {
    let countHearts = document.querySelectorAll(".counter");

    countHearts.forEach(heart => {
        let intHeart = parseInt(heart.innerHTML)
        let like = false;

        heart.nextElementSibling.addEventListener(typeEvent, (e) => {
            if (like === true) {
                e.stopPropagation()
                heart.innerHTML = (--intHeart);
                totalHeart()
                return like = false;

            } if (like === false) {
                e.stopPropagation()
                heart.innerHTML = (++intHeart);
                heart.nextElementSibling.style.color='red';
                totalHeart()
                return like = true;
            }
        })
    })
}



