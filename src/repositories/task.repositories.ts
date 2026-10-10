import {BaseRepository} from "./base.repositories";
import  {TaskModel}  from "../models/Task.Model";
import {ITask} from "../common/interfaces/task.interfaces";
export class TaskRepository extends BaseRepository<ITask> {
  constructor() {
    super(TaskModel);
  }
}