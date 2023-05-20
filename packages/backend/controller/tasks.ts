import { Request, Response } from 'express';

const getAllTask = (_req: Request, res: Response) => {
  res.send("Get all task...");
};

const createTask = (req: Request, res: Response) => {
  res.send("Create a task...");
};

const getTask = (req: Request, res: Response) => {
  res.send("get a single a task...");
};

const updateTask = (req: Request, res: Response) => {
  res.send("update a single a task...");
};

const deleteTask = (req: Request, res: Response) => {
  res.send("delete a single a task...");
};

export { getAllTask, createTask, getTask, updateTask, deleteTask };
