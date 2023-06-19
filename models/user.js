import { Schema, model, models } from "mongoose";

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true, 'Email already exists!'], //[the condition, if already exists]
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema) //models.User -> look in the model of users if it already exist & only if it is not there the create a new model. bcoz this route is called everytime the connection is established (Utube -> 1:34:30)

export default User;