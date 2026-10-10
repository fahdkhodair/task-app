import { Request, Response } from 'express';
import { TaskRepository } from '../repositories/task.repositories';
class TaskController {
    private taskRepo: TaskRepository;
    constructor() {
        this.taskRepo = new TaskRepository();
    }
   createTask = async (req: Request, res: Response) => {
   try {
    const {title, description, status} = req.body;
    console.log("REQ BODY:", req.body);
    const task = await this.taskRepo.create({title, description, status});
    res.status(201).json({success: true, message: "Task created successfully",data:task});
   } catch (error) {
    console.log("CREATE TASK ERROR:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : error,
    });
   }
   }
   getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await this.taskRepo.findAll();
        res.status(200).json({success: true, data: tasks});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : error,
        });
    }
   }
   getTaskById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const taskId = Array.isArray(id) ? id[0] : id;
        const task = await this.taskRepo.findById(taskId);
        res.status(200).json({success: true, data: task});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : error,
        });
    }
   }
   updateTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const taskId = Array.isArray(id) ? id[0] : id;
        const {title, description, status} = req.body;
        const task = await this.taskRepo.update(taskId, {title, description, status});
        res.status(200).json({success: true, data: task});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : error,
        });
    }
   }
   deleteTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const taskId = Array.isArray(id) ? id[0] : id;
        const task = await this.taskRepo.delete(taskId);
        res.status(200).json({success: true, data: task});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : error,
        });
    }
   }
}
export default TaskController;