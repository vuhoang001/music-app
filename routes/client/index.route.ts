import { Express } from "express";
import { topicRouter } from "./topic.route";
import { songRouter } from "./songs.route";
import FavoriteSong from "../../models/favorite-song.model";
import { favoriteSongRoute } from "./favorite-song.route";

const clientRoutes = (app: Express): void => {
    app.use('/topics', topicRouter)

    app.use('/songs', songRouter)

    app.use('/favorite-songs', favoriteSongRoute)
}

export default clientRoutes