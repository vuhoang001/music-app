import { Request, Response } from "express";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";

// [GET] /search/result 

export const result = async (req: Request, res: Response) => {
    const keyword: string = `${req.query.keyword}`
    let newSongs = []

    if (keyword) {
        const keyWordRegex = new RegExp(keyword, 'i')
        const songs = await Song.find({
            title: keyWordRegex
        })

        for (const item of songs) {
            const infoSinger = await Singer.findOne({
                _id: item.singerId
            })
            item["infoSinger"] = infoSinger

        }
        newSongs = songs
    }
    res.render("client/pages/search/result", {
        pageTitle: `Kết quả ${keyword}`,
        keyword: keyword,
        songs: newSongs
    })
}