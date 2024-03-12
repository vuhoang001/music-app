import { Express } from "express";
import { topicRouter } from "./topic.route";
import { songRouter } from "./songs.route";
import { favoriteSongRoute } from "./favorite-song.route";
import { searchRouter } from "./search.route";

const clientRoutes = (app: Express): void => {
    app.use('/topics', topicRouter)

    app.use('/songs', songRouter)

    app.use('/favorite-songs', favoriteSongRoute)

    app.use('/search', searchRouter)
}

export default clientRoutes