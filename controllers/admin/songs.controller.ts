import { Request, Response } from "express"
import Song from "../../models/song.model"

// [GET] /admin/songs
export const index = async (req: Request, res: Response) => {
    const songs = await Song.find({
        deleted: false
    })
    res.render('admin/pages/songs/index.pug', {
        pageTitle: "Trang bài hát",
        songs: songs
    })
}