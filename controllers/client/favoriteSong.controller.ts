import { Request, Response } from "express"
import FavoriteSong from "../../models/favorite-song.model"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"

export const index = async (req: Request, res: Response) => {
    const favoriteSongs = await FavoriteSong.find({
        deleted: false
    })
    console.log(favoriteSongs)
    for (const item of favoriteSongs) {
        const infoSong = await Song.findOne({
            _id: item.songId
        })
        const infoSinger = await Singer.findOne({
            _id: infoSong.singerId
        })

        item['infoSong'] = infoSong
        item['infoSinger'] = infoSinger

    }
    
    res.render('client/pages/favorite-songs/index.pug', {
        pageTitle: "Bài hát yêu thích !", 
        songs: favoriteSongs
    })
}