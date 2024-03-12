// APlayer 
const aplayer = document.querySelector("#aplayer")
if (aplayer) {
    let dataSong = JSON.parse(aplayer.getAttribute('data-song'))
    let dataSinger = JSON.parse(aplayer.getAttribute('data-singer'))
    const ap = new APlayer({
        container: aplayer,
        audio: [
            {
                name: dataSong.title,
                artist: dataSinger.fullName,
                url: dataSong.audio,
                cover: dataSong.avatar
            }
        ],
        autoplay: true
    });
    const avatar = document.querySelector('.singer-detail .inner-avatar')
    ap.on('play', function () {
        avatar.style.animationPlayState = "running"
    })
    ap.on('pause', function () {
        avatar.style.animationPlayState = "paused"
    })
}

// End APlayer 

// Button like 
const buttonLike = document.querySelector('[button-like]')
if (buttonLike) {
    buttonLike.addEventListener('click', () => {
        const idSong = buttonLike.getAttribute('button-like')
        const isActive = buttonLike.classList.contains('active')

        const typeLike = isActive ? "dislike" : "like"
        const link = `/songs/like/${typeLike}/${idSong}`
        const option = {
            method: "PATCH"
        }
        fetch(link, option)
            .then(res => res.json())
            .then(data => {
                const span = buttonLike.querySelector('span')
                span.innerHTML = `${data.like}`
                buttonLike.classList.toggle('active')
            })
    })
}
// End button favorite


// Button favorite 
const listButtonFavorite = document.querySelectorAll('[button-favorite]')
if (listButtonFavorite.length > 0) {
    listButtonFavorite.forEach((buttonFavorite) => {
        buttonFavorite.addEventListener('click', () => {
            const idSong = buttonFavorite.getAttribute('button-favorite')
            const isActive = buttonFavorite.classList.contains('active')
            const typeFavorite = isActive ? "unfavorite" : "favorite"
            const link = `/songs/favorite/${typeFavorite}/${idSong}`
            const option = {
                method: "PATCH"
            }
            fetch(link, option)
                .then(res => res.json())
                .then(data => {
                    if (data.code == 200) {
                        buttonFavorite.classList.toggle('active')
                    }
                })
        })
    })
}
// End button favorite

