import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isDoctor: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        seenNotifications: {
            type: Array,
            default: [],
        },
        unseenNotifications: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", UserSchema);
