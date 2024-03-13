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
    ap.on('ended', () => {
        const link = `/songs/listen/${dataSong._id}`
        const option = {
            method: "PATCH"
        }

        fetch(link, option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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

// Suggest button
const boxSearch = document.querySelector(".box-search")
if (boxSearch) {
    const boxSugget = boxSearch.querySelector('.inner-suggest')
    const input = boxSearch.querySelector("input[name='keyword']")
    input.addEventListener('keyup', () => {
        const keyword = input.value
        const link = `/search/suggest?keyword=${keyword}`

        fetch(link)
            .then(res => res.json())
            .then(data => {
                const songs = data.songs;
                if (songs.length > 0) {
                    boxSugget.classList.add('show')
                    const htmls = songs.map(song => {
                        return `
                            <a class="inner-item" href="/song/detail/${song.slug}">
                                <div class="inner-image"> <img src=${song.avatar} /></div>
                                <div class="inner-info">
                                    <div class="inner-title">${song.title}</div>
                                    <div class="inner-singer">${song.infoSinger.fullName}</div>
                                </div>
                            </a>
                        `
                    })
                    const boxList = boxSugget.querySelector('.inner-list')
                    boxList.innerHTML = htmls.join("")
                } else {
                    boxSugget.classList.remove('show')
                }
            })
    })
}
// End suggest button 
