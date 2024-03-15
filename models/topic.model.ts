import mongoose, { mongo } from "mongoose";
import slug from 'mongoose-slug-updater'
mongoose.plugin(slug)
const topicSchema = new mongoose.Schema(
    {
        title: String,
        avatar: String,
        description: String,
        status: {type: String, default: 'active'},
        slug: { type: String, slug: 'title', unique: true },
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    }, { timestamps: true }
)

const Topic = mongoose.model("Topic", topicSchema, 'topics')

export default Topic