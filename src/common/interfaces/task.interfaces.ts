import { TaskStatus } from "../E-nums/task.enum";
export interface ITask {
    title: string;
    description: string;
    status: TaskStatus;
}