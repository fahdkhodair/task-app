import mongoose from "mongoose";
import { TaskStatus } from "../common/E-nums/task.enum";
import { ITask } from "../common/interfaces/task.interfaces";
const taskSchema = new mongoose.Schema<ITask>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: TaskStatus,
        default: TaskStatus.PENDING
    }
});
export const TaskModel = mongoose.model<ITask>("Task", taskSchema);