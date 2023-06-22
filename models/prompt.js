import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema) //models.User -> look in the model of users if it already exist & only if it is not there the create a new model. bcoz this route is called everytime the connection is established (Utube -> 1:34:30)

export default Prompt;