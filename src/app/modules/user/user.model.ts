import { Schema, model } from 'mongoose';
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
    {
        id: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
        password: { type: String, required: true },
        needsPasswordChange: { type: Boolean, default: true },
        role: {
            type: String,
            enum: ['admin', 'faculty', 'student'],
            default: 'in-progress'
        },
        status: {
            type: String,
            enum: ['blocked', 'in-progress'],
            default: 'in-progress'
        }
    },
    {
        timestamps: true,
    }
)

export const User = model<TUser>('User', userSchema);