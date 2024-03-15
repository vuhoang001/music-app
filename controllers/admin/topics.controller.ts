import { Request, Response } from "express"
import Topic from "../../models/topic.model"


//  [GET]/admin/topics 
export const index = async (req: Request, res: Response) => {

    const topics = await Topic.find({
        deleted: false
    })
    res.render('admin/pages/topics/index.pug', {
        pageTitle: "Quản lý chủ đề",
        topics: topics
    })
}

// [GET] /admin/topics/create 
export const create = async (req: Request, res: Response) => {

    res.render('admin/pages/topics/create.pug', {
        pageTitle: "Thêm mới chủ đề"
    })
}

// [POST] /admin/topics/createPost
export const createPost = async (req: Request, res: Response) => {
    
    const fileName = `/uploads/${req['file'].filename}`;
    const data = new Topic({
        title: req.body.title, 
        avatar: fileName, 
        description: req.body.desc
    })
    data.save()
    res.redirect('back')


}